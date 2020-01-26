var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var userSchema = {
  tageduserId: String,
  postId: String,
  type: String,
  notificationSettings: String,
  createdAt: String,
  updatedAt: String
};

module.exports = mongoose.model("UserTagNotification", userSchema);
