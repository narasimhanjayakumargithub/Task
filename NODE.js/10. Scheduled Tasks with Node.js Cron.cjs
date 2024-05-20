// app.js
const cron = require('node-cron');

// Define a cron job to send email notifications every day at 8:00 AM
const task = cron.schedule('0 8 * * *', () => {
  // Code to send email notifications
  console.log('Sending email notifications...');
}, {
  scheduled: true,
  timezone: 'Asia/Kolkata' // Change this to your desired timezone
});

// Start the cron job
task.start();

// Log a message when the cron job starts
console.log('Cron job scheduled to send email notifications every day at 8:00 AM');
