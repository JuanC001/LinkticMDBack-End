import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;

export const generateJWT = (uid, name) => {
    try {
        return new Promise((resolve, reject) => {
            const payload = { uid, name };
            sign(payload, process.env.SECRET_JWT_SEED, {
                expiresIn: '1h'
            }, (err, token) => {
                if (err) {
                    console.error(err);
                    reject('No se pudo generar el token');
                }
                resolve(token);
            });
        })
    } catch (error) {
        console.error(error);
        return null;

    }
}