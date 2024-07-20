const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const encodedPassword = encodeURIComponent(process.env.DATABASE_PASSWORD);

const DB = process.env.DATABASE.replace('<PASSWORD>', encodedPassword);

mongoose.connect(DB).then(() => {
  console.log('DATABASE connection successful!');
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
