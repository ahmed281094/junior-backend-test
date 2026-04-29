import { verify } from '../utils/jwt.js';

function authenticate(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) return res.status(401).json({ success: false, error: 'Unauthorized' });

  const token = header.split(' ')[1];
  try {
    const decoded = verify(token);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({ success: false, error: 'Invalid token' });
  }
}

export default authenticate;
