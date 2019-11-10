import { readFile, existsSync } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

class FileHelper {
  constructor(filepath) {
    this.filepath = join(process.cwd(), filepath);
  }
  async read() {
    if (!existsSync(this.filepath)) {
      return {
        data: null,
        success: false,
        error: 'no file exists/unable to resolve',
      };
    }
    try {
      const read = promisify(readFile);
      const data = await read(this.filepath);
      if (data) {
        return { data: data.toString(), success: true, error: null };
      }
      return { data: null, success: false, error: 'unsupported data type' };
    } catch (err) {
      console.warn(
        `Warning: ${this.filepath} file was not processed. `,
        err.message,
      );
      return { data: null, success: false, error: err.message };
    }
  }
}

export default FileHelper;
