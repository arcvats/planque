import FileHelper from '../utils/FileHelper';

class PackageJSONConfig extends FileHelper {
  constructor() {
    super('package.json');
  }
  async read() {
    try {
      const result = await super.read();
      const parsedData = result && result.data && JSON.parse(result.data);
      const config =
        parsedData && parsedData.planque ? parsedData.planque : null;
      if (!config) {
        return {
          data: config,
          success: false,
          error: 'planque config not present in package.json',
        };
      }
      return { data: config, success: true, error: null };
    } catch (err) {
      console.warn(
        `Warning: ${super.filepath} was not processed.`,
        err.message,
      );
      return { data: null, success: false, error: err.message };
    }
  }
}

export default PackageJSONConfig;
