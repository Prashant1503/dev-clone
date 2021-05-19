const cloudinary = require("cloudinary").v2;
const { cloud } = require("../constants/constants");
const multer = require("multer");
const path = require("path");

/** cloudinary configuration  */
cloudinary.config({
  api_key: "632261264358393",
  api_secret: "K7sjpS1WFMtE6TKTgM90F7dYNvc",
  cloud_name: "pvani965",
});

/** Multer setup */
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(path.dirname(__dirname), "uploads"));
  },

  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };
