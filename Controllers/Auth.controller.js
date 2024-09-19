import { request, response } from "express";
import bcrypt from "bcryptjs";
import User from "../Models/User.js";

import { generateJWT } from "../Helpers/jwt.js";

const authController = {}

authController.login = async (req = request, res = response) => {
    const { email, password } = req.body;
    try {
        let usuario = await User.findOne({ email })
        if (!usuario) {
            res.send("Usuario no encontrado").status(404);
            return
        }

        const validPassword = bcrypt.compareSync(password, usuario.password);
        if (!validPassword) {
            res.send("Contraseña incorrecta").status(400);
            return
        }

        const token = await generateJWT(usuario._id, usuario.name);
        if(!token){
            res.send("Error al generar el token").status(500);
            return
        }
        res.send({ 
            uid: usuario.id,
            name: usuario.name,
            lastname: usuario.lastname,
            username: usuario.username,
            email: usuario.email,
            reservations: usuario.reservations,
            token
         }).status(200);



    } catch (error) {
        console.error(error);
        res.send("Hubo un error").status(500);
        return

    }
}

authController.register = async (req = request, res = response) => {

    const { email, password, username, name, lastname } = req.body;
    const salt = bcrypt.genSaltSync(10);

    try {

        const user = new User({ email: email.toString().toLowerCase(), password: bcrypt.hashSync(password, salt), username, name, lastname });
        await user.save();
        res.send("User created").status(201);
        return

    } catch (error) {
        console.error(error);
        res.send("Hubo un error").status(500);
        return
    }

}

authController.renew = (req = request, res = response) => { }

export default authController;