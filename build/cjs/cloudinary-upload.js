"use strict";

exports.__esModule = true;
exports.uploads = uploads;
exports.videoUpload = videoUpload;
var _cloudinary = _interopRequireDefault(require("cloudinary"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function uploads(file, public_id, overwrite, invalidate) {
  return new Promise((resolve, reject) => {
    _cloudinary.default.v2.uploader.upload(file, {
      public_id,
      overwrite,
      invalidate,
      resource_type: 'auto'
    }, (error, result) => {
      if (error) {
        resolve(error);
      } else {
        resolve(result);
      }
    });
  });
}
function videoUpload(file, public_id, overwrite, invalidate) {
  return new Promise((resolve, reject) => {
    _cloudinary.default.v2.uploader.upload(file, {
      public_id,
      overwrite,
      invalidate,
      chunk_size: 50000,
      resource_type: 'video'
    }, (error, result) => {
      if (error) {
        resolve(error);
      } else {
        resolve(result);
      }
    });
  });
}
//# sourceMappingURL=cloudinary-upload.js.map