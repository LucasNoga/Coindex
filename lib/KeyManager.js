const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.config = new Configstore(pkg.name);
  }

  setKey(key) {
    this.config.set("apiKey", key);
    return key;
  }

  getKey() {
    const key = this.config.get("apiKey");
    if (!key)
      throw new Error("No API key found - get a kau at https://nomics.com");
    return key;
  }

  deleteKey() {
    this.config.delete("apiKey", key);
  }
}

module.exports = KeyManager;
