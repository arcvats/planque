import FileHelper from '../utils/FileHelper';
import Errors from '../errors/Errors';

class PlanqueRcConfig extends FileHelper {
  constructor() {
    super('.planquerc');
  }

  read() {
    const result = super.read();
    const parsedData = result && result.data && JSON.parse(result.data);
    const config = parsedData ? parsedData : null;
    if (!config) {
      throw Errors.create('InternalError', 'file empty or data not processed');
    }
    return { data: config, success: true, error: null };
  }
}

export default PlanqueRcConfig;
