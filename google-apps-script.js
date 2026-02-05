// ============================================
// CONFIGURATION
// ============================================
var SHEET_ID = '1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE';
var NOTIFY_EMAIL = 'intake@arunatalent.com';
var DASHBOARD_BASE_URL = 'https://refer.arunatalent.com/my-referrals.html';
var APPLY_URL = 'https://apply.arunatalent.com';
var REFER_URL = 'https://refer.arunatalent.com';

// ============================================
// FORM HANDLERS (Existing functionality)
// ============================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.openById(SHEET_ID);

    if (data.formType === 'referrer_application') {
      handleReferrerApplication(ss, data);
    } else if (data.formType === 'direct_referral') {
      handleDirectReferral(ss, data);
    } else if (data.formType === 'creator_application') {
      handleCreatorApplication(ss, data);
    }

    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleReferrerApplication(ss, data) {
  var sheet = ss.getSheetByName('Applications');
  if (!sheet) {
    sheet = ss.insertSheet('Applications');
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Instagram', 'Background', 'How Heard', 'Network', 'Ref Code']);
  }

  sheet.appendRow([
    new Date(),
    data.fullName,
    data.email,
    data.phone,
    data.instagram,
    data.background,
    data.howHeard,
    data.network,
    data.refCode || ''
  ]);

  var subject = 'New Referrer Application: ' + data.fullName;
  var body = 'New referrer application received!\n\n' +
    'Name: ' + data.fullName + '\n' +
    'Email: ' + data.email + '\n' +
    'Phone: ' + data.phone + '\n' +
    'Instagram: ' + data.instagram + '\n' +
    'Background: ' + data.background + '\n' +
    'How they heard: ' + data.howHeard + '\n' +
    'Network: ' + data.network + '\n' +
    (data.refCode ? 'Referred by: ' + data.refCode : '') + '\n\n' +
    'View all applications: https://docs.google.com/spreadsheets/d/' + SHEET_ID;

  MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
}

function handleDirectReferral(ss, data) {
  var sheet = ss.getSheetByName('Direct Referrals');
  if (!sheet) {
    sheet = ss.insertSheet('Direct Referrals');
    sheet.appendRow(['Timestamp', 'Referrer Name', 'Referrer Email', 'Referral Name', 'Referral Phone', 'Referral Email', 'Referral Instagram', 'Relationship', 'Notes']);
  }

  sheet.appendRow([
    new Date(),
    data.referrerName,
    data.referrerEmail,
    data.referralName,
    data.referralPhone,
    data.referralEmail,
    data.referralInstagram,
    data.relationship,
    data.notes
  ]);

  var subject = 'New Direct Referral from ' + data.referrerName;
  var body = 'New direct referral submitted!\n\n' +
    'FROM (Referrer):\n' +
    'Name: ' + data.referrerName + '\n' +
    'Email: ' + data.referrerEmail + '\n\n' +
    'REFERRAL (Potential Creator):\n' +
    'Name: ' + data.referralName + '\n' +
    'Phone: ' + data.referralPhone + '\n' +
    'Email: ' + data.referralEmail + '\n' +
    'Instagram: ' + data.referralInstagram + '\n\n' +
    'Relationship: ' + data.relationship + '\n' +
    'Notes: ' + data.notes + '\n\n' +
    'View all referrals: https://docs.google.com/spreadsheets/d/' + SHEET_ID;

  MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
}

function handleCreatorApplication(ss, data) {
  var sheet = ss.getSheetByName('Creator Applications');
  if (!sheet) {
    sheet = ss.insertSheet('Creator Applications');
    sheet.appendRow(['Timestamp', 'Name', 'Instagram', 'Age', 'Experience', 'Platforms', 'Photo', 'Streaming', 'Income Goal', 'Phone', 'Referred By']);
  }

  sheet.appendRow([
    new Date(),
    data.fullName,
    data.instagram,
    data.age,
    data.experience,
    data.platforms,
    data.photo,
    data.streaming,
    data.incomeGoal,
    data.phone,
    data.referrer || ''
  ]);

  var subject = 'New Creator Application: ' + data.fullName;
  var body = 'New creator application received!\n\n' +
    'Name: ' + data.fullName + '\n' +
    'Instagram: ' + data.instagram + '\n' +
    'Age: ' + data.age + '\n' +
    'Experience: ' + data.experience + '\n' +
    'Platforms: ' + data.platforms + '\n' +
    'Streaming: ' + data.streaming + '\n' +
    'Income Goal: ' + data.incomeGoal + '\n' +
    'Phone: ' + data.phone + '\n' +
    (data.referrer ? 'Referred by: ' + data.referrer : '') + '\n\n' +
    'View all applications: https://docs.google.com/spreadsheets/d/' + SHEET_ID;

  MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
}

