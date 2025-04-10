// Abstraction (Interface-like structure)
class Database {
  save(data) {
    throw new Error("Not implemented");
  }
}

class MySQLDatabase extends Database {
  save(data) {
    console.log("Saving to MySQL:", data);
  }
}

class MongoDBDatabase extends Database {
  save(data) {
    console.log("Saving to MongoDB:", data);
  }
}

class UserService {
  constructor(database) {
    this.db = database; // depends on abstraction
  }

  createUser(user) {
    this.db.save(user);
  }
}

// Usage
const db = new MongoDBDatabase(); // could be swapped easily
const service = new UserService(db);
service.createUser({ name: "Alice" });
