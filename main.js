img = "";
status = "";
object = [];

function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded !!!");
    status = true;
    objectDetection.detect(img , gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    } else {
        console.log(results);
        object = results;
    }

}

function draw(){
    image(img, 0, 0, 640, 420);

    if (status != "")
    {
        for(i = 0; i < object.length; i++);
        document.getElementById(status).innerHTML = "Status = Object Detected";
        fill("#000000");
        percent = floor(object[i].confidence * 100);
        
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#000000");
        rect(objects[i].x, objects[i].y , objects[i].width, objects[i].height);
    }





    stroke("red");
    noFill();
   /*
    rect(100,50,200,350);
    fill("white");
    text("DOG", 115 , 75 );

    noFill();
    rect(305,50,300,350);
    fill("white");
    text("CAT", 325,75);
    
    noFill();
    rect(275,310,120,100);
    fill("blue");
    stroke("black");
    text("BOWL" , 290, 330);
    
*/}

