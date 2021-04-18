$(document).ready(function(){
    $(".col-md-4").click(function(){
        $(this).siblings.hide();
    })
    $(".picture").click(function(){
        $(this).hide();
        $(this).siblings(".define").show();
    })

    $(".define").click(function(){
        $(this).hide();
        $(this).siblings(".picture").show();
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
  $("#port3").mouseover(function(){
    $("#display3").show();
  }).mouseout(function(){
    $("#display3").hide();
  });
});
$(document).ready(function(){
  $("#port4").mouseover(function(){
    $("#display4").show();
  }).mouseout(function(){
    $("#display4").hide();
  });
});

$(document).ready(function(){
  $("#port5").mouseover(function(){
    $("#display5").show();
  }).mouseout(function(){
    $("#display5").hide();
  });
  $("#port6").mouseover(function(){
    $("#display6").show();
  }).mouseout(function(){
    $("#display6").hide();
  });
  $("#port7").mouseover(function(){
    $("#display7").show();
  }).mouseout(function(){
    $("#display7").hide();
  });
  $("#port8").mouseover(function(){
    $("#display8").show();
  }).mouseout(function(){
    $("#display8").hide();
  });
});

$(document).ready(function(){
  $("form.row").submit(function(event){
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#textarea").val();
    if ($("input#name").val() && $("input#email").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});
