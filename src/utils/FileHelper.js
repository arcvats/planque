import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import Errors from '../errors/Errors';
import { warn } from '../utils/helpers';

class FileHelper {
  constructor(filepath) {
    this._filepath = join(process.cwd(), filepath);
  }
  read() {
    if (!existsSync(this._filepath)) {
      throw Errors.create('InternalError', 'no file exists/unable to resolve');
    }
    const data = readFileSync(this._filepath);
    if (data) {
      return { data: data.toString(), success: true, message: null };
    } else {
      throw Errors.create('InternalError', 'file empty');
    }
  }
}

export default FileHelper;
