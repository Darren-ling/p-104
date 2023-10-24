Webcam.set({
    height :300,
    width :300,
    image_format :'png',
    png_quality : 90
});
Webcam.attach("#div1")

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("div2").innerHTML = '<img id="take_image" src="'+data_uri+'">'
    })
}   
 