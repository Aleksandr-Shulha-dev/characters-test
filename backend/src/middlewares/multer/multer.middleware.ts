// import { Request, Response } from 'express';
import path from 'path';
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'src/images')
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
  }
});

export const uploadMiddleware = multer({storage}).single("file");

// export const uploadMiddleware = (
//   req: Request,
//   res: Response
// ) => {
//   upload(req, res, (err) => {
//     console.log(req.file);
//     if (err) {
//       throw new Error(err);
//     }
//   })
// }