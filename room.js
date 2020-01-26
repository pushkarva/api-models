var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var userSchema = {
  senderId: String,
  receiverId: String,
  status: String,
  createdAt: String
};
module.exports = mongoose.model("rooms", userSchema);
