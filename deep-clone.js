
const deepClone = (obj) => {
    let clone = obj;

    if (obj && typeof obj === "object") {
      clone = new obj.constructor();

      Object.getOwnPropertyNames(obj).forEach((property) => {
        clone[property] = deepClone(obj[property]);
      });
    }

    return clone;
  };

