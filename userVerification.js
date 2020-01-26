var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var mongoSchema = mongoose.Schema;

var userSchema = {
  userId: String, //owner of the  tree
  verificationPicture: String,
  accountStatus: String,
  createdAt: String
};
module.exports = mongoose.model("userverification", userSchema);
