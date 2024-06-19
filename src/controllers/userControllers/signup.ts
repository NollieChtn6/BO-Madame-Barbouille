import { Request, Response } from 'express';
import Users from '../../models/Users';
const bcrypt = require('bcrypt');

import checkPasswordFormat from '../../utils/checkPasswordFormat';
import checkEmailFormat from '../../utils/checkEmailFormat';

exports.signup = async (req: Request, res: Response) => {
  try {
    const { firstName, email, password } = req.body;
    const passwordIsValid = checkPasswordFormat(password);
    const emailIsValid = checkEmailFormat(email);

    if (!passwordIsValid || !emailIsValid) {
      return res.status(400);
    }

    const emailExists = await Users.findOne({ where: { email } });
    if (emailExists) {
      return res.status(400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
      firstName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
};
