class Machine {
  print() {}
  scan() {}
  fax() {}
}

class OldPrinter extends Machine {
  print() {
    console.log("Printing...");
  }

  scan() {
    throw new Error("Scan not supported");
  }

  fax() {
    throw new Error("Fax not supported");
  }
}

class Printer {
  print(document) {
    throw new Error("Not implemented");
  }
}

class Scanner {
  scan(document) {
    throw new Error("Not implemented");
  }
}

class Fax {
  fax(document) {
    throw new Error("Not implemented");
  }
}
