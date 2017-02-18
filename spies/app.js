var db = require('./db');

module.exports.handleSignUp = (email, password) => {
    // Check if email already exist
    db.saveUser({email, password});
    // Send the welcome email
};