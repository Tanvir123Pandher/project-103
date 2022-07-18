Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function take_image(){
    Webcam.snap(function(event){
        document.getElementById("result").innerHTML="<img id='captured_image'src='"+event+"'>";
    });
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/7PStbVjYI/model.json",modelloaded);
function modelloaded(){
    console.log("model loaded");
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    percentage=results[0].confidence.toFixed(3)*100;
    document.getElementById("object").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=percentage+" %";
}
}
