// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let rocketPosX= 0;
    let rocketPosY = 0;

    let readyForTakeoff = document.getElementById("takeoff");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let flightStatus = document.getElementById("flightStatus");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let abortMission = document.getElementById("missionAbort");
    let trackableHeight = 0;
    let rocket = document.getElementById("rocket");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");


    readyForTakeoff.addEventListener("click", function (event) {
    let readyConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.")
   
    if (readyConfirm) {
    
    flightStatus.innerHTML = "Shuttle in flight";
    
    shuttleBackground.style.backgroundColor = "blue";
    
    trackableHeight += 10000;

    spaceShuttleHeight.innerHTML = trackableHeight;

    rocketPosY += 10;

    rocket.style.marginBottom = rocketPosY + 'px';
    }
});

landing.addEventListener("click", function(event) {
    window.alert("The shuttle is landing. Landing gear engaged.");

    flightStatus.innerHTML = "The shuttle has landed.";

    resetRocket();

});

abortMission.addEventListener("click", function(event) {
    let abortMissionConfirm = window.confirm("Confirm that you want to abort the mission.");

    if (abortMissionConfirm) {

        flightStatus.innerHTML = "Mission Aborted";

        resetRocket();

    }
});
// started following Carrie's studio review

document.addEventListener("click", function(event) {
    let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("width"));
    

    if (event.target.id === "left" && rocketPosX > -(bkgWidth / 2 - 40)) {
        rocketPosX -= 10;
        rocket.style.marginLeft = rocketPosX + 'px';
    }

    if (event.target.id === "right" && rocketPosX < (bkgWidth / 2 - 40) ){
        rocketPosX += 10;
        rocket.style.marginLeft = rocketPosX + 'px';
    }
    
    if (event.target.id === "up" && trackableHeight < 250000){
        rocketPosY += 10;
        rocket.style.marginBottom = rocketPosY + 'px';
        trackableHeight += 10000
        spaceShuttleHeight.innerHTML = trackableHeight;
    }
    
    if (event.target.id === "down" && trackableHeight > 0 ){
        rocketPosY -= 10;
        rocket.style.marginBottom = rocketPosY + 'px';
        trackableHeight -= 10000
        spaceShuttleHeight.innerHTML = trackableHeight;
    }
    
});
function resetRocket () {
    shuttleBackground.style.backgroundColor = "green";

    trackableHeight = 0

    spaceShuttleHeight.innerHTML = trackableHeight;

    rocketPosX = 0;

    rocketPosY = 0;

    rocket.style.marginLeft = rocketPosX + 'px'

    rocket.style.marginBottom = rocketPosY + 'px'
}


});