/**
 * Created by tejveerrai on 11/16/16.
 */

var user;
var pw;

function getSettings(result) {
    user = result["user"];
    pw = result["pass"];

    setTimeout(login,5000);

}

chrome.storage.sync.get(getSettings);


function login(){

    var passinput = document.getElementById("weblogin_password");
    passinput.value = pw;



    var inputs = document.querySelectorAll("input");

    for(var i=0;i<inputs.length;i++){
        if(inputs[i].getAttribute("name") === "submit"){
            inputs[i].click();
        }
    }

}