import Users from "../models/user.js";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { devConfig } from "../../config/env/development.js";

export default {
  async createUser(req, res) {
    const password = bycrypt.hashSync(req.body.password, 10);
    const userdata = new Users({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      passsword: password,
    });
    Users.find({ email: req.body.email }, function (err, user) {
      if (user.length != 0) {
        console.log("User already exist");
        res.send("already exist");
      } else {
        Users.create(userdata);
        res.send(userdata);
      }
    });
  },
  async loginUser(req, res) {
    const user = await Users.findOne({ email: req.body.email });
    const password = req.body.password;

    if (!user || !bycrypt.compareSync(password, user.passsword)) {
      console.log("failed");
    } else {
      const token = jwt.sign({ _id: user._id }, devConfig.secret, {
        expiresIn: "1d",
      });
      console.log("true");
      res.send({ success: true, user, token });
    }
  },

  async test(req, res) {
    return res.json(req.user);
  },
};
