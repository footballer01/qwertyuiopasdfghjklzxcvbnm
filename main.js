mustacheX = 0;
mustacheY = 0;


function preload()
{
 mustache = loadImage('https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.freepnglogos.com%2Fpics%2Fmustache&psig=AOvVaw2yyAq-6GItzmLHUU1XbAqA&ust=1707112711909000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOii_syAkYQDFQAAAAAdAAAAABAE');
}

function setup()
{

    canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}


function modelLoaded()
{
    console.log('poseNet Is Initialized');
}

function gotPoses()
{
 if(results.length > 0)
 {
    console.log(results);
    mustacheX = results[0].pose.mustache.x
    mustacheY = results[0].pose.mustache.y
    console.log('mustache x = ' +  mustacheX);
    console.log('mustache y = ' +  mustacheY);

   
}
}


function draw()
{
 image(video,0,0,300,300);
 fill(255, 0, 0);
 stroke(255,0,0);
 circle(mustacheX, mustacheY, 20);   
}

function take_snapshot()
{
    save('myFilterImage.png');
}