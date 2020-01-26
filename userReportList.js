var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var mongoSchema = mongoose.Schema;

var userSchema = {
  userId: String,
  reportUserId: String,
  reportedPost: String,
  type: String,
  reason: String,
  createdAt: String
};
module.exports = mongoose.model("userreportlist", userSchema);
