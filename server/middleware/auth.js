import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "No authorization token provided",
      });
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.adminId = decoded.id;

    next();
  } catch (error) {
    console.log("Auth Error:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

export default auth;
