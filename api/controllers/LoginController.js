/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    homepage: function(req, res) {
        return res.view('pages/loginpage', { layout: false });
      }

};

