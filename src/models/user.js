import uuid from 'uuid';
import dynamoose from 'dynamoose';

const userSchema = new dynamoose.Schema({
  id: {
    type: String,
    default: uuid.v1(),
    hashKey: true
  },
  userName: {
    type: String
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default dynamoose.model('User', userSchema);
