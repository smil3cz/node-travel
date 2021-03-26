const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

process.on('uncaughtException', (err) => {
  console.log('Unhandled exception 💥', err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

const DB = process.env.DB_STRING.replace('<PASSWORD>', process.env.DB_PW);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected!');
  });

console.log(process.env.NODE_ENV);

process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection 💥', err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
