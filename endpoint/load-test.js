var url = 'https://sagarbuddhic.github.io/profile/';
var totalHits = 2;

var axios = require('axios');

var requestsCount = 0;
var promises = [];
var startDate = new Date(Date.now());
var startMinutes = startDate.getMinutes();
var startSeconds = startDate.getSeconds();
console.log(`Start time - ${startDate.getHours()}:${startMinutes}:${startSeconds}`);

while(requestsCount <  totalHits) {
    promises.push(axios.get(url));
    requestsCount = requestsCount + 1;
}

Promise.allSettled(promises)
.then(results => {
    var count = 1;
      results.forEach((result) => {
        if (result.status === 'rejected') {
            console.log(`Webpage url: ${url} - hit: ${count} - status: ${result.reason.response.status},  status text: ${result.reason.response.statusText}`);
        } else {
            console.log(`Webpage url: ${url} - hit: ${count}, status:  ${result.value.status}`);
        }
        count = count + 1;
      });
      var endDate = new Date(Date.now());
      var endSeconds = endDate.getSeconds();
      var endMinutes = endDate.getMinutes();
      console.log(`End time - ${endDate.getHours()}:${endMinutes}:${endSeconds}`);
      console.log(`Total seconds to hit -  ${(endDate.getTime() - startDate.getTime()) / 1000}`);
})
