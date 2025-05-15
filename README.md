# 📬 Mailer API

A simple API for sending single or two-way styled HTML emails using Gmail and Nodemailer.

---

## ✅ Features

- Send a single HTML email to one recipient
- Send two emails: one to recipient and one to sender
- Use Gmail with secure [App Passwords](https://myaccount.google.com/apppasswords)
- Supports styled HTML via inline CSS

---

## 🔗 API Endpoints

### **POST** `/mailer/send`

Sends a single HTML email.

### **POST** `/mailer/send-two-way`

Sends two emails — one to the recipient, one to the sender.

---

## 📝 Request Body

### `/mailer/send`

| Field       | Type   | Description                                                                  |
| ----------- | ------ | ---------------------------------------------------------------------------- |
| `to`        | string | Recipient's email address                                                    |
| `subject`   | string | Subject line for the email                                                   |
| `html`      | string | HTML content (use inline styles)                                             |
| `emailUser` | string | Gmail address used to send                                                   |
| `emailPass` | string | App password for the Gmail sender                                            |

### `/mailer/send-two-way`

| Field            | Type   | Description                                                   |
| ---------------- | ------ | ------------------------------------------------------------- |
| `to`             | string | Recipient's email address                                     |
| `subjectsender`  | string | Subject for email sent to the recipient                      |
| `subjectreciever`| string | Subject for email sent back to the sender                    |
| `htmlsender`     | string | HTML content sent to the recipient                           |
| `htmlreciever`   | string | HTML content sent back to the sender                         |
| `emailUser`      | string | Gmail address used to send                                    |
| `emailPass`      | string | App password for the Gmail sender                             |

---

## 🔐 Google App Passwords

To use Gmail, you must generate a [Google App Password](https://myaccount.google.com/apppasswords):

1. Enable 2-Step Verification
2. Visit [App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password for "Mail"
4. Use the 16-character password as `emailPass`

🚨 **Do not share your app password.**

---

## 💻 Example Usage (cURL)

### Single Email

```bash
curl -X POST http://localhost:3030/mailer/send \
-H "Content-Type: application/json" \
-d '{
  "to": "recipient@example.com",
  "subject": "Hello!",
  "html": "<h2 style=\"color:green;\">Welcome</h2>",
  "emailUser": "yourgmail@gmail.com",
  "emailPass": "your_app_password"
}'
```

### Two-Way Email

```bash
curl -X POST http://localhost:3030/mailer/send-two-way \
-H "Content-Type: application/json" \
-d '{
  "to": "recipient@example.com",
  "subjectsender": "Thanks for reaching out!",
  "subjectreciever": "New message sent",
  "htmlsender": "<p>We received your message.</p>",
  "htmlreciever": "<p>You sent a message to recipient@example.com</p>",
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
