const models = require('../models/index')
const {
    assertValidPassword,
    assertEmailIsValid,
    assertEmailIsUnique,
    createUser,
    encryptPassword
} = require('../services/auth.service');
require('dotenv').config();

const jsonwebtoken = require('jsonwebtoken');

const authRegisterController = async (req, res) => {
    const body = req.body;
    //validate password
    try {
        assertValidPassword(body.password);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Invalid password: " + error.message });
        return;
    }
    // validate email is valid
    try {
        assertEmailIsValid(body.email);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Email is invalid: " + error.message });
        return;
    }
    // validate email is unique
    try {
        assertEmailIsUnique(body.email);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: "Email is already registered: "
        });
        return;
    }
    // save user
    try {
        const UserCreated = await createUser({
            name: body.name,
            email: body.email,
            password: body.password,
            phone: body.phone,
            roleRoleId: body.roleRoleId || "user",
            dni: body.dni,
            level: body.level,          
            
        });
        res.status(201).json(UserCreated)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const authLoginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFound = await models.users.findOne({
            where: { email: email }
        });
        if (!userFound) {
            res.status(401).json({ message: "Password or email is incorrect" });
            return;
        }
        const hashedPassword = encryptPassword(password)

        if (hashedPassword !== userFound.password) {
            res.status(401).json({ message: "Password or email incorrect" })
            return;
        }

        const secret = process.env.JWT_SECRET;

        if (secret.length < 10) {
            throw new Error("JWT_SECRET is not set");
        }

        const jwt = jsonwebtoken.sign({
            user_id: userFound.user_id,
            name: userFound.name,
            email: userFound.email,
            dni: userFound.dni,
            level: userFound.level,
            roleRoleId: userFound.roleRoleId.toLowerCase()
        }, secret);
        res.status(200).json({
            message: "Login successful", jwt: jwt
        })
    } catch (error) {
        res.send(error)
    }

}

module.exports = {
    authLoginController,
    authRegisterController
};