$(document).ready(function(){
  var buz=$('#alarm')[0];
 var ispause=true;
  var startBreak;
  var breaktym= parseInt($("#no2").html());
  
  var count= parseInt($("#no").html());

  //hide the reset button on load
  $("reset").hide();
  
$("#start").click(function(){
     var counter= setInterval(timer,1000);
  count*=60;
    breaktym*=60;

  function timer(){
    /*hide some of the variables*/
    $("#start,#minus1,#plus1,#plus2,#minus2,#no2,#break,#reset,#tymtype2").hide();
    $("#tymtype1").show();
    $("#tymtype1").html("Current Time Of Session Left");
    count-=1;
    if(count===0){
      buz.play();
      clearInterval(counter);
        $("#no").hide();$("#session").hide();
  $("#tymtype2").show();
       startBreak = setInterval(breakfun,1000);
    
    }
    else if(count>0&&count<=6000){
    if(count%60>=10)   $("#no").html(Math.floor(count/60)+":"+Math.floor(count%60));
  else{
   $("#no").html(Math.floor(count/60)+":0"+Math.floor(count%60));
  }
  } 
}
   
function breakfun(){
  breaktym-=1;
  
  $("#tymtype2").html("Left Over Break Time: ");
    $("#no2").show();
$("#break").show();
  $("#session,#tymtype1").hide(); 
  if(breaktym===0){
     $("#reset").show();
     $("#no2,#break,#tymtype2").hide();
     clearInterval(startBreak);
    buz.play();
   
   
   
  }else{
  if(breaktym>0&&breaktym<6000){
 if(breaktym%60>=10) {  $("#no2").html(Math.floor(breaktym/60)+":"+(breaktym%60));}
  else{
   $("#no2").html(Math.floor(breaktym/60)+":0"+(breaktym%60));}
}
}
}
});
 $("#reset").click(function(){
   count=25;
   breaktym=5;
   $("#no2").html(breaktym);
       $("#tymtype2").hide();

    $("#no").html(count);
   $("#reset").hide();
$("#start,#no2,#no,#break,#session,#minus1,#minus2,#plus1,#plus2").show();
 }); 
  
  $("#tymtype1,#tymtype2").hide();
  $("#minus1").click(function(){
    if(count>=1&& count<=100)
      count--;
     $("#no").html(count);
  });
  $("#plus1").click(function(){
    if(count>=0&&count<100)
    count++;
    $("#no").html(count);  
  });
  $("#minus2").click(function(){
    if(breaktym>=1&& breaktym<100)
    breaktym--;
    $("#no2").html(breaktym);
  });
  $("#plus2").click(function(){
    if(breaktym>=0&&breaktym<100)
  breaktym++;
    $("#no2").html(breaktym);  
  });
  
  
});
