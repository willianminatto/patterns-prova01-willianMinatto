class Bicicleta {
    move() {
      return "Pedalando a bicicleta no pátio da UNISATC";
    }
  }
  
  class Patinete {
    move() {
      return "Andando de patinete pelo estacionamento da UNISATC";
    }
  }
  
  class Onibus {
    move() {
      return "Andando de ônibus e chegando na UNISATC";
    }
  }
  
  class TransporteFactory {
    createIndividual() {
      throw new Error("Método abstrato deve ser implementado");
    }
    createColetivo() {
      throw new Error("Método abstrato deve ser implementado");
    }
  }
  
  class EcoFactory extends TransporteFactory {
    createIndividual() {
      return new Bicicleta();
    }
    createColetivo() {
      return new Patinete();
    }
  }
  
  class PublicoFactory extends TransporteFactory {
    createIndividual() {
      return new Patinete();
    }
    createColetivo() {
      return new Onibus();
    }
  }
  
  const factories = {
    eco: new EcoFactory(),
    publico: new PublicoFactory(),
  };
  
  class TransporteApp {
    constructor(factory) {
      this.individual = factory.createIndividual();
      this.coletivo = factory.createColetivo();
    }
  
    iniciarTransporte() {
      console.log(this.individual.move());
      console.log(this.coletivo.move());
    }
  }
  
  function main() {
    const tipos = ["eco", "publico"];
  
    tipos.forEach((tipo) => {
      console.log(`\n>> Fábrica selecionada: ${tipo} <<`);
      const factory = factories[tipo];
      if (!factory) throw new Error("Tipo de fábrica desconhecido");
  
      const app = new TransporteApp(factory);
      app.iniciarTransporte();
    });
  }
  
  main();
