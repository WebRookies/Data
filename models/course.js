var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId
  ;

var CourseSchema = new Schema({
  description : { type : String, default : "" },
  published : { type : Boolean, default : false },
  created : { type : Date, default : Date.now },
  updated : { type : Date, default : Date.now },
  posts : [{
    order : Number,
    post : { type : ObjectId, ref : 'post' }
  }],
  completed_by : [{
    user : { type : ObjectId, ref : 'user' },
    completed : { type : Date }
  }]
})

module.exports = CourseSchema