const mongoose = require("mongoose"); // imported the mongoose module to create a schema

// creating a user schema below
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, // to remove the extra whitespace
    required: [true, "name is a required field"],
    minlength: [2, "minimum character in the name should be 2"],
    maxlength: [50, "maximum character in the name should be 50"],
  },

  image: {
    type: String,
    default:
      "https://cdn1.vectorstock.com/i/1000x1000/79/10/product-icon-simple-element-vector-27077910.jpg", // setting up a default field
  },

  createdOn: {
    type: String, // taking the type as string
    default: new Date(),
  },

  isAdmin: {
    // creating a field for the admin to check whether the user is a admin or not
    type: "boolean",
    default: false,
  },
});

// now we will be creating a "model" based on the above schema

const ProductModal = mongoose.model("productCollection", productSchema); // creating a userCollection in the database

module.exports = ProductModal;
