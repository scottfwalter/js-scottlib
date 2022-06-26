export const deepClone = (obj) => {
  let clone = obj;

  if (obj && typeof obj === 'object') {
    clone = new obj.constructor();

    Object.getOwnPropertyNames(obj).forEach((property) => {
      clone[property] = deepClone(obj[property]);
    });
  }

  return clone;
};

/*
const obj = {
  selector: { to: { val: 'val to select' } },
  target: [1, 2, { a: 'test' }]
};
getWithDotNotation(obj, 'selector.to.val', 'target[0]', 'target[2].a');
*/
export const getWithDotNotation = (from, ...selectors) =>
  [...selectors].map((s) =>
    s
      .replace(/\[([^[\]]*)\]/g, '.$1.')
      // .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter((t) => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );

/*
class MyClass {
  constructor(msg) {
    this.msg = msg;
  }

  printMsg() {
    console.log(this.msg);
  }
}

MySingletonClass = singletonify(MyClass);

const myObj = new MySingletonClass('first');
myObj.printMsg();           // 'first'
const myObj2 = new MySingletonClass('second');
myObj2.printMsg();           // 'first'
*/
export const singletonify = (className) => {
  return new Proxy(className.prototype.constructor, {
    instance: null,
    construct: (target, argumentsList) => {
      if (!this.instance) {
        this.instance = new target(...argumentsList);
      }
      return this.instance;
    }
  });
};
