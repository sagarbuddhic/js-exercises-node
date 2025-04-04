class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    this.logs = [];
    Logger.instance = this;
  }

  log(message) {
    this.logs.push(message);
    console.log(`LOG: ${message}`);
  }

  getLogCount() {
    return this.logs.length;
  }
}

// Usage
const logger1 = new Logger();
logger1.log("First log");

const logger2 = new Logger();
logger2.log("Second log");

console.log(logger1 === logger2); // true
console.log(logger1.getLogCount()); // 2
console.log(logger2.getLogCount()); // 2

const Singleton = (function () {
  let instance;

  function createInstance() {
    const obj = {
      user: "sagar",
      date: "",
    };
    return obj;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b); // true
console.log(a.user); // e.g., "3:45:12 PM"
console.log(b.date); // same as a.time
