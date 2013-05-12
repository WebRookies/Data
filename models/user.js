var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId
  ;

var UserSchema = new Schema({
  gh_token : { type : String, index : { sparse : true } },
  gh_username : String,
  name : { type : String, default : "" },
  email : { type : String, index : { unique : true } },
  blurb : { type : String, default : "" },
  active : { type : Boolean, default : true },
  created : { type : Date, default : Date.now },
  updated : { type : Date, default : Date.now },
  lastseen : { type : Date, default : Date.now },
  level : { type : Number, default : 1 },
  gravatar_url : { type : String, default : ""},
  posts : [{ type : ObjectId, ref : 'post' }],
  comments : [{ type : ObjectId, ref : 'comment' }],
  courses : [{
    course : { type : ObjectId, ref : 'course' },
    complete : { type : Boolean, default : false },
    started : { type : Date, default : Date.now },
    completed : { type : Date },
    lastWorked : { type : Date, default : Date.now }
  }]
})

module.exports = UserSchema