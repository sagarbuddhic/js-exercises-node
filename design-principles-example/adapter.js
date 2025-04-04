class OldUserService {
  getUser() {
    return {
      fullName: "John Doe",
      years: 30,
    };
  }
}

// Our app expects this format:
const expectedFormat = {
  name: "John Doe",
  age: 30,
};

class UserAdapter {
  constructor(oldService) {
    this.oldService = oldService;
  }

  getUser() {
    const data = this.oldService.getUser();
    return {
      name: data.fullName,
      age: data.years,
    };
  }
}

const oldService = new OldUserService();
const adaptedService = new UserAdapter(oldService);

const user = adaptedService.getUser();
console.log(user); // { name: 'John Doe', age: 30 }
