function counter() {
  function animateCounter(selector, maxCount, interval) {
    let counter = document.querySelector(selector);
    let count = 0;
    let increment = 1;
    let intervalId;

    return function () {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        count += increment;
        if (count >= maxCount) {
          count = maxCount;
          clearInterval(intervalId);
        }
        counter.innerHTML = count;
      }, interval);
    };
  }

  gsap.from("#number1", {
    onStart: animateCounter("#number1", 50, 30),
  });

  gsap.from("#number2", {
    onStart: animateCounter("#number2", 4, 400),
  });

  gsap.from("#number3", {
    onStart: animateCounter("#number3", 92, 20),
  });
}

//*******Numbers section counter animation*******/
counter();
