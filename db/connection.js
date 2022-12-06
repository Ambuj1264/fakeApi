const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/fakeApi", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("you are connected with the db");
  })
  .catch((e) => console.log(e.message));
