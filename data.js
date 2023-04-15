module.exports = function() {
  const mongoose = require("mongoose");
  mongoose.connect("mongodb://localhost:27017/FoodHub", { useNewUrlParser: true }).then(res => {
    console.log('connected');
  })
}
