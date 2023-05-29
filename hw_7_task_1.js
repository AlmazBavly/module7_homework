function printOwnProperties(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log("Key: " + prop + ", Value: " + obj[prop]);
      }
    }
  }
