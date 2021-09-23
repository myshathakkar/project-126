leftWristx=0
rightWristx=0
leftWristy=0
rightWristy=0
ochintu1 = ""
aisa_sama_na_hota = ""
function preload() {
    ochintu1 = loadSound("music.mp3")
    aisa_sama_na_hota = loadSound("music2.mp3")
}
function setup() {
    canvas = createCanvas(600, 400)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet=ml5.poseNet(video,model_loaded)
    poseNet.on("pose", got_poses)
}
function draw() {
    image(video, 0, 0, 600, 500)
}
function model_loaded(){
    console.log("loaded")
}

function got_poses(results){
if(results.length>0){
    console.log(results)
    leftWristx=results[0].pose.leftWrist.x
    leftWristy=results[0].pose.leftWrist.y
    rightWristx=results[0].pose.rightWrist.x
    rightWristy=results[0].pose.rightWrist.y
    console.log(" left wrist X= "+leftWristx+" left wrist Y = "+leftWristy)
    console.log(" right wrist X= "+rightWristx+" right wrist Y = "+leftWristy)

}
}
