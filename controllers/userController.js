import User from '../models/user.js';

const userController = {
  // Register a new user
  register: async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      // Check if the email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Create a new user
      const newUser = new User({ name, email, password, role });
      await newUser.save();

      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Login user
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Assuming password validation logic is implemented elsewhere
      res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Get user information by user ID
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

export default userController;
