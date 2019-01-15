 function slide(){
      var slider =  document.getElementsByClassName("slider");
      var slider_links =  document.getElementsByClassName("slider_links");
             var arrow = document.getElementsByClassName("fa-angle-down");


        
        slider[0].style="width:300px";
        slider_links[0].style="display:inline-block";
       arrow[0].style="display:inline-block"


    }
    
    function close_slider(){
         var slider =  document.getElementsByClassName("slider");
         var slider_links =  document.getElementsByClassName("slider_links");
        var arrow = document.getElementsByClassName("fa-angle-down");
        
         slider[0].style="width:0px;";
         slider_links[0].style="display:none";
        arrow[0].style="display:none";
        


    }



function dropdown(){
        var content=document.getElementById("dropdown_content");

        content.style.display="none";

    
    
         if (content.style.display === "none") {
    content.style.display = "block";
  
  }else{
      content.style.display = "none";
  }
}

            //content.style = "display:block";

    
    
    
    

    


        /* chair - top, footswing-left, blanket-right */
    function redchair() {
      var redchair = document.getElementById("redchair");
      var blanket = document.getElementById("blanket");
      var footswing = document.getElementById("footswing");
        
      var chairtext = document.getElementsByClassName("description_text_chair");
      var blankettext = document.getElementsByClassName("description_text_blanket");
      var footswingtext = document.getElementsByClassName("description_text_footswing");

      var topfootswing = document.getElementById("topfootswing");
      var topblanket = document.getElementById("topblanket");
      var leftredchair = document.getElementById("leftredchair");
      var rightredchair = document.getElementById("rightredchair");



      redchair.style = "display:block";
      footswing.style = "display:block";
      blanket.style = "display:block";
        
      chairtext[0].style ="display:block";
        
      footswingtext[0].style ="display:none";
      blankettext[0].style ="display:none";
        
      topfootswing.style = "display:none";
      topblanket.style = "display:none";
      leftredchair.style = "display:none";
      rightredchair.style = "display:none";
    }

    /* footswing - top, chair-left, blanket-right */
    function footswing() {
      var redchair = document.getElementById("redchair");
      var blanket = document.getElementById("blanket");
      var footswing = document.getElementById("footswing");
      var chairtext = document.getElementsByClassName("description_text_chair");
      var blankettext = document.getElementsByClassName("description_text_blanket");
      var footswingtext = document.getElementsByClassName("description_text_footswing");

      var rightredchair = document.getElementById("rightredchair");
      var leftredchair = document.getElementById("leftredchair");
      var topfootswing = document.getElementById("topfootswing");
      var topblanket = document.getElementById("topblanket");

      topfootswing.style = "display:block";
      leftredchair.style = "display:block;cursor:pointer;";
      blanket.style = "display:block";
        
     footswingtext[0].style ="display:block";

        
      chairtext[0].style ="display:none";   
      blankettext[0].style ="display:none";
        
      redchair.style = "display:none";
      footswing.style = "display:none";
      topblanket.style = "display:none";
      rightredchair.style = "display:none";

    }


    /* blanket - top, footswing-left, chair - right */
    function blanket() {
      var redchair = document.getElementById("redchair");
      var blanket = document.getElementById("blanket");
      var footswing = document.getElementById("footswing");
        
      var chairtext = document.getElementsByClassName("description_text_chair");
      var blankettext = document.getElementsByClassName("description_text_blanket");
      var footswingtext = document.getElementsByClassName("description_text_footswing");


          footswingtext[0].style ="display:none";

        
      chairtext[0].style ="display:none";   
      blankettext[0].style ="display:block";
        
      var topfootswing = document.getElementById("topfootswing");
      var rightredchair = document.getElementById("rightredchair");
      var topblanket = document.getElementById("topblanket");
      var leftredchair = document.getElementById("leftredchair");



      topblanket.style = "display:block";
      footswing.style = "display:block";
      rightredchair.style = "display:block;cursor:pointer;";

      redchair.style = "display:none";
      blanket.style = "display:none";
      topfootswing.style = "display:none";
      leftredchair.style = "display:none";

    }



/* Full poncho-top, poncho-left, poncho pillow-right */


    function fullponcho(){
        
        var fullponcho = document.getElementById("fullponcho");
        var topponcho = document.getElementById("topponcho");
        var toppillow = document.getElementById("toppillow");
        
        var left_poncho = document.getElementById("left_poncho");
        var left_full_poncho = document.getElementById("left_full_poncho");
        
        var right_pillow = document.getElementById("rightpillow");
        var right_full_poncho = document.getElementById("right_full_poncho");
        
        fullponcho.style = "display:block";
        left_poncho.style = "display:block";
        right_pillow.style = "display:block";
        
        
        toppillow.style = "display:none";
       topponcho .style = "display:none";
        left_full_poncho.style = "display:none";
        right_full_poncho.style = "display:none";
        
        
    };




/* poncho-top, full poncho -left, poncho pillow-right */

    function poncho(){
        
       var fullponcho = document.getElementById("fullponcho");
        var topponcho = document.getElementById("topponcho");
        var toppillow = document.getElementById("toppillow");
        
        var left_poncho = document.getElementById("left_poncho");
        var left_full_poncho = document.getElementById("left_full_poncho");
        
        var right_pillow = document.getElementById("rightpillow");
        var right_full_poncho = document.getElementById("right_full_poncho");
        
        topponcho.style = "display:block";
        left_full_poncho.style = "display:block";
        right_pillow.style = "display:block";
        
        
        fullponcho.style = "display:none";
       toppillow .style = "display:none";
        right_full_poncho.style = "display:none";
        left_poncho.style ="display:none";

        
        
    };

/* poncho pillow-top, poncho - left, full poncho - right*/


function pillow(){
    
        var fullponcho = document.getElementById("fullponcho");
        var topponcho = document.getElementById("topponcho");
        var toppillow = document.getElementById("toppillow");
        
        var left_poncho = document.getElementById("left_poncho");
        var left_full_poncho = document.getElementById("left_full_poncho");
        
        var right_pillow = document.getElementById("rightpillow");
        var right_full_poncho = document.getElementById("right_full_poncho");
        
        toppillow.style = "display:block";
        left_poncho.style = "display:block";
        right_full_poncho.style = "display:block";
        
        
        fullponcho.style = "display:none";
       topponcho.style = "display:none";
        left_full_poncho.style = "display:none";
        right_pillow.style ="display:none";
    
    
}

