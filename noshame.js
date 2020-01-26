var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })

var mongoSchema = mongoose.Schema;

var userSchema = {
  userID: String,
  mobileNo: String,
  name: String,
  email: String,
  cpnyName: String,
  cpnyLocation: String,
  jobTitles: String,
  age: String,
  schlName: String,
  schlLocation: String,
  clgName: String,
  clgLocation: String,
  createdAt: String
};
module.exports = mongoose.model("usernoshame", userSchema);
