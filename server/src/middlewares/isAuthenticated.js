import getTokenFromHeader from "../utils/getTokenFromHeader.js"
import verifyToken from "../utils/verifyToken.js"
import { ApiError } from "../utils/ApiError.js"


const isAuthenticated = (req, res, next) => {
    const token = getTokenFromHeader(req)
    if (!token) {
        throw new ApiError(401, "Unauthorized request")
    }
    const decoded  = verifyToken(token);
    if (!decoded) {
        throw new ApiError(401, "Invalid Access Token")
    }

    next()
}

export default isAuthenticated