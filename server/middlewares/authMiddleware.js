const User = require("../models/authModel");
const jwt = require("jsonwebtoken");


module.exports.checkUser = (req, res, next) => {

  var token

  if(req.cookies)
  token = localStorage.getItem('token');

  if (token) {
    jwt.verify(
      token,
      "adp processed foods",
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          const user = await User.findById(decodedToken.id);
          if (user) res.json({ status: true, user: user.email });
          else res.json({ status: false });
          next();
        }
      }
    );
  } else {
    res.json({ status: false });
    next();
  }
};
