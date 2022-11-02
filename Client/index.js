var value
  
  function getData(input) {
    var str = input
    $.ajax({
      type: "GET",
      url: "https://server-waste.herokuapp.com/item/"+ input,
      dataType: "json",
      success: function (response) {
        response = Object.values(response)
        value = response[0].map(d => d.weekly_waste)
        localStorage.setItem(str, value)
        console.log(value)   

      }
    });
  }
  items();
  setInterval(function(){ 
    //code goes here that will be run every 5 seconds.  
    items();
  
}, 5000);

$('#options').change(function(){ 
  var value = $(this).val();
  if(value == 'Meat'){
  $('.milk').hide();
  $('.tomato').hide();
  $(".cereal").hide();
  $(".salad").hide();
  $(".bread").hide();
  $(".fruits").hide();
  $(".fish").hide();
  $(".oil").hide();
  $(".meat").show();

  }
  if(value == 'Milk'){
    $('.milk').show();
    $('.tomato').hide();
    $(".cereal").hide();
    $(".salad").hide();
    $(".bread").hide();
    $(".fruits").hide();
    $(".fish").hide();
    $(".oil").hide();
    $(".meat").hide();
    }
  if(value == 'Tomato'){
    $('.milk').hide();
    $('.tomato').show();
    $(".cereal").hide();
    $(".salad").hide();
    $(".bread").hide();
    $(".fruits").hide();
    $(".fish").hide();
    $(".oil").hide();
    $(".meat").hide();
  }
  if(value == 'Salad'){
    $('.milk').hide();
    $('.tomato').hide();
    $(".cereal").hide();
    $(".salad").show();
    $(".bread").hide();
    $(".fruits").hide();
    $(".fish").hide();
    $(".oil").hide();
    $(".meat").hide();
    }
  if(value == 'Cereal'){
    $("cereal").show();
    $('.milk').hide();
    $('.tomato').hide();
    $(".salad").hide();
    $(".bread").hide();
    $(".fruits").hide();
    $(".fish").hide();
    $(".oil").hide();
    $(".meat").hide();
   }
   if(value == 'Fruits'){
    $(".fruits").show();
    $('.milk').hide();
    $('.tomato').hide();
    $(".cereal").hide();
    $(".salad").hide();
    $(".bread").hide();
    $(".fish").hide();
    $(".oil").hide();
    $(".meat").hide();
   }
   if(value == 'Fish'){
    $(".fish").show();
    $('.milk').hide();
    $('.tomato').hide();
    $(".cereal").hide();
    $(".salad").hide();
    $(".bread").hide();
    $(".fruits").hide();
    $(".oil").hide();
    $(".meat").hide();
   }
   if(value == 'Oil'){
    $(".oil").show();
    $('.milk').hide();
  $('.tomato').hide();
  $(".cereal").hide();
  $(".salad").hide();
  $(".bread").hide();
  $(".fruits").hide();
  $(".fish").hide();
  $(".meat").hide();
   }
   if(value == 'Bread'){
    $('.milk').hide();
    $('.tomato').hide();
    $(".cereal").hide();
    $(".salad").hide();
    $(".bread").show();
    $(".fruits").hide();
    $(".fish").hide();
    $(".oil").hide();
    $(".meat").hide();
    }
});

  $("#signout").click(function (e) { 
    window.location.replace("http://127.0.0.1:5500/Client/login.html");
  });
  async function items() {
   getData('Milk'); 
   getData('Bread'); 
   getData('Salad'); 
   getData('Tomato'); 
   getData('Meat'); 
   getData('Fish'); 
   getData('Fruits'); 
   getData('Cereal'); 
   getData('Oil'); 

  
   let options = {
    startAngle: -1.55,
    size: 150,
    value: localStorage.getItem('Bread'),
    fill: {gradient: ['#a445b2', '#fa4299']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });

  $(".milk .bar").circleProgress({
    value: localStorage.getItem('Milk')
  });
   $(".tomato .bar").circleProgress({
    value: localStorage.getItem('Tomato')
  });
   $(".salad .bar").circleProgress({
    value: localStorage.getItem('Salad')
  });
    $(".meat .bar").circleProgress({
    value: localStorage.getItem('Meat')
  }); 
   $(".oil .bar").circleProgress({
    value: localStorage.getItem('Oil')
  }); 
   $(".fish .bar").circleProgress({
    value: localStorage.getItem('Fish')
  }); 
   $(".fruits .bar").circleProgress({
    value: localStorage.getItem('Fruits')
  });
  $(".cereal .bar").circleProgress({
    value: localStorage.getItem('Cereal')
  });


  }