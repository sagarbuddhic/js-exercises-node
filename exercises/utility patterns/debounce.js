const debounce = (fn) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// Function to run
function onSearch(query) {
  console.log("Searching for:", query);
}

// Debounce it (wait 500ms after last call)
const debouncedSearch = debounce(onSearch, 500);

// Simulating typing
debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hel");
debouncedSearch("hell");
debouncedSearch("hello");

// Only "hello" will be logged after 500ms of no typing
