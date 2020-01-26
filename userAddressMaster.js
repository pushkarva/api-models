var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })

var mongoSchema = mongoose.Schema;

var userSchema = {
  userID: String,
  // "currentCity":String,
  nationality: String,
  languageKnown: String,
  citizenship: String,
  citiesLivedIn: String,
  CountriesTraveled: String,
  visas: String,
  nationalityPrivacy: String,
  languagePrivacy: String,
  citizenPrivacy: String,
  citiesLivedPrivacy: String,
  CountriesTraveledPrivacy: String,
  visasPrivacy: String,
  createdAt: String,
  updatesAT: String
};
module.exports = mongoose.model("userAddressMaster", userSchema);
