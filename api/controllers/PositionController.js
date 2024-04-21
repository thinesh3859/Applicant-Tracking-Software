/**
 * PositionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    detailpage: function(req, res) {
        return res.view('pages/possition/detailpage', { layout: false });
      },
    applicationpage: function(req, res) {
        return res.view('pages/possition/applicationpage', { layout: false });
      }
};

