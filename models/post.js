var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId
  ;

var PostSchema = new Schema({
  authors : [{ type : ObjectId, ref : 'user' }],
  posted : { type : Date, default : Date.now },
  updated : { type : Date, default : Date.now },
  published : { type : Boolean, default : false },
  active : { type : Boolean, default : false },
  title : String,
  slug : String,
  content : { type : String, default : "" },
  tags : [{
    name : String
  }],
  courses : [{ type : ObjectId, ref : 'course' }],
  comments : [{ type : ObjectId, ref : 'comment' }]
})

module.exports = PostSchema