$(document).ready(function(){
    $(".col-md-4").click(function(){
        $(this).siblings.hide();
    })
    $(".picture").click(function(){
        $(this).slideDown();
        $(this).siblings(".define").show();
    })
})

$(document).ready(function(){
  $("#port1").mouseover(function(){
    $("#display1").show();
  }).mouseout(function(){
    $("#display1").hide();
  });
});
$(document).ready(function(){
  $("#port2").mouseover(function(){
    $("#display2").show();
  }).mouseout(function(){
    $("#display2").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#display3").show();
  }).mouseout(function(){
    $("#display3").hide();
  });
});
$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#display4").show();
  }).mouseout(function(){
    $("#display4").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#display5").show();
  }).mouseout(function(){
    $("#display5").hide();
  });
  $("#work6").mouseover(function(){
    $("#display6").show();
  }).mouseout(function(){
    $("#display6").hide();
  });
  $("#work7").mouseover(function(){
    $("#display7").show();
  }).mouseout(function(){
    $("#display7").hide();
  });
  $("#work8").mouseover(function(){
    $("#display8").show();
  }).mouseout(function(){
    $("#display8").hide();
  });
});