import JWT from 'passport-jwt';
import { JWT_KEY } from './serverConfig.js';
import User from '../models/user.js';

const JwtStrategy = JWT.Strategy;
const JwtExtracted = JWT.ExtractJwt;

const options = {
    jwtFromRequest: JwtExtracted.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_KEY,
}

console.log(options.secretOrKey);

export const passportAuth = (passport) => {
    try {
        passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
            console.log("req sent to strategy", jwt_payload.user._id);
            const user = await User.findById(jwt_payload.user._id);
            console.log("The Value of use is:", user);
            if (!user) {
                done(null, false);
            } else {
                done(null, user);
            }
        }));
    } catch (err) {
        console.log(err);
        throw err;
    }
}