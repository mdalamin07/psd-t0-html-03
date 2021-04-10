/* Video Play Push Button Start  */
const my_video = document.getElementById("my_video");


function play(){
    if(my_video.paused){
        my_video.play();
    }else{
        my_video.pause();
    }
}

/* Video Play Push Button Ends  */