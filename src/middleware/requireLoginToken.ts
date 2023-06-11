import { NextFunction, Request, Response } from 'express';
import JWT from '../utils/JWT';

const requireLoginToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.get('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const tokenValidation = JWT.validateToken(token);
  if (!tokenValidation.valid) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  req.body.user = tokenValidation.payload;

  next();
};

export default requireLoginToken;