var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var mongoSchema = mongoose.Schema;

var memberSchema = {
  userId: String, //owner of the  tree
  selectedUSerId: String,
  searchType: String, //i can search a life partner & friends so i mention this
  partnerLooking: String,
  Gender: String,
  job: String,
  distance: String,
  age: String,
  education: String,
  countryLiving: String,
  ethnicity: String,
  updatedAt: String,
  createdAt: String
};
module.exports = mongoose.model("searchingResult", memberSchema);
