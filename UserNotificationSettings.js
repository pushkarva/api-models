var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var userSchema = {
  userId: String,
  LikeSettings: String,
  CommentSettings: String,
  PostTagsSettings: String,
  MentionedInAnyPostSettings: String,
  IfMyPostIsSharedSettings: String,
  BirthdaySettings: String,
  JobChangeSettings: String,
  JobAnniversary: String,
  AnyEducationQualificationSettings: String,
  BookmarksSettings: String,
  BucketlistSettings: String,
  createdAt: String
};
module.exports = mongoose.model("usernotificationsettings", userSchema);