function doGet(e) {
  return ContentService.createTextOutput('Form handler is running');
}

// ============================================
// AUTOMATION 1: Welcome Email to New Referrers
// ============================================
// Trigger: When new row added to "Referrers" tab
// Setup: Create an installable onEdit trigger pointing to onReferrersEdit

/**
 * Tracks the last row count to detect new rows
 * Store in Script Properties
 */
function getLastReferrerRowCount() {
  var props = PropertiesService.getScriptProperties();
  var count = props.getProperty('lastReferrerRowCount');
  return count ? parseInt(count) : 0;
}

function setLastReferrerRowCount(count) {
  var props = PropertiesService.getScriptProperties();
  props.setProperty('lastReferrerRowCount', count.toString());
}

/**
 * Check for new referrers and send welcome emails
 * Run this on a time-based trigger (every 5-10 minutes) or call manually
 */
function checkForNewReferrers() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName('Referrers');
  if (!sheet) return;

  var lastRow = sheet.getLastRow();
  var lastKnownRow = getLastReferrerRowCount();

  // First run - just set the baseline
  if (lastKnownRow === 0) {
    setLastReferrerRowCount(lastRow);
    return;
  }

  // Check for new rows
  if (lastRow > lastKnownRow) {
    // Get new rows
    var newRows = sheet.getRange(lastKnownRow + 1, 1, lastRow - lastKnownRow, 3).getValues();

    for (var i = 0; i < newRows.length; i++) {
      var code = newRows[i][0];
      var name = newRows[i][1];

      if (code && name) {
        sendWelcomeEmailToReferrer(code, name);
      }
    }

    setLastReferrerRowCount(lastRow);
  }
}

/**
 * Send welcome email to a new referrer
 */
function sendWelcomeEmailToReferrer(code, name) {
  // Try to find email from Applications tab
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var appSheet = ss.getSheetByName('Applications');
  var email = null;

  if (appSheet) {
    var appData = appSheet.getDataRange().getValues();
    // Look for matching name to get email
    for (var i = 1; i < appData.length; i++) {
      if (appData[i][1] && appData[i][1].toLowerCase().includes(name.toLowerCase().split(' ')[0])) {
        email = appData[i][2]; // Email is in column C (index 2)
        break;
      }
    }
  }

  if (!email) {
    // Log that we couldn't find email
    console.log('Could not find email for referrer: ' + name + ' (' + code + ')');
    // Notify admin
    MailApp.sendEmail(NOTIFY_EMAIL,
      'Manual Action Needed: Welcome Email for ' + name,
      'A new referrer was added but we could not find their email to send the welcome message.\n\n' +
      'Referrer: ' + name + '\n' +
      'Code: ' + code + '\n\n' +
      'Please send the welcome email manually.'
    );
    return;
  }

  var subject = 'Welcome to Aruna Talent\'s Referral Program!';
  var body = 'Hi ' + name.split(' ')[0] + ',\n\n' +
    'Welcome to the Aruna Talent referral program!\n\n' +
    'YOUR CODE: ' + code + '\n\n' +
    'QUICK LINKS:\n' +
    '📊 Your Dashboard: ' + DASHBOARD_BASE_URL + '?code=' + code + '\n' +
    '🔗 Creator Referral Link: ' + APPLY_URL + '?ref=' + code + '\n' +
    '👥 Referrer Recruitment Link: ' + REFER_URL + '?ref=' + code + '\n\n' +
    'HOW IT WORKS:\n' +
    '1. Share your creator link with people who might want to join our agency\n' +
    '2. When they sign up and start earning, you earn 10% of their revenue - for life\n' +
    '3. Track everything in real-time on your dashboard\n\n' +
    'Questions? Just reply to this email.\n\n' +
    'Welcome aboard!\n' +
    'The Aruna Talent Team';

  MailApp.sendEmail(email, subject, body);

  // Also notify admin
  MailApp.sendEmail(NOTIFY_EMAIL,
    'Welcome Email Sent: ' + name,
    'Automatic welcome email sent to new referrer:\n\n' +
    'Name: ' + name + '\n' +
    'Code: ' + code + '\n' +
    'Email: ' + email
  );
}

