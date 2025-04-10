class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Subscribe to an event
  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  // Emit an event
  emit(eventName, data) {
    const listeners = this.events[eventName];
    if (listeners) {
      listeners.forEach((listener) => listener(data));
    }
  }

  // Unsubscribe from an event
  off(eventName, listenerToRemove) {
    this.events[eventName] = this.events[eventName]?.filter(
      (listener) => listener !== listenerToRemove
    );
  }
}

const emitter = new EventEmitter();

function observer1(data) {
  console.log("Observer 1 received:", data);
}

function observer2(data) {
  console.log("Observer 2 received:", data);
}

emitter.on("message", observer1);
emitter.on("message", observer2);

emitter.emit("message", "Hello Observers!");

// Output:
// Observer 1 received: Hello Observers!
// Observer 2 received: Hello Observers!

emitter.off("message", observer2);

emitter.emit("message", "Only observer 1 should hear this");
// Output:
// Observer 1 received: Only observer 1 should hear this
