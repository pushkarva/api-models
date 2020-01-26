var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var mongoSchema = mongoose.Schema;

var userSchema = {
  userId: String,
  momentPrivacy: String,
  momentNotAllowed: String,
  momentBanned: String,
  treePrivacy: String,
  lifePartnerPrivacy: String,
  friendsPrivacy: String,
  suggestionPrivacy: String,
  introducePrivacy: String,
  chatPrivacy: String,
  commentsPrivacy: String,
  bucketPermission: String,
  //"bucketAction" : String,
  bucketNotAllowed: String, //Don't show mine to others
  bucketBanned: String, // Don't show others in my dashboard
  interestPrivacy: String,
  placePrivacy: String,
  feedback: String,
  feedbackContent: String,
  updatedAt: String,
  createdAt: String
};
module.exports = mongoose.model("UserPrivacySetting", userSchema);
