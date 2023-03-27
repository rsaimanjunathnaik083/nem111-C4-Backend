const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: String,
    body: String,
    device: String,
    no_of_comments: Number,
  },
  {
    versionKey: false,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = { 
    PostModel 
};

// "title" : "javascript",
// "body":"No",
// "device" :"PC",
// "no_of_comments" : 20
