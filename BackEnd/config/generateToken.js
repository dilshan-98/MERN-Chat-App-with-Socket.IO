import Jwt from "jsonwebtoken";

const generateToken = (id) => {
    return Jwt.sign({id}, process.env.JWT_ACCESS_TOKEN, {
        expiresIn: "7d",
    });
}

export default generateToken;