import { expect } from 'chai';
import { createSandbox } from 'sinon';

import PackageJSONConfig from '../../config/PackageJSONConfig';

describe('PackageJSONConfig', () => {
  describe('constructor', () => {
    it('should create instance of PackageJSONConfig with package.json file', () => {
      const instance = new PackageJSONConfig();
      expect(instance.filepath).to.equal(`${process.cwd()}/package.json`);
    });
  });
  describe('read', () => {
    it('should read contents of package.json file not having planque object', async () => {
      const instance = new PackageJSONConfig();
      const config = await instance.read();
      expect(config.data).to.be.null;
      expect(config.success).to.be.false;
      expect(config.error).to.equal(
        'planque config not present in package.json',
      );
    });

    it('should read planque object from package.json file', async () => {
      const initialPath = process.cwd();
      const sandbox = createSandbox();
      sandbox
        .stub(process, 'cwd')
        .returns(`${initialPath}/src/__mocks__`);
      const instance = new PackageJSONConfig();
      const config = await instance.read();
      expect(config.success).to.be.true;
      expect(config.error).to.be.null;
      expect(config.data.data).to.equal('test');
      sandbox.restore();
    });
  });
});
