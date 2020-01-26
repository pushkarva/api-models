var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
/*mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', 
{ useNewUrlParser: true })*/

var mongoSchema = mongoose.Schema;

var userSchema = {
  companyID: String,
  category: String,
  companyURL: String,
  headquarters: String,
  yearfounded: String,
  companyType: String,
  companySize: String,
  specialities: String,
  createdAt: String
};
module.exports = mongoose.model("companyDetails", userSchema);
