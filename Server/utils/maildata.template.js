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
      background-color: #f4fdfb;
      font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
      color: #1f2937;
    }

    .container {
      max-width: 600px;
      margin: 24px auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
    }

    .header {
      background: linear-gradient(135deg, #00BFA6, #009e8c);
      padding: 32px;
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
      line-height: 1.65;
    }

    .content h2 {
      margin-top: 0;
      font-size: 24px;
      color: #00BFA6;
    }

    .content p {
      font-size: 15px;
      color: #374151;
    }

    .credentials-box {
      background-color: #e6fffa;
      border: 1px solid #99f6e4;
      border-radius: 10px;
      padding: 22px;
      margin: 26px 0;
    }

    .credentials-box h3 {
      margin-top: 0;
      font-size: 16px;
      color: #009e8c;
    }

    .credential-item {
      margin: 12px 0;
      font-size: 15px;
    }

    .credential-item strong {
      display: inline-block;
      width: 90px;
      color: #065f46;
    }

    .password {
      color: #dc2626;
      font-weight: 600;
    }

    .cta-wrapper {
      text-align: center;
      margin: 30px 0;
    }

    .cta-button {
      display: inline-block;
      padding: 14px 34px;
      background-color: #00BFA6;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
    }

    .cta-button:hover {
      background-color: #009e8c;
    }

    .note {
      font-size: 13px;
      color: #6b7280;
      margin-top: 12px;
    }

    .footer {
      padding: 22px;
      text-align: center;
      font-size: 12px;
      color: #6b7280;
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
        Your <strong>SoftDesk</strong> account has been successfully created.
        SoftDesk helps you organize tasks, collaborate with your team, and
        track progress effortlessly.
      </p>

      <div class="credentials-box">
        <h3>Your Login Details</h3>

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
          Open SoftDesk Dashboard
        </a>
      </div>

      <p class="note">
        🔐 <strong>Security Reminder:</strong> Please change your password after your first login to keep your account secure.
      </p>
    </div>

    <div class="footer">
      © ${new Date().getFullYear()} SoftDesk · Smart Task Management
    </div>
  </div>
</body>
</html>
`;

module.exports = mailData;
