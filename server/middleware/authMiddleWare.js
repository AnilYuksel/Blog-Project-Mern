import jwt from "jsonwebtoken"


const authMiddleWare = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization.split(' ')[1]

        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRETKEY,(err,decodedAccessToken) => {
            if(err) return res.status(403).json(err)
            req.createrId = decodedAccessToken?.id
            next()
        })

        
    } catch (error) {
        console.log(error)
    }
}

export default authMiddleWare