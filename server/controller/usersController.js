import { usersModel } from "../model/UsersModel.js";

const getUsers = async (req, res) => {
  try {
    const users = await usersModel.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};

const addUser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.selectedOption;
  const usertype = req.body.userType;
  const dob = req.body.dob;


  const newUser = new usersModel({
    name:name,
    email:email,
    password:password,
    role:role,
    usertype:usertype,
    dob:dob
    
  });
  console.log(newUser)
  try {
    // console.log(newUser)
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to add user' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    await usersModel.findByIdAndRemove(userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { name, email, password, dob, usertype } = req.body;

    const updatedUser = await usersModel.findByIdAndUpdate(
      userId,
      { name, email, password, dob, usertype },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to update user' });
  }
};

export { getUsers, addUser, deleteUser, updateUser };
