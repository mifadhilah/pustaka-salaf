export default function authenticationHandler(req, res, next) {
  // const authHeader = req.headers['authorization'];
  // const token = authHeader && authHeader.split(' ')[1];

  // if (token == null) {
  //     return res.sendStatus(401); // Unauthorized
  // }

  // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
  //     if (err) {
  //         return res.sendStatus(403); // Forbidden
  //     }
  //     req.user = user; // Store user information on the request object
  //     req.isAuthenticated = true; // Set the authenticated flag
  //     next(); // Pass control to the next middleware or route handler
  // });

    req.isAuthenticated = true;
    next();
};
