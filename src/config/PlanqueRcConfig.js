import FileHelper from '../utils/FileHelper';

class PlanqueRcConfig extends FileHelper {
  constructor() {
    super('.planquerc');
  }

  async read() {
    try {
      const result = await super.read();
      const parsedData = result && result.data && JSON.parse(result.data);
      const config = parsedData ? parsedData : null;
      if (!config) {
        return {
          data: config,
          success: false,
          error: 'planque config not present in .planquerc',
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

export default PlanqueRcConfig;
