import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tompFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tompFolder,

  storage: multer.diskStorage({
    destination: tompFolder,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(8).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
