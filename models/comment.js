var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId
  ;

var CommentSchema = new Schema({
  parent : ObjectId,
  author : { type : ObjectId, ref : 'user' },
  created : { type : Date, default : Date.now },
  updated : { type : Date, default : Date.now },
  active : { type : Boolean, default : true },
  content : { type : String, default : "" },
  line : Number
})

module.exports = CommentSchema