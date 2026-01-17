// const mailData = (fullName,userName, password) => `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Welcome to TaskFlow!</title>
//     <style>
//         /* Ensures body and container are responsive and background is clean */
//         body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             padding: 0;
//             background-color: #f4f4f4;
//             color: #333333;
//         }
//         .container {
//             max-width: 600px;
//             margin: 20px auto;
//             background-color: #ffffff;
//             border-radius: 8px;
//             box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//             overflow: hidden;
//         }
//         .header {
//             background-color: #5741FF; /* TaskFlow Brand Color */
//             color: #ffffff;
//             padding: 25px 30px;
//             text-align: center;
//         }
//         .content {
//             padding: 30px;
//             line-height: 1.6;
//         }
//         .credentials-box {
//             background-color: #eef2ff;
//             border-left: 5px solid #5741FF;
//             padding: 20px;
//             margin: 25px 0;
//             border-radius: 4px;
//         }
//         .credential-item {
//             margin-bottom: 10px;
//             font-size: 16px;
//         }
//         .credential-item strong {
//             display: inline-block;
//             width: 100px;
//             color: #333;
//         }
//         .footer {
//             text-align: center;
//             padding: 20px 30px;
//             font-size: 12px;
//             color: #777;
//             border-top: 1px solid #eeeeee;
//         }
//         .cta-button {
//             display: inline-block;
//             margin: 20px 0;
//             padding: 12px 25px;
//             background-color: #5741FF;
//             color: #ffffff;
//             text-decoration: none;
//             border-radius: 5px;
//             font-weight: bold;
//             font-size: 16px;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <div class="header">
//             <h1 style="margin: 0; font-size: 28px;">TaskFlow</h1>
//         </div>
//         <div class="content">
//             <h2 style="font-size: 24px; color: #5741FF; margin-top: 0;">Welcome Aboard, ${fullName}!</h2>
            
//             <p style="font-size: 16px;">
//                 We are thrilled to have you join the TaskFlow community. Your account has been successfully created.
//                 You can now log in using the credentials below to start managing your projects and tasks effortlessly.
//             </p>

//             <div class="credentials-box">
//                 <p style="margin-top: 0; font-weight: bold; color: #5741FF;">Your Temporary Login Details:</p>
//                 <div class="credential-item">
//                     <strong>Username:</strong> <span style="font-weight: bold; color: #333;">${userName}</span>
//                 </div>
//                 <div class="credential-item">
//                     <strong>Password:</strong> <span style="font-weight: bold; color: #cc0000;">${password}</span>
//                 </div>
//             </div>

//             <p style="text-align: center;">
//                 <a href="[YOUR_LOGIN_URL_HERE]" class="cta-button">
//                     Access My TaskFlow Account
//                 </a>
//             </p>
            
//             <p style="font-size: 14px; color: #777;">
//                 **Security Note:** For your protection, please change your password immediately after your first successful login.
//             </p>
//         </div>
//         <div class="footer">
//             &copy; ${new Date().getFullYear()} TaskFlow. All rights reserved.
//         </div>
//     </div>
// </body>
// </html>`
// module.exports =mailData;


const mailData = (fullName, userName, password) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to SoftDesk</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f6f8fc;
      font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
      color: #2d2d2d;
    }

    .container {
      max-width: 600px;
      margin: 24px auto;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    }

    .header {
      background: linear-gradient(135deg, #2563eb, #1e40af);
      padding: 28px;
      text-align: center;
      color: #ffffff;
    }

    .header h1 {
      margin: 0;
      font-size: 30px;
      letter-spacing: 0.5px;
    }

    .content {
      padding: 32px;
      line-height: 1.6;
    }

    .content h2 {
      margin-top: 0;
      color: #1e40af;
      font-size: 24px;
    }

    .content p {
      font-size: 15px;
      color: #444;
    }

    .credentials-box {
      background-color: #f1f5ff;
      border: 1px solid #dbeafe;
      border-radius: 8px;
      padding: 20px;
      margin: 24px 0;
    }

    .credentials-box h3 {
      margin-top: 0;
      color: #2563eb;
      font-size: 16px;
    }

    .credential-item {
      margin: 10px 0;
      font-size: 15px;
    }

    .credential-item strong {
      display: inline-block;
      width: 90px;
      color: #111827;
    }

    .password {
      color: #dc2626;
      font-weight: bold;
    }

    .cta-wrapper {
      text-align: center;
      margin: 28px 0;
    }

    .cta-button {
      display: inline-block;
      padding: 14px 32px;
      background-color: #2563eb;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 6px;
      font-size: 15px;
      font-weight: 600;
    }

    .cta-button:hover {
      background-color: #1e40af;
    }

    .note {
      font-size: 13px;
      color: #6b7280;
      margin-top: 10px;
    }

    .footer {
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #9ca3af;
      background-color: #f9fafb;
      border-top: 1px solid #e5e7eb;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h1>SoftDesk</h1>
    </div>

    <div class="content">
      <h2>Welcome, ${fullName} 👋</h2>

      <p>
        Your SoftDesk account has been successfully created!  
        SoftDesk helps you plan, organize, and track tasks efficiently — all in one place.
      </p>

      <div class="credentials-box">
        <h3>Your Login Credentials</h3>

        <div class="credential-item">
          <strong>Username:</strong> ${userName}
        </div>

        <div class="credential-item">
          <strong>Password:</strong>
          <span class="password">${password}</span>
        </div>
      </div>

      <div class="cta-wrapper">
        <a href="[YOUR_LOGIN_URL_HERE]" class="cta-button">
          Go to SoftDesk Dashboard
        </a>
      </div>

      <p class="note">
        🔐 <strong>Security Tip:</strong> Please change your password after logging in for the first time to keep your account secure.
      </p>
    </div>

    <div class="footer">
      © ${new Date().getFullYear()} SoftDesk · Task Management Made Simple
    </div>
  </div>
</body>
</html>
`;

module.exports = mailData;
