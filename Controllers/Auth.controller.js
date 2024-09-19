import { request, response } from "express";
import bcrypt from "bcryptjs";
import User from "../Models/User.js";


const authController = {}

authController.login = (req = request, res = response) => {

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