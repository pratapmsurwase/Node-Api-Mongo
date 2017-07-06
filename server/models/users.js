var mongoose = require('mongoose');
var User = mongoose.model('Users', {
 email: {
  type:  String,
  required: true,
  trim: true,
  mininlength: 1
},
completed: {
  type:  Boolean
},
CompletedAt: {
  type: Number
}
});

module.exports ={User}
