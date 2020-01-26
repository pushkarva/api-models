var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })

var mongoSchema = mongoose.Schema;

var userSchema = {
  userId: String,
  tags: String,
  mimeType: String,
  posttype: String,
  location: String,
  postContent: String,
  postedDate: String,
  sharesCount: Number,
  commentsCount: Number,
  likeCount: Number,
  bookmarkcount: Number,
  momemtPrivacy: String,
  status: String,
  createdAt: String,
  notificationSettings: String,
  updatedAt: String
};
module.exports = mongoose.model("moment", userSchema);
