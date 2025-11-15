const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function test() {
  try {
    const result = await cloudinary.api.ping();
    console.log("✅ Cloudinary connected successfully:", result);
  } catch (err) {
    console.error("❌ Cloudinary connection failed:", err.message);
  }
}

test();

module.exports = cloudinary;
