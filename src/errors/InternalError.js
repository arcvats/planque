class InternalError extends Error {
  constructor(args) {
    super(args);
    this.name = 'InternalError';
  }
}

export default InternalError;
