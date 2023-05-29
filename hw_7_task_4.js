function ElectricalAppliance(name, powerConsumption) {
  this.name = name;
  this.powerConsumption = powerConsumption;
  this.isOn = false;
}

ElectricalAppliance.prototype.turnOn = function() {
  console.log(`${this.name} включен`);
  this.isOn = true;
}

ElectricalAppliance.prototype.turnOff = function() {
  console.log(`${this.name} выключен`);
  this.isOn = false;
}

ElectricalAppliance.prototype.getPowerConsumption = function() {
  return this.isOn ? this.powerConsumption : 0;
}
//Создание делегирующей связи [[Prototype]] для приборов

function Lamp(name, powerConsumption, bulbType) {
  ElectricalAppliance.call(this, name, powerConsumption);
  this.bulbType = bulbType;
}

Lamp.prototype = Object.create(ElectricalAppliance.prototype);
Lamp.prototype.constructor = Lamp;
Lamp.prototype.turnOn = function() {
  console.log(`${this.name} светит ${this.bulbType} лампочкой`);
  ElectricalAppliance.prototype.turnOn.call(this);
}

function Computer(name, powerConsumption, cpu) {
  ElectricalAppliance.call(this, name, powerConsumption);
  this.cpu = cpu;
}

  Computer.prototype = Object.create(ElectricalAppliance.prototype);
  Computer.prototype.constructor = Computer;
  Computer.prototype.runProgram = function(programName) {
    console.log(`Запускаем программу ${programName} на компьютере ${this.name}`);
    ElectricalAppliance.prototype.turnOn.call(this);
  }
