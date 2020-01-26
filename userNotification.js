var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })

var mongoSchema = mongoose.Schema;

var memberSchema = {
  userId: String, //owner of the  tree
  title: String,
  notification: String,
  senderId: String,
  time: String,
  createdAt: String
};
module.exports = mongoose.model("usernotification", memberSchema);
