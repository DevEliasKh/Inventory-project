const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
   name: String,
   category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
   },
   imageSrc: String,
   price: Number,
   description: String,
   numberInStock: Number,
});

itemSchema.virtual("url").get(function () {
   return `/product/${this.category}/${this._id}`;
});

module.exports = mongoose.model("Item", itemSchema);
