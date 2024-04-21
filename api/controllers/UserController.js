/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    adminAction: async function(req, res) {
        // This action requires admin role
        return res.ok('Admin action');
      }
};

