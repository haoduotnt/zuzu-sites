"use strict";

var select = { _id: 0, __v: 0 };

function Common(model) {
  this.model = model;
}

module.exports = function(model) {
  return new Common(model);
};

Common.prototype.save = function(query, callback) {
  var model = this.model;
  model(query).save(function(err, product) {
    if (err) {
      if (err.code === 11000) { // duplicate key error
        callback({ statusCode: 409 });
      } else if (err.name === 'ValidationError') {
        callback({ statusCode: 400 });
      } else {
        callback(err);
      }
    } else {
      model.findById(product._id, select).populate('users', select).lean().exec(callback);
    }
  });
};
