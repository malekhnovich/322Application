/**
 * Created by maxrenet on 3/7/16.
 */
window.onload=function(){
    //Normalize the various prefixed versions
    //of getUserMedia

    navigator.getUserMedia=(navigator.getUserMedia||
                            navigator.webkitGetUserMedia||
                            navigator.mozGetUserMedia||
                            navigator.msgetUserMedia);

//check that the browser supports getUserMedia
//If it doesn't show an alert, otherwise continue
if(navigator.getUserMedia(
        //Constraints
        {
            video:true
        },
        //success Callback

    function(localMediaStream){

    },
        //Error Callback

    function (err){
        //log the error to the console
        console.log('The following error occured' +
            'when trying to use getUserMedia'+err);
    }
};
}else{
    alert('sorry, does not support getUserMedia');
}