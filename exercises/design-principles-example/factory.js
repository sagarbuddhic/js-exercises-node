class EmailNotification {
  send(message) {
    console.log(`Sending EMAIL: ${message}`);
  }
}

class SMSNotification {
  send(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

class PushNotification {
  send(message) {
    console.log(`Sending PUSH notification: ${message}`);
  }
}

class NotificationFactory {
  static createNotification(type) {
    switch (type) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        throw new Error("Unknown notification type");
    }
  }
}

const userPreference = "push"; // dynamically decided

const notifier = NotificationFactory.createNotification(userPreference);
notifier.send("You have a new message!");
