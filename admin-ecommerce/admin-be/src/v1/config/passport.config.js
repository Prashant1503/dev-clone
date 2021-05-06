const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');


passport.use(new Strategy({
    clientID: '321492199698-sli0c8iub82oqtetgdmu7ggpcq3ej7n0.apps.googleusercontent.com',
    clientSecret: "w6RxkpYQi9chgalIEeVBVQGd",
    callbackURL: 'http://localhost:4000/api/google/success'
},
    function (accessToken, refreshToken, profile, done) {
        done(null, {});
    }
));

module.exports = passport;