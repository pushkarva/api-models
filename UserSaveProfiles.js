var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var userSchema = {
  UserId: String,
  SavedUser: String,
  ReqType: String,
  ReqTo: String, // its for myself or others
  createdAt: String
};

module.exports = mongoose.model("usersavedprofile", userSchema);
