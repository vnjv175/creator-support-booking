// Configuration
var SHEET_ID = '1kCFAavAsfbb3p-cNTxudFh6eMd3uOHxkYJrAZqgCpRE';
var NOTIFY_EMAIL = 'intake@arunatalent.com';

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
