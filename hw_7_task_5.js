class ElectricalAppliance {
    constructor(name, powerConsumption) {
      this.name = name;
      this.powerConsumption = powerConsumption;
      this.isOn = false;
    }
  
    turnOn() {
      console.log(`${this.name} включен`);
      this.isOn = true;
    }
  
    turnOff() {
      console.log(`${this.name} выключен`);
      this.isOn = false;
    }
  
    getPowerConsumption() {
      return this.isOn ? this.powerConsumption : 0;
    }
  }
  
  class Lamp extends ElectricalAppliance {
    constructor(name, powerConsumption, bulbType) {
      super(name, powerConsumption);
      this.bulbType = bulbType;
    }
  
    turnOn() {
      console.log(`${this.name} светит ${this.bulbType} лампочкой`);
      super.turnOn();
    }
  }
  
  class Computer extends ElectricalAppliance {
    constructor(name, powerConsumption, cpu) {
      super(name, powerConsumption);
      this.cpu = cpu;
    }
  
    runProgram(programName) {
      console.log(`Запускаем программу ${programName} на компьютере ${this.name}`);
      super.turnOn();
    }
  }
