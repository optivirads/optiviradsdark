# Google Sheets Integration Guide

To enable your contact form to automatically save submissions to a Google Sheet under `optivirads@gmail.com`, follow these quick instructions:

## Step 1: Create a Google Sheet
1. Log into your Google account (`optivirads@gmail.com`).
2. Create a new Google Sheet (e.g. name it "OptiVir Ads Contact Submissions").
3. Set up the column headers in the first row:
   - **Column A:** Date
   - **Column B:** Name
   - **Column C:** Email
   - **Column D:** Company/URL
   - **Column E:** Message

## Step 2: Add Google Apps Script
1. Inside your Google Sheet, click on **Extensions** in the top menu and select **Apps Script**.
2. Delete any default code in the editor and paste the following script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append fields: Date, Name, Email, Company, Message
    sheet.appendRow([
      new Date().toLocaleString(),
      data.name,
      data.email,
      data.company || '',
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the project (click the disk icon or `Ctrl + S`).

## Step 3: Deploy as a Web App
1. Click the blue **Deploy** button at the top right, and choose **New deployment**.
2. Click the gear icon next to "Select type" and select **Web app**.
3. Configure the settings:
   - **Description:** OptiVir Contact Form API
   - **Execute as:** Me (optivirads@gmail.com)
   - **Who has access:** Anyone
4. Click **Deploy**.
5. Google will prompt you to authorize permissions. Click **Authorize Access**, choose your Google account, click **Advanced** at the bottom, select **Go to Untitled project (unsafe)**, and click **Allow**.
6. Copy the **Web app URL** generated (it starts with `https://script.google.com/macros/s/.../exec`).

## Step 4: Add Web App URL to Environment Variables
1. Open your `.env` and `.env.local` files in the root project folder.
2. Add the following line at the bottom, pasting your copied URL:
```env
GOOGLE_SHEET_WEBAPP_URL=https://script.google.com/macros/s/YOUR_DEPLOYED_URL_HERE/exec
```

*Note: Restart your development server (`npm run dev`) after editing env files.*
