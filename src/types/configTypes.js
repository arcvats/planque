// @flow

export type ConfigType = {|
  parser: ?string,
  format: ?boolean,
  time: ?string,
  storage: ?string,
|};

export type PlanqueConfigType = {|
  planque: ?ConfigType,
  ...any,
|};
