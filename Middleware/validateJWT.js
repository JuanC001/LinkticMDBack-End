import jwt from 'jsonwebtoken';
import { response } from 'express';

export const validateJWT = (req, res = response, next) => {

    const token = req.header('x-token');

    if (!token) {

        return res.status(401).json({
            result: false,
            msg: 'No token'
        })

    }

    try {

        const payload = jwt.verify(

            token, process.env.SECRET_JWT_SEED

        );

        req.uid = payload.uid;
        req.name = payload.name;

    } catch (error) {
        res.status(401).json({

            result: false,
            msg: 'token no valido'

        })
        return
    }

    next();

}