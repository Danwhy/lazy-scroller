if(webgazer.detectCompatibility()) {

  webgazer.begin();
  webgazer.setGazeListener(function(data, elapsedTime) {
    
    if (data) {
      var xprediction = data.x;
      var yprediction = data.y;

      if (xprediction < -50) {
        console.log('finished');
        webgazer.end();
        webgazer.stream.getTracks()[0].stop();
      }
    }
  });
}
