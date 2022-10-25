let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.20,
    fill: {gradient: ['#a445b2', '#fa4299']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".milk .bar").circleProgress({
    value: 0.50
  });
  $(".salad .bar").circleProgress({
    value: 0.60
  });
  $(".tomato .bar").circleProgress({
    value: 0.38
  });