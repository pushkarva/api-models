var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })

var mongoSchema = mongoose.Schema;

var userSchema = {
  fromId: String,
  fromName: String,
  fromPic: String,
  toId: String,
  introduceId: String,
  introName: String,
  introPic: String,
  introCity: String,
  introduceRequest: String,
  // "suggestionForWho" : String,
  // "status":String,
  // "reqType":String,
  createdAt: String
};
module.exports = mongoose.model("userIntroduce", userSchema);
