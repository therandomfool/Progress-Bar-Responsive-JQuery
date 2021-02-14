let options = {
    startAngle: -1.55,
    value: 0.85,
    size: 150,
    fill: {
      gradient: ['#000428', '#004e92']
    }
  }
  $('.circle .bar').circleProgress(options).on('circle-animation-progress',function(event, progress, stepValue){ 
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value:0.70
  })
  $(".bootstrap .bar").circleProgress({
    value:0.60
  })