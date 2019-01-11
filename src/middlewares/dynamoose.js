import dotenv from 'dotenv';
import dynamoose from 'dynamoose';

dotenv.config();

dynamoose.AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

dynamoose.local();

dynamoose.setDefaults({
  create: true,
  update: false,
  waitForActive: true,
  waitForActiveTimeout: 180000
});

export default dynamoose;
