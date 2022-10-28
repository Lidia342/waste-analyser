var value
  
  function getMilk() {
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/item/Milk",
      dataType: "json",
      success: function (response) {
        response = Object.values(response)
        value = response[0].map(d => d.weekly_waste)
        localStorage.setItem('Milk', value)
        console.log(value)   

      }
    });
  }
  function getBread() {
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/item/Bread",
      dataType: "json",
      success: function (response) {
        response = Object.values(response)
        value = response[0].map(d => d.weekly_waste)
        localStorage.setItem('Bread', value)
        console.log(value)   

      }
    });
  } function getSalad() {
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/item/Salad",
      dataType: "json",
      success: function (response) {
        response = Object.values(response)
        value = response[0].map(d => d.weekly_waste)
        localStorage.setItem('Salad', value)
        console.log(value)   

      }
    });
  } function getTomato() {
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/item/Tomato",
      dataType: "json",
      success: function (response) {
        response = Object.values(response)
        value = response[0].map(d => d.weekly_waste)
        localStorage.setItem('Tomato', value)
        console.log(value)   

      }
    });
  }
  requestM();
  async function requestM() {
   // let response1 = await fetch('http://localhost:3000/item/Milk');
   // var breadT = response1.results.map(d => d.weekly_waste);
   getMilk(); 
   getBread(); 
   getSalad(); 
   getTomato(); 

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

}


