import { ApiError } from "./ApiError.js";

const getTokenFromHeader = req => {
    const headerObj = req.headers;
    const token = headerObj.authorization?.split(" ")[1]
    if (token !== undefined) {
        return token
    }

    throw new ApiError(400, "There is no token attatched to the header")
}

export default getTokenFromHeader