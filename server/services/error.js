function sendError(res, err) {
    res.status(err.status || 500);
    res.render('error');
}

module.exports = {
    sendError
}
