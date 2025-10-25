const worker = new Worker("web-worker.js");

worker.postMessage([1, 2, 3]);

worker.onmessage = function (event) {
  console.log(event);
};
