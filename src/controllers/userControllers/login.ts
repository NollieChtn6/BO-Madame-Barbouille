import { Request, Response } from 'express';

import Users from '../../models/Users';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ where: { email } });
    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!user || !passwordMatches) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    res.status(200).json({
      userId: user._id,
      token: jwt.sign(
        {
          userId: user.id,
        },
        `${process.env.JWT_PRIVATE_KEY}`,
        {
          expiresIn: '1h',
        }
      ),
    });
  } catch (error: any) {
    console.error(error);
    res.status(500);
  }
};