// ============================================
// AUTOMATION 2: Monthly Revenue Reminder
// ============================================
// Trigger: 1st of each month at 9am
// Setup: Create a monthly time-based trigger

/**
 * Send monthly revenue update reminder
 * Set up a trigger: Triggers > Add Trigger > monthlyRevenueReminder > Month timer > 1st of month > 9am
 */
function monthlyRevenueReminder() {
  var today = new Date();
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
  var lastMonth = today.getMonth() === 0 ? 11 : today.getMonth() - 1;
  var lastMonthYear = today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear();

  var subject = 'ACTION REQUIRED: Update ' + monthNames[lastMonth] + ' ' + lastMonthYear + ' Revenue';
  var body = 'Hi Team,\n\n' +
    'It\'s the 1st of the month - time to update creator revenue in the Google Sheet.\n\n' +
    'MONTH TO UPDATE: ' + monthNames[lastMonth] + ' ' + lastMonthYear + '\n\n' +
    'STEPS:\n' +
    '1. Pull revenue data from payment platform for ' + monthNames[lastMonth] + '\n' +
    '2. Open Models tab: https://docs.google.com/spreadsheets/d/' + SHEET_ID + '\n' +
    '3. Update Column G (monthlyRevenue) for each active model\n' +
    '4. Format: ' + monthNames[lastMonth].substring(0,3) + ' ' + lastMonthYear + ':amount (e.g., ' + monthNames[lastMonth].substring(0,3) + ' ' + lastMonthYear + ':96341.67)\n\n' +
    'DEADLINE: Complete by the 5th\n\n' +
    'Full SOP: docs/sops/04-monthly-revenue.md\n\n' +
    '- Automation Bot';

  MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
}

// ============================================
// AUTOMATION 3: New Model Notification to Referrer
// ============================================
// Trigger: When new model row added with referrer code
// Setup: Similar to referrer check - use time-based trigger

/**
 * Track last model row count
 */
function getLastModelRowCount() {
  var props = PropertiesService.getScriptProperties();
  var count = props.getProperty('lastModelRowCount');
  return count ? parseInt(count) : 0;
}

function setLastModelRowCount(count) {
  var props = PropertiesService.getScriptProperties();
  props.setProperty('lastModelRowCount', count.toString());
}

/**
 * Check for new models and notify referrers
 * Run this on a time-based trigger (every 5-10 minutes) or call manually
 */
function checkForNewModels() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var modelsSheet = ss.getSheetByName('Models');
  var referrersSheet = ss.getSheetByName('Referrers');

  if (!modelsSheet || !referrersSheet) return;

  var lastRow = modelsSheet.getLastRow();
  var lastKnownRow = getLastModelRowCount();

  // First run - just set the baseline
  if (lastKnownRow === 0) {
    setLastModelRowCount(lastRow);
    return;
  }

  // Check for new rows
  if (lastRow > lastKnownRow) {
    // Get new rows (columns A-G)
    var newRows = modelsSheet.getRange(lastKnownRow + 1, 1, lastRow - lastKnownRow, 7).getValues();

    // Get referrer data to find emails
    var referrerData = referrersSheet.getDataRange().getValues();

    for (var i = 0; i < newRows.length; i++) {
      var referrerCode = newRows[i][0];
      var modelName = newRows[i][1];

      if (referrerCode && modelName) {
        notifyReferrerOfNewModel(referrerCode, modelName, referrerData);
      }
    }

    setLastModelRowCount(lastRow);
  }
}

/**
 * Notify a referrer that a new model was added to their account
 */
