/**
 * Created by tejveerrai on 11/15/16.
 */

var mainCourse;
var section1;
var section2;
var section3;
var section4;
var section5;
var section6;
var section7;

var ableToClick;
var delayTime;

function getSettings(result) {
    mainCourse = result["sku"];
    ableToClick = result["ableToClick"];
    delayTime = result["delay"];
    section1 = result["section1"];
    section2 = result["section2"];
    section3 = result["section3"];
    section4 = result["section4"];
    section5 = result["section5"];
    section6 = result["section6"];
    section7 = result["section7"];
    setTimeout(register,5000);

}
chrome.storage.sync.get(getSettings);

function register() {

    if(ableToClick) {
        var table = document.querySelector("table.sps_table").rows.length;
        var classesTaken = table - 4;


        var sku = document.getElementsByName("sln" + (classesTaken + 1))[0];
        sku.value = mainCourse;


        var sku2 = document.getElementsByName("sln" + (classesTaken + 2))[0];
        sku2.value = section1;

        var sku3 = document.getElementsByName("sln" + (classesTaken + 2))[0];
        sku3.value = section2;

        var sku4 = document.getElementsByName("sln" + (classesTaken + 2))[0];
        sku4.value = section3;

        var sku5 = document.getElementsByName("sln" + (classesTaken + 2))[0];
        sku5.value = section4;

        var sku6 = document.getElementsByName("sln" + (classesTaken + 2))[0];
        sku6.value = section5;

        var sku7 = document.getElementsByName("sln" + (classesTaken + 2))[0];
        sku7.value = section6;

        var sku8 = document.getElementsByName("sln" + (classesTaken + 2))[0];
        sku8.value = section7;

        var data = document.querySelectorAll("tt");

        console.log(mainCourse);

        for (var i = 0; i < data.length; i++) {
            if (data[i].innerHTML.replace(" ", "") === mainCourse
                || data[i].innerHTML.replace(" ", "") === section) {
                console.log("This is already a registered class!");
                ableToClick = false;
            }
        }

        var register = document.querySelectorAll('input[type=submit]');


        if (ableToClick) {

            register[1].click();
            chrome.storage.sync.set({'ableToClick': false});

        }
    }
}