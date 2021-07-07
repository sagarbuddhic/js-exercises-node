var url = 'https://sagarbuddhic.github.io/profile/';
var totalHits = 2;

var axios = require('axios');

var requestsCount = 0;
var promises = [];

while(requestsCount <  totalHits) {
    promises.push(axios.get(topicsUrl));
    requestsCount = requestsCount + 1;
}

Promise.allSettled(promises)
.then(results => {
    var count = 1;
      results.forEach((result) => {
        if (result.status === 'rejected') {
            console.log(`webpage url: ${url} - hit: ${count} - status: ${result.reason.response.status},  status text: ${result.reason.response.statusText}`);
        } else {
            console.log(`webpage url: ${url} - hit: ${count}, status:  ${result.value.status}`);
        }
        count = count + 1;
      });
})