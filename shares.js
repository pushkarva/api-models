var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })

var mongoSchema = mongoose.Schema;

var userSchema = {
  postsId: String,
  userId: String,
  postedUserId: String,
  postType: String,
  location: String,
  postContent: String,
  postPrivacy: String,
  mentionType: String,
  mentionDate: String,
  tags: String,
  createdAt: String
};
module.exports = mongoose.model("shares", userSchema);
