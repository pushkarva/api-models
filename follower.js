var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })

var mongoSchema = mongoose.Schema;

var userSchema = {
  name: String,
  age: String,
  pic: String,
  city: String,
  place: String,
  education: String,
  company: String
};
module.exports = mongoose.model("followers", userSchema);
