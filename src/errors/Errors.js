import InternalError from './InternalError';

class Errors {
  static register(className, ClassExt) {
    if (!Errors._types.has(className) && ClassExt.prototype instanceof Error) {
      Errors._types.set(className, ClassExt);
    }
  }

  static create(className, ...args) {
    if (!Errors._types.has(className)) {
      return new Error(...args);
    }
    let ClassExt = this._types.get(className);
    let instance = new ClassExt(...args);
    return instance;
  }
}

Errors._types = new Map();
Errors.register('InternalError', InternalError);

export default Errors;
