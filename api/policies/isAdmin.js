
module.exports = async function(req, res, next) {
    if (req.user && req.user.role === 'admin') {
      return next();
    }
    return res.forbidden('You are not authorized to perform this action.');
};