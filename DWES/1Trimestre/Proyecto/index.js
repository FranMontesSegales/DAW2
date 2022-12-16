const express = require("express");
const app = express();
const errors = require("./middleware/errors.js");


app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api", require("./routes/app.routes"));

app.use(errors.errorHandler);

app.listen(process.env.port || 3000, function () {
});