function showCoords(event)
{
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X: " + x + ", Y: " + y;
    document.getElementById("msCoords").innerHTML = coords;
}
function showMsBtn(event)
{
    var buttonClicked;
    if(event.button == 0)
    {
        buttonClicked = "Left";
    }
    else if(event.button == 2)
    {
        buttonClicked = "Right";
    }
    document.getElementById("msCoords").innerHTML = "Button Clicked: " + buttonClicked;
}