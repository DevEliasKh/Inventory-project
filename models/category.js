const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
   name: {
      type: String,
      required: true,
      enum: ["coffee", "machine", "accessory"],
   },
   description: String,
});

categorySchema.virtual("url").get(function () {
   return `/product/${this.name}`;
});

module.exports = mongoose.model("Category", categorySchema);
