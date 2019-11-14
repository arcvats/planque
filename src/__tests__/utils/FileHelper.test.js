import { expect } from 'chai';
import FileHelper from '../../utils/FileHelper';

describe('FileHelper', () => {
  describe('constructor', () => {
    it('should create instance of FileHelper with _filepath with current working directory and given file name', () => {
      const filename = 'package.json';
      const fh = new FileHelper(filename);
      expect(fh._filepath).to.equal(`${process.cwd()}/${filename}`);
    });
  });

  describe('read', () => {
    it('should return null and error message for non existing file', async () => {
      const filename = 'notexist.js';
      const fh = new FileHelper(filename);
      const result = await fh.read();
      expect(result.data).to.be.null;
      expect(result.success).to.be.false;
      expect(result.error).to.equal('no file exists/unable to resolve');
    });
    it('should return file data for existing file', async () => {
      const filename = 'package.json';
      const fh = new FileHelper(filename);
      const result = await fh.read();
      expect(result.success).to.be.true;
      expect(JSON.parse(result.data).name).to.equal('planque');
    });
  });

  describe('create', () => {
    it('should create file when folder and filename is specified', () => {
      const filename = 'temp.txt';
      const folder = 'temp';
    });
    it('should not create file and return error when no folder is specified', () => {});
    it('should not create file when no filename is specified', () => {});
  });
});
