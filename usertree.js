var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })

var mongoSchema = mongoose.Schema;

var memberSchema = {
  userId: String, //owner of the  tree
  otherPrsnEmail: String,
  otherPrsnMbl: String,
  otheruserId: String,
  // "profilePic" : String,
  // "name" : String,
  relationship: String,
  treeId: String,
  gender: String,
  age: String,
  location: String,
  livingStatus: String,
  lastEducation: String,
  maritalStatus: String,
  treePrivacy: String,
  invitationStatus: String,
  updatedAt: String,
  createdAt: String
};
module.exports = mongoose.model("fmlyandfrdstree", memberSchema);
