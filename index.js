import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.post('/mailer/send', async (req, res) => {
  const { to, subject, html, emailUser, emailPass } = req.body;

  if (!to || !subject || !html || !emailUser || !emailPass) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: emailUser,
    to: to,
    subject: subject,
    html: html,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

app.post('/mailer/send-two-way', async (req, res) => {
  const { to, subjectsender, subjectreciever, htmlsender, htmlreciever, emailUser, emailPass } = req.body;

  if (!to || !subjectsender || !subjectreciever || !htmlsender || !htmlreciever || !emailUser || !emailPass) {
    return res.status(400).json({ error: 'Missing required fields for two-way email' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptionsReciever = {
    from: emailUser,
    to: emailUser,
    subject: subjectreciever,
    html: htmlreciever,
  };

  const mailOptionsSender = {
    from: emailUser,
    to: to,
    subject: subjectsender,
    html: htmlsender,
  };

  try {
    await transporter.sendMail(mailOptionsReciever);
    await transporter.sendMail(mailOptionsSender);
    res.json({ message: 'Two-way emails sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send two-way emails', details: error.message });
  }
});

app.listen(3030, () => console.log('Mailer API running on port 3030'));
