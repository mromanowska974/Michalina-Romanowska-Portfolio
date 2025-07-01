const cron = require('node-cron');
const express = require('express');
const port = process.env.PORT;

const app = express();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  cron.schedule('* * * * *', () => {
      console.log('Server is working')
  });
});
