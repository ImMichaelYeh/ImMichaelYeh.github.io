function calculate() {
    var distCenter = document.getElementById("distCenter").value
    var distCenterUnits = document.getElementById("distCenterUnits").value

    var distEyeToSight = document.getElementById("distEyeToSight").value
    var distEyeToSightUnits = document.getElementById("distEyeToSightUnits").value
    
    var distTarget = document.getElementById("distTarget").value
    var distTargetUnits = document.getElementById("distTargetUnits").value

    // Converting all units to mm
    if (distCenterUnits == "cm") {
        distCenter = distCenter * 10 // 10mm per centimeter
    }
    else if (distCenterUnits == "in") {
        distCenter = distCenter * 25.4 // 25.4mm per inch
    }

    if (distEyeToSightUnits == "cm") {
        distEyeToSight = distEyeToSight * 10 // 10mm per centimeter
    }
    else if (distEyeToSightUnits == "in") {
        distEyeToSight = distEyeToSight * 25.4 // 25.4mm per inch
    }

    if (distTargetUnits == "cm") {
        distTargetUnits = distTargetUnits * 10 // 10mm per centimeter
    }
    else if (distCenter == "in") {
        distCenter = distCenter * 25.4 // 25.4mm per inch
    }

}