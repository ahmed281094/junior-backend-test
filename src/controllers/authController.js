import User from '../models/User.js';
import { sign } from '../utils/jwt.js';

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ success: false, error: 'email and password required' });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ success: false, error: 'user not found' });

    const okPassword = await user.comparePassword(password);
    if (!okPassword) return res.status(401).json({ success: false, error: 'wrong password' });

    const token = sign({ id: user._id, email: user.email, role: user.role });
    res.json({ success: true, data: { token } });
  } catch (err) {
    next(err);
  }
}
