import multer  from"multer";
import path  from"path";
import crypto  from"crypto";
import aws  from"aws-sdk";
import multerS3  from"multer-s3";


export default  {
//   dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: multerS3({
    s3: new aws.S3(),
    bucket:'',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        callback(null, fileName);
      });
    }
  }),
//   storage: storageTypes[process.env.STORAGE_TYPE],
  limits: {
    fileSize: 2 * 1024 * 1024
  },
//   fileFilter: (req:Request, file:File, callback:Function) => {
//     const allowedMimes = [
//       "image/jpeg",
//       "image/pjpeg",
//       "image/png",
//       "image/gif"
//     ];

//     if (allowedMimes.includes(file.mimetype)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Invalid file type."));
//     }
//   }
};
