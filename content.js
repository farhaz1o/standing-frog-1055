
    var indexValue=1;
    showImg(indexValue);
    function btm_slide(e){showImg(indexValue=e);}
    function side_slide(e){showImg(indexValue+=e);}
    function showImg(e){
        var i;
        const img= document.querySelectorAll(".sliderimg");
        const sliders= document.querySelectorAll(".btm-sliders span");
        if(e>img.length ){indexValue=1}
        if(e<1){indexValue=img.length }
        for(i=0;i<img.length;i++){
            img[i].style.display="none";
        }
        for(i=0;i<sliders.length;i++){
            sliders[i].style.backgroung="red";
        }
        img[indexValue-1].style.display="block";
        sliders[indexValue-1].style.backgroung="white"

    }
