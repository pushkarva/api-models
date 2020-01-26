var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })

var mongoSchema = mongoose.Schema;

var userSchema = {
  userID: String,
  title: String,
  company: String,
  location: String,
  designation: String,
  fromMonth: String,
  fromYear: String,
  toYear: String,
  toMonth: String,
  proType: String /*{
	type: [String], 
	enum: ["W",  "E"],
	required: ["Please specify at least one factor."]
    }*/,
  professionPrivacy: String /*{
	type: [String], 
	enum: ["1",  "2", "3"],
	required: ["Please specify at least one factor."]
    }*/,
  status: String,
  updatedAt: String,
  createdAt: String
};
module.exports = mongoose.model("userProfessionInfo", userSchema);
