var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })

var mongoSchema = mongoose.Schema;

var EthinicitySchema = {
  Ethinicity: String,
  status: String,
  updatedAt: String,
  createdAt: String
};
module.exports = mongoose.model("ethnicities", EthinicitySchema);
