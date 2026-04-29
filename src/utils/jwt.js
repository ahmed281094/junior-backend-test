import jwt from 'jsonwebtoken';

export function sign(payload) {
  const secret = process.env.JWT_SECRET ;
  if (!secret) {
  throw new Error("JWT_SECRET is not defined");
}
  const opts = { expiresIn: '8h' };
  return jwt.sign(payload, secret, opts);
}

export function verify(token) {
  const secret = process.env.JWT_SECRET ;
  if (!secret) {
  throw new Error("JWT_SECRET is not defined");
}
  return jwt.verify(token, secret);
}
