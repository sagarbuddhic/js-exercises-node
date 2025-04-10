class HttpRequest {
  constructor(builder) {
    this.method = builder.method;
    this.url = builder.url;
    this.headers = builder.headers;
    this.body = builder.body;
  }

  send() {
    return fetch(this.url, {
      method: this.method,
      headers: this.headers,
      body: this.body ? JSON.stringify(this.body) : undefined,
    }).then((res) => res.json());
  }
}

class HttpRequestBuilder {
  constructor() {
    this.method = "GET";
    this.url = "";
    this.headers = {};
    this.body = null;
  }

  setMethod(method) {
    this.method = method;
    return this;
  }

  setUrl(url) {
    this.url = url;
    return this;
  }

  addHeader(key, value) {
    this.headers[key] = value;
    return this;
  }

  setBody(body) {
    this.body = body;
    return this;
  }

  build() {
    return new HttpRequest(this);
  }
}

const request = new HttpRequestBuilder()
  .setMethod("POST")
  .setUrl("https://jsonplaceholder.typicode.com/posts")
  .addHeader("Content-Type", "application/json")
  .setBody({ title: "Builder Pattern", body: "Hello world!", userId: 1 })
  .build();

request.send().then((response) => console.log("Response:", response));
