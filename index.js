"use strict";
/**
 *@description  Initialize models to mongoose when application starts
 *@author Tilak Ranjan Mohanta
 *@since Jan 09, 2020
 */

const applink = require("./applink");
const register = require("./userMaster");
const address = require("./userAddressMaster");
const profession = require("./userProfessionInfo");
const companyCtgy = require("./companyDetails");
const city = require("./city");
const orientation = require("./orientationManagement");
const religion = require("./religion");
const partner = require("./partner");
const marital = require("./maritalStatus");
const nationality = require("./nationalityStatus");
const job = require("./jobStatus");
const educations = require("./educationStatus");
const CountrylivingIn = require("./CountryLivingIn");
const ethinicity = require("./ethinicity");
const country = require("./country");
const like = require("./likes");
const commentCollection = require("./comments");
const bookmark = require("./bookmarks");
const noshame = require("./noshame");
const bucket = require("./bucketInfo");
const shares = require("./shares");
const moment = require("./moments");
const mmntwithuserdet = require("./MomentListWithUserDetails");
const school = require("./schoolmgmt");
const degree = require("./degree");
const companyMgmt = require("./companyMgmt");
const searchingData = require("./searchData");
const tree = require("./usertree");
const sendrequest = require("./userInvites");
const suggestionCollection = require("./userSuggestion");
const introduceCollections = require("./userIntroduce");
const verificationCollection = require("./userVerification");
const privacySettingCollection = require("./UserPrivacySettings");
const blockuserCollection = require("./userblockedlist");
const userConnectionCollection = require("./userConnections");
const reportCollection = require("./userReportList");
const userNotification = require("./userNotification");
const tagNotificationColletion = require("./UserTagNotification");
const TreeInvitationCollection = require("./treeinvitation");
const MessageCollection = require("./message");
const Roomcollection = require("./room");
const NotificationSettingCollection = require("./UserNotificationSettings");
const SaveProfileCollection = require("./UserSaveProfiles");
const myPlaces = require("./myPlaces");

module.exports = {
  applink,
  register,
  address,
  profession,
  city,
  orientation,
  religion,
  partner,
  marital,
  nationality,
  job,
  educations,
  CountrylivingIn,
  ethinicity,
  country,
  like,
  commentCollection,
  bookmark,
  noshame,
  bucket,
  shares,
  companyCtgy,
  moment,
  mmntwithuserdet,
  school,
  degree,
  companyMgmt,
  searchingData,
  tree,
  sendrequest,
  suggestionCollection,
  introduceCollections,
  verificationCollection,
  privacySettingCollection,
  blockuserCollection,
  userConnectionCollection,
  reportCollection,
  userNotification,
  tagNotificationColletion,
  MessageCollection,
  Roomcollection,
  NotificationSettingCollection,
  SaveProfileCollection,
  myPlaces,
  TreeInvitationCollection
};
