var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })

var mongoSchema = mongoose.Schema;

var userSchema = {
  firstName: String,
  lastName: String,
  name: String,
  namePrivacy: String,
  email: String,
  countrycode: String,
  password: String,
  profilePic: String,
  singlePic: String,
  profilePrivacy: String,
  dob: String,
  dobPrivacy: String,
  age: String,
  agePrivacy: String,
  gender: String,
  genderPrivacy: String,
  partnerLooking: String,
  /*{
	type: [String], 
	enum: ["MySelf", "Family & Friends", "Others"],
	required: ["Please specify at least one factor."]
	}*/ partnerPrivacy: String,
  otp: String,
  otpVerify: String,
  lookLifePartener: String,
  currentCity: String,
  currentCityPrivacy: String,
  maritalStatus: String,
  maritalPrivacy: String,
  orientation: String,
  orientationPrivacy: String,
  religiion: String,
  religionPrivacy: String,
  type: String,
  bio: String,
  bioPrivacy: String,
  fcm_device_token: String,
  removeId: String,
  reportId: String,
  updatedAt: String,
  createdAt: String
};
module.exports = mongoose.model("userMaster", userSchema);
