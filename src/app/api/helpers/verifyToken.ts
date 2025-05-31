import jwt from "jsonwebtoken";


export const verifyToken = async (request) => {

    const tokenRecieved = request.cookies.get('token');

    if (!tokenRecieved) return false


    const { email } = await jwt.verify(tokenRecieved.value, process.env.TOKEN_SECRET);

    if (!email) return false

    return true;

}

