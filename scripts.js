var CCTVbox = document.getElementById("CCTV_Installations");
var maincont = document.getElementById("maincont");
var CTVboxCol = document.getElementsByClassName("CCTVboxCol");
var colforcctv = document.getElementById("colforcctv")
var servBox = document.getElementById("services")
var backnu = 2; 


/*Function to swap image background after few seconds*/

function backimgset(){
    if(backnu == 1){
        servBox.style.background="url(images/AlarmSystem.PNG)";
        servBox.style.backgroundSize="cover";
        servBox.style.backgroundPosition= "center";
        servBox.style.backgroundRepeat= "no-repeat";
        
        backnu++;
    }else{
        if(backnu == 2){
        
 servBox.style.background="url(images/ClearViewFencing.jpg)";
            servBox.style.backgroundSize="cover";
        servBox.style.backgroundPosition= "center";
        servBox.style.backgroundRepeat= "no-repeat";
        backnu++;


    }else{
        if(backnu == 3){
            servBox.style.background="url(images/concrete-2562781_1280.jpg)";
            servBox.style.backgroundSize="cover";
        servBox.style.backgroundPosition= "center";
        servBox.style.backgroundRepeat= "no-repeat";
            backnu++;
        }else{
            if(backnu == 4){
            servBox.style.background="url(images/electricFencing.jpg)";
                servBox.style.backgroundSize="cover";
        servBox.style.backgroundPosition= "center";
        servBox.style.backgroundRepeat= "no-repeat";
            backnu++;
                
            }else{
                if(backnu == 5 ){
            servBox.style.background="url(images/SOLAR.jpg)";
                    servBox.style.backgroundSize="cover";
        servBox.style.backgroundPosition= "center";
        servBox.style.backgroundRepeat= "no-repeat";
            backnu = 1;
                    
                }
            }
        }
        
    }
    
}}
window.onload=function(){
    setInterval(backimgset, 5000)
};
/*end of major function*/


servBox.style.background="url(images/AlarmSystem.PNG)"
servBox.style.backgroundSize="cover";



/*ifelse stat*/