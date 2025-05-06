import jwt from 'jsonwebtoken';

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password match environment variables
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      // Generate JWT token
      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Send success response with token
      res.json({ success: true, message: 'Login admin successful', token });
    } else {
      // Send error response for invalid credentials
      res.json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export { adminLogin };