var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })

var mongoSchema = mongoose.Schema;

var userSchema = {
  userId: String,
  name: String,
  profilepic: String,
  companyId: String,
  CmpnyName: String,
  Destination: String,
  postId: String,
  tags: String,
  // "tagImage":String,
  postContent: String,
  posttype: String,
  mimeType: String,
  location: String,
  mentionType: String,
  mentionDate: String,
  postedDate: String,
  bucketPrivacy: String,
  sharesCount: Number,
  commentsCount: Number,
  likeCount: Number,
  bookmarkcount: Number,
  updatedAt: String,
  momentstatus: String,
  createdAt: String
};
module.exports = mongoose.model("momentanduser", userSchema);
