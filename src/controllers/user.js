import User from '../models/user';

const UserController = {};

UserController.create = (req, res) => {
  const user = req.body;

  res.set('Content-Type', 'application/json');

  User.create(user)
    .then(user => res.status(201).json(user))
    .catch(() => res.status(400).end());
};

export default UserController;
