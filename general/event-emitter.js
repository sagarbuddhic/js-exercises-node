class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, fn) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(fn);
    }

    emit(eventName, data) {
        let events = this.events[eventName];
        if (events) {
            events.forEach((event) => { event(data); });
        }
    }
}

let emitter = new EventEmitter();

function first(data) {
    console.log(`first ${data}`);
}

function second(data) {
    console.log(`second ${data}`);
}

emitter.on('ADD', first);
emitter.on('ADD', second);

emitter.emit('ADD', 1);