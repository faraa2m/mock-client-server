function isLoggedIn(req) {
    return Promise.resolve();
    // return req.isAuthenticated() ? Promise.resolve() : Promise.reject();
}

module.exports = {
    isLoggedIn
}
