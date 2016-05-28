if(webgazer.detectCompatibility()) {
  webgazer.begin();
  webgazer.setGazeListener(function(data, elapsedTime) {

    if (data) {
      var xprediction = data.x;
      var yprediction = data.y;

      if (xprediction < -50) {
        shutDown();
      }

      if (yprediction < 25) {
        window.scrollBy(0, -20);
      } else if (yprediction > window.innerHeight - 100) {
        window.scrollBy(0, 20);
      }
    }
  });
}

function shutDown() {
  console.log('finished');
  webgazer.stream.getTracks()[0].stop();
  webgazer.end();
}

window.onbeforeunload = function() {
  shutDown();
}