function notifyReferrerOfNewModel(referrerCode, modelName, referrerData) {
  // Find referrer name
  var referrerName = '';
  for (var i = 1; i < referrerData.length; i++) {
    if (referrerData[i][0] === referrerCode) {
      referrerName = referrerData[i][1];
      break;
    }
  }

  if (!referrerName) {
    console.log('Could not find referrer for code: ' + referrerCode);
    return;
  }

  // Try to find referrer email from Applications
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var appSheet = ss.getSheetByName('Applications');
  var email = null;

  if (appSheet) {
    var appData = appSheet.getDataRange().getValues();
    for (var i = 1; i < appData.length; i++) {
      if (appData[i][1] && appData[i][1].toLowerCase().includes(referrerName.toLowerCase().split(' ')[0])) {
        email = appData[i][2];
        break;
      }
    }
  }

  if (!email) {
    // Notify admin to send manually
    MailApp.sendEmail(NOTIFY_EMAIL,
      'Manual Action: Notify ' + referrerName + ' of New Model',
      'A new model was added but we could not find the referrer\'s email.\n\n' +
      'Referrer: ' + referrerName + ' (' + referrerCode + ')\n' +
      'New Model: ' + modelName + '\n\n' +
      'Please notify the referrer manually.'
    );
    return;
  }

  var subject = 'Great News - New Creator Added to Your Account!';
  var body = 'Hi ' + referrerName.split(' ')[0] + ',\n\n' +
    'Exciting update - ' + modelName + ' has officially started with Aruna Talent and has been added to your referral account!\n\n' +
    'What this means:\n' +
    '• You\'ll earn 10% of ' + modelName + '\'s revenue\n' +
    '• Track their earnings on your dashboard: ' + DASHBOARD_BASE_URL + '?code=' + referrerCode + '\n' +
    '• Commissions are calculated monthly\n\n' +
    'Keep up the great work with your referrals!\n\n' +
    '- The Aruna Talent Team';

  MailApp.sendEmail(email, subject, body);

  // Notify admin
  MailApp.sendEmail(NOTIFY_EMAIL,
    'New Model Notification Sent: ' + modelName + ' → ' + referrerName,
    'Automatic notification sent to referrer:\n\n' +
    'Referrer: ' + referrerName + ' (' + email + ')\n' +
    'New Model: ' + modelName
  );
}

// ============================================
// AUTOMATION 4: Weekly Summary Email
// ============================================
// Trigger: Every Monday at 9am
// Setup: Create a weekly time-based trigger

/**
 * Send weekly summary email
 * Set up a trigger: Triggers > Add Trigger > weeklySummaryEmail > Week timer > Monday > 9am
 */
