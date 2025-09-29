function throttle(fn, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

function onScroll(event) {
  console.log("Scroll position:", window.scrollY);
}

// Throttle to once every 200ms
const throttledScroll = throttle(onScroll, 200);

window.addEventListener("scroll", throttledScroll);
