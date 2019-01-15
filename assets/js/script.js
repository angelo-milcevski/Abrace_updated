 function slide(){
      var slider =  document.getElementsByClassName("slider");
      var slider_links =  document.getElementsByClassName("slider_links");

        
        slider[0].style="width:250px;"
        slider_links[0].style="display:block"

    }
    
    function close_slider(){
         var slider =  document.getElementsByClassName("slider");
         var slider_links =  document.getElementsByClassName("slider_links");
        
         slider[0].style="width:0px;"
         slider_links[0].style="display:none"
        


    }
    


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
      leftredchair.style = "display:block";
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
      rightredchair.style = "display:block";

      redchair.style = "display:none";
      blanket.style = "display:none";
      topfootswing.style = "display:none";
      leftredchair.style = "display:none";

    }