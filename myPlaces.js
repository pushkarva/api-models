var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })
var mongoSchema = mongoose.Schema;

var myPlacesSchema = {
  userId: String,
  placeId: String,
  placeName: String,
  placeType: String,
  visitType: String,
  images: Array,
  fromDate: String,
  toDate: String,
  visibility: String,
  placeLat: String,
  placeLon: String,
  createdOn: String,
  updatedOn: String
};
module.exports = mongoose.model("myPlaces", myPlacesSchema);
