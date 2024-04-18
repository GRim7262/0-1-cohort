// Create a counter in Javascript (counts down from 30 to 0)

function startCountdown(seconds) {
  let counter = seconds;
  let interval = setInterval(function () {
    console.log(counter);
    counter--;

    if (counter < 0) {
      clearInterval(interval);
    }
  }, 1000);
}
startCountdown(30);