function weeklySummaryEmail() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var today = new Date();
  var weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  // Format date range
  var dateFormat = { month: 'short', day: 'numeric' };
  var dateRange = weekAgo.toLocaleDateString('en-US', dateFormat) + ' - ' + today.toLocaleDateString('en-US', dateFormat);

  // Count applications from last week
  var stats = {
    referrerApps: 0,
    creatorApps: 0,
    directReferrals: 0,
    newReferrers: [],
    newModels: []
  };

  // Check Applications tab
  var appSheet = ss.getSheetByName('Applications');
  if (appSheet && appSheet.getLastRow() > 1) {
    var appData = appSheet.getDataRange().getValues();
    for (var i = 1; i < appData.length; i++) {
      var timestamp = new Date(appData[i][0]);
      if (timestamp >= weekAgo) {
        stats.referrerApps++;
      }
    }
  }

  // Check Creator Applications tab
  var creatorSheet = ss.getSheetByName('Creator Applications');
  if (creatorSheet && creatorSheet.getLastRow() > 1) {
    var creatorData = creatorSheet.getDataRange().getValues();
    for (var i = 1; i < creatorData.length; i++) {
      var timestamp = new Date(creatorData[i][0]);
      if (timestamp >= weekAgo) {
        stats.creatorApps++;
      }
    }
  }

  // Check Direct Referrals tab
  var directSheet = ss.getSheetByName('Direct Referrals');
  if (directSheet && directSheet.getLastRow() > 1) {
    var directData = directSheet.getDataRange().getValues();
    for (var i = 1; i < directData.length; i++) {
      var timestamp = new Date(directData[i][0]);
      if (timestamp >= weekAgo) {
        stats.directReferrals++;
      }
    }
  }

  // Check for new referrers this week
  var referrersSheet = ss.getSheetByName('Referrers');
  if (referrersSheet && referrersSheet.getLastRow() > 1) {
    var refData = referrersSheet.getDataRange().getValues();
    for (var i = 1; i < refData.length; i++) {
      var joinDate = new Date(refData[i][2]);
      if (joinDate >= weekAgo) {
        stats.newReferrers.push(refData[i][1] + ' (' + refData[i][0] + ')');
      }
    }
  }

  // Check for new models this week
  var modelsSheet = ss.getSheetByName('Models');
  if (modelsSheet && modelsSheet.getLastRow() > 1) {
    var modelData = modelsSheet.getDataRange().getValues();
    for (var i = 1; i < modelData.length; i++) {
      var startDate = new Date(modelData[i][3]);
      if (startDate >= weekAgo) {
        stats.newModels.push(modelData[i][1] + ' (Ref: ' + modelData[i][0] + ')');
      }
    }
  }

  // Build email
  var subject = 'Weekly Referral Program Summary - ' + dateRange;
  var body = 'WEEKLY SUMMARY: ' + dateRange + '\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    'NEW APPLICATIONS THIS WEEK\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    '• Referrer Applications: ' + stats.referrerApps + '\n' +
    '• Creator Applications: ' + stats.creatorApps + '\n' +
    '• Direct Referrals: ' + stats.directReferrals + '\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    'NEW REFERRERS ADDED\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    (stats.newReferrers.length > 0 ? stats.newReferrers.join('\n') : 'None this week') + '\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    'NEW MODELS STARTED\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    (stats.newModels.length > 0 ? stats.newModels.join('\n') : 'None this week') + '\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    'View all data: https://docs.google.com/spreadsheets/d/' + SHEET_ID + '\n\n' +
    '- Automation Bot';

  MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
}

// ============================================
// TRIGGER SETUP HELPER
// ============================================

/**
 * Run this function ONCE to set up all triggers
 * Go to Extensions > Apps Script > Run > setupTriggers
 */
function setupTriggers() {
  // Remove existing triggers to avoid duplicates
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }

  // 1. Check for new referrers every 10 minutes
  ScriptApp.newTrigger('checkForNewReferrers')
    .timeBased()
    .everyMinutes(10)
    .create();

  // 2. Check for new models every 10 minutes
  ScriptApp.newTrigger('checkForNewModels')
    .timeBased()
    .everyMinutes(10)
    .create();

  // 3. Monthly revenue reminder on 1st at 9am
  ScriptApp.newTrigger('monthlyRevenueReminder')
    .timeBased()
    .onMonthDay(1)
    .atHour(9)
    .create();

  // 4. Weekly summary on Monday at 9am
  ScriptApp.newTrigger('weeklySummaryEmail')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.MONDAY)
    .atHour(9)
    .create();

  console.log('All triggers set up successfully!');

  // Send confirmation
  MailApp.sendEmail(NOTIFY_EMAIL,
    'Referral Program Automations Activated',
    'The following automations are now active:\n\n' +
    '1. New Referrer Welcome Emails - Checked every 10 minutes\n' +
    '2. New Model Notifications to Referrers - Checked every 10 minutes\n' +
    '3. Monthly Revenue Reminder - 1st of each month at 9am\n' +
    '4. Weekly Summary Email - Every Monday at 9am\n\n' +
    'You will receive notifications when these run.\n\n' +
    '- Automation Bot'
  );
}

/**
 * Manual test functions
 */
function testMonthlyReminder() {
  monthlyRevenueReminder();
}

function testWeeklySummary() {
  weeklySummaryEmail();
}

function testCheckNewReferrers() {
  checkForNewReferrers();
}

function testCheckNewModels() {
  checkForNewModels();
}

/**
 * Reset row counters (use if you need to re-baseline)
 */
function resetRowCounters() {
  var props = PropertiesService.getScriptProperties();
  props.deleteProperty('lastReferrerRowCount');
  props.deleteProperty('lastModelRowCount');
  console.log('Row counters reset. Next check will set new baselines.');
}
