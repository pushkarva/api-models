var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Yaass", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var messageSchema = {
  roomsId: String,
  content: String,
  time: String,
  message_status: String,
  type: String,
  chatSenderId: String,
  chatReceiverId: String,
  date: String
  // ,"chatUsersId" : String,
  // "username":String,
  // "receiver_name":String,
  // "sender_profile_pic":String,
  // "receiver_profile_pic":String,
  // "messagesBySender":String,
  // "profile_pic":String,
  // "messageCustomId" :String,
  // "onlineSenderStatus":String,
  // "onlinereceiverStatus":String
};
module.exports = mongoose.model("messages", messageSchema);
