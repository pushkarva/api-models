var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var userSchema = {
  userId: String,
  treeId: String,
  relationship: String,
  gender: String,
  otherip: String,
  createdAt: String
};
module.exports = mongoose.model("treeinvitations", userSchema);
