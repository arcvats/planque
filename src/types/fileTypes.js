//@flow

export type FileContentType = {|
  data: ?string,
  success: boolean,
  error: ?string,
|};

export type FileContentPromiseType = Promise<FileContentType>;
