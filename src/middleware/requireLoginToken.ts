import { NextFunction, Request, Response } from 'express';
import JWT from '../utils/jwt';

const requireLoginToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.get('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const tokenValidation = JWT.verify(token);
  if (!tokenValidation) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  next();
};

export default requireLoginToken;