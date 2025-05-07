# 📬 Mailer API

A simple API endpoint for sending a single, styled HTML email using Gmail and Nodemailer.

---

## ✅ Features

* Send a single HTML email to one recipient per request
* Use Gmail with secure [App Passwords](https://myaccount.google.com/apppasswords)
* Supports styled HTML via inline CSS

---

## 🔗 API Endpoint

**POST** `https://mailer-f49i.onrender.com/mailer/send`

---

## 📝 Request Body

Send a JSON object with the following fields:

| Field       | Type   | Description                                                                  |
| ----------- | ------ | ---------------------------------------------------------------------------- |
| `to`        | string | The recipient's email address.                                               |
| `subject`   | string | The subject line for the email.                                              |
| `html`      | string | The HTML content of the email. You can include inline styles for formatting. |
| `emailUser` | string | The Gmail address you want to send from.                                     |
| `emailPass` | string | The Gmail App Password for the sender account.                               |

### Example Request Body

```json
{
  "to": "recipient@example.com",
  "subject": "Your Subject Here",
  "html": "<h2 style='color:green;'>Hello!</h2><p>This is a test email.</p>",
  "emailUser": "yourgmail@gmail.com",
  "emailPass": "your_app_password"
}
```

---

## 🔐 Using Google App Passwords

To send emails using a Gmail account, you must generate a [Google App Password](https://myaccount.google.com/apppasswords). Regular Gmail passwords (especially with 2FA enabled) won't work.

### Steps:

1. **Go to** [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. **Log in** with your Gmail account
3. **Enable 2-Step Verification** if not already enabled
4. **Generate a new app password**:

   * Select **Mail** under app
   * Choose **Other** for device and name it (e.g., `Nodemailer API`)
   * Click **Generate** and copy the 16-character password
5. **Use the password** in the `emailPass` field of your request

🚨 **Important:** Never share your app password publicly.

---

## 💻 Example Usage with cURL

```bash
curl -X POST http://localhost:3030/mailer/send \
-H "Content-Type: application/json" \
-d '{
  "to": "recipient@example.com",
  "subject": "Your Subject Here",
  "html": "<h2 style=\"color:green;\">Hello!</h2><p>This is a test email.</p>",
  "emailUser": "yourgmail@gmail.com",
  "emailPass": "your_app_password"
}'
```

---

## 🚀 Getting Started (Local Development)

1. **Clone the repo**

   ```bash
   git clone https://github.com/laysonaljon/mailer.git
   cd mailer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the server**

   ```bash
   npm start
   ```

The server will start on `http://localhost:3030`

## 🐞 Issues & Contributions

* Found a bug or want to contribute? Open an issue or PR at:
  [https://github.com/laysonaljon/mailer/issues](https://github.com/laysonaljon/mailer/issues)
