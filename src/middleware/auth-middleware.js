import passport from "passport";

export const authenticate = (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
        if (err) next(err);
        if (!user)
            return res.status(401).json({ message: 'Unauthorized' });
        req.user = user;
        console.log("User authenticated", JSON.stringify(user));
        next(); // pass control to the next middleware function in stack
    })(req, res, next);
};