const User = require('../model/user');

//render the sign up page
module.exports.signup = function(req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/login-register');
    }
    return res.render('login-register');
}

//render the sign in page
module.exports.signin = function(req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    return res.render('login-register');
}


//signing up user
module.exports.create = function(req, res) {
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) {
            console.log('error in finding user in signing up');
            return;
        }
        if (!user) {
            User.create(req.body, function(err, user) {
                if (err) {
                    console.log('error in finding user in signing up');
                    return;
                }
                return res.redirect('/');
            })
        } else {
            return res.redirect('back');
        }
    });
}

// sign in and create the session for the user
module.exports.createSession = async function(req, res) {
    try {
        let user = await User.findOne({ email: req.body.email });

        if (!user || user.password != req.body.password) {
            return res.redirect('back');
        }
        return res.redirect('/');

    } catch (err) {
        console.log('********', err);
        return;
    }
}

module.exports.destroySession = function(req, res) {
    req.logout();
    return res.redirect('/login-register')
}