/**
 * Created by tejveerrai on 11/14/16.
 */


var shoeSize;
var section;
var ableToClick;
var delayTime;
var timer = null;

window.onload = function() {
    location.href = document.URL;

};

function getSettings(result) {
    shoeSize = result["sku"];
    ableToClick = result["ableToClick"];
    delayTime = result["delay"];
    section = result["section"];

    check();
}

chrome.storage.sync.get(getSettings);

function check(){

    var classData = document.querySelectorAll("tt");

    var space = parseInt(classData[11].innerHTML.replace(/ /g,""));

    var header = document.querySelector("h1");
    header.style.color = "red";

    header.innerHTML = "Checking for available space... Please wait (This page will refresh automatically.)";

    debugger;
    if(space>0){
        location.replace("https://sdb.admin.uw.edu/students/uwnetid/register.asp");
        setTimeout("register()",5000);
    } else {
        header.innerHTML = "Space Unavailable... Refreshing in " + delayTime + " seconds!";
        if(timer == null && ableToClick){
            timer = setInterval(location.reload.bind(location), (delayTime*1000));

        }
    }

}

/*
function register(){
    debugger;
    chrome.storage.sync.get(getSettings);
    window.open("https://sdb.admin.uw.edu/students/uwnetid/register.asp","_self");
    console.log("test");

    var sku = document.getElementsByName("sln5")[0];
    sku.value = shoeSize;

    var sku2 = document.getElementsByName("sln6")[0];
    sku2.value = section;

    var data = document.querySelectorAll("tt");

    console.log(shoeSize);

    for(var i=0; i<data.length; i++) {
        if (data[i].innerHTML.replace(" ","") === shoeSize
        || data[i].innerHTML.replace(" ","") === section) {
            console.log("This is already a registered class!");
            ableToClick = false;
        }
    }

    var register = document.querySelectorAll('input[type=submit]');


    if(ableToClick) {

        register[1].click();
        ableToClick = false;

    }

}
*/
