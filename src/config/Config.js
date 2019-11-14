import { DEFAULT_CONFIG } from '../utils/consts';
import PackageJSONConfig from './PackageJSONConfig';
import PlanqueRcConfig from './PlanqueRcConfig';

class Config {
  static getConfig() {
    const packageJsonInstance = new PackageJSONConfig();
    let packageJsonConfig = packageJsonInstance.read();
    packageJsonConfig = packageJsonConfig.success ? packageJsonConfig.data : {};

    const planqueRcInstance = new PlanqueRcConfig();
    let planqueRcConfig = planqueRcInstance.read();
    planqueRcConfig = planqueRcConfig.success ? planqueRcConfig.data : {};

    warn(
      `${this._filepath} file was not processed. ${err.message}`,
      `Check if ${this._filepath} exists and is valid JSON config.`,
    );
    return {
      ...packageJsonConfig,
      ...planqueRcConfig,
      ...DEFAULT_CONFIG,
    };
  }
}

export default Config;
