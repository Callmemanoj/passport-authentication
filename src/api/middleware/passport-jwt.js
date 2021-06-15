import passportJWT from "passport-jwt";
import { devConfig } from "../../config/env/development";
import User from "../models/user";
import passport from "passport";

export const configureJWTStrategy = () => {
  const opts = {};
  opts.jwtFromRequest = passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = devConfig.secret;
  passport.use(
    new passportJWT.Strategy(opts, (payload, done) => {
      User.findOne({ _id: payload._id }, (err, user) => {
        if (err) {
          console.log(err);
          return done(err, false);
        }
        if (user) {
          console.log(user);
          return done(null, user);
        }

        console.log(payload);
        return done(null, false);
        // or you could create a new account
      });
    })
  );
};
