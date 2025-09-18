class Config {
    constructor() {
      if (Config.instance) {
        return Config.instance;
      }
      this.settings = {};
      Config.instance = this;
    }
  
    setConfig(key, value) {
      this.settings[key] = value;
      console.log(`Configuração definida: ${key} = ${value}`);
    }
  
    getConfig(key) {
      return this.settings[key];
    }
  
    printAll() {
      console.log("Configurações atuais:", this.settings);
    }
  }
  
  const c1 = new Config();
  c1.setConfig("lang", "pt-BR");
  
  const c2 = new Config();
  c2.setConfig("theme", "dark");
  
  const c3 = new Config();
  console.log("Idioma atual:", c3.getConfig("lang"));
  
  c1.printAll();
  c2.printAll();
  c3.printAll();