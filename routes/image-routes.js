const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
} = require("../controller/image-controller");
const uploadMiddleware = require("../middleware/upload-middleware");

const router = express.Router();

//upload the image
router.post(
  "/upload",
  // (req, res, next) => {
  //   console.log("Incoming headers:", req.headers["content-type"]);
  //   next();
  // },
  authMiddleware,
  adminMiddleware,
  uploadMiddleware.single("image"),
  uploadImageController
);

//to get all the images
router.get("/getimages", authMiddleware, fetchImagesController);


//delete image by who uploded same admin
//id: 690dc4ba35bb0aa6a955d135
router.delete("/:id", authMiddleware, adminMiddleware, deleteImageController);


module.exports = router;
