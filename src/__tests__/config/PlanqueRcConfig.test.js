import { writeFileSync } from 'fs';
import { expect } from 'chai';
import { createSandbox } from 'sinon';

import PlanqueRcConfig from '../../config/PlanqueRcConfig';

describe('PlanqueRcConfig', () => {
  describe('constructor', () => {
    it('should create a config object for planqueRcConfig', () => {
      const planqueRcConfig = new PlanqueRcConfig();
      expect(planqueRcConfig.filepath).to.equal(`${process.cwd()}/.planquerc`);
    });
  });

  describe('read', () => {
    const initialPath = process.cwd();
    let sandbox;
    beforeEach(() => {
      sandbox = createSandbox();
      sandbox.stub(process, 'cwd').returns(`${initialPath}/src/__mocks__`);
    });
    afterEach(() => {
      sandbox.restore();
      writeFileSync(`${initialPath}/src/__mocks__/.planquerc`, '');
    });

    it('should read contents of .planquerc file not having config', async () => {
      const planqueRcConfig = new PlanqueRcConfig();
      const config = await planqueRcConfig.read();
      expect(config.success).to.be.false;
      expect(config.error).to.equal('planque config not present in .planquerc');
      expect(config.data).to.be.null;
    });

    it('should read planque object from .planquerc file', async () => {
      writeFileSync(
        `${initialPath}/src/__mocks__/.planquerc`,
        JSON.stringify({
          time: 'mock',
        }),
      );
      const planqueRcConfig = new PlanqueRcConfig();
      const config = await planqueRcConfig.read();
      expect(config.success).to.be.true;
      expect(config.error).to.be.null;
      expect(config.data.time).to.equal('mock');
    });
  });
});
