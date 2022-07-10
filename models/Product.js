const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { 
        type: String, 
        required: true, 
        unique: true
     },
    desc: {
         type: String,
        required: true 
    },
    img: [{
        type: String,
        required: true
    }],
    
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },

    size: [{
        type: String,
        enum: ['xs','s','m','l','xl','xxl'],
        required: true
     }],

    color: { 
        type: String
    },
    
    price: { 
        type: Number, 
        required: true 
    },
    gender: { 
        type: String, 
        enum: ['man','woman','child'], 
        required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);