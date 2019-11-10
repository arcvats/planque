class ConfigLoader {
  constructor() {
    if (this.constructor.name === 'ConfigLoader') {
      this.config = defaultConfig;
    }
  }
}

const config = new ConfigLoader();
