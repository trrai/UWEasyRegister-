/**
 * Created by tejveerrai on 11/14/16.
 */

/*
TO DO
Set timeout to desired delay
Make sure it stops as soon as class is added

 */
(function() {

    "use strict";

    window.onload = function() {
        document.getElementById("register").onclick = register;
        document.getElementById("stop").onclick =
            chrome.storage.sync.set({'ableToClick': false});
    };

    function register(){
        var code = document.getElementById("sku").value;
        var section1 = document.getElementById("section1").value;
        var section2 = document.getElementById("section2").value;
        var section3 = document.getElementById("section3").value;
        var section4 = document.getElementById("section4").value;
        var section5 = document.getElementById("section5").value;
        var section6 = document.getElementById("section6").value;
        var section7 = document.getElementById("section7").value;

        var delay = document.getElementById("delay").value;
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        chrome.storage.sync.set({'sku': code});
        chrome.storage.sync.set({'section1': section1});
        chrome.storage.sync.set({'section2': section2});
        chrome.storage.sync.set({'section3': section3});
        chrome.storage.sync.set({'section4': section4});
        chrome.storage.sync.set({'section5': section5});
        chrome.storage.sync.set({'section6': section6});
        chrome.storage.sync.set({'section7': section7});
        chrome.storage.sync.set({'ableToClick': true});
        chrome.storage.sync.set({'delay': delay});
        chrome.storage.sync.set({'user': user});
        chrome.storage.sync.set({'pass': pass});

        window.open("https://sdb.admin.uw.edu/timeschd/uwnetid/sln.asp?QTRYR=WIN+2017&SLN="+code);
        window.open("https://sdb.admin.uw.edu/timeschd/uwnetid/sln.asp?QTRYR=WIN+2017&SLN="+section1);
        window.open("https://sdb.admin.uw.edu/timeschd/uwnetid/sln.asp?QTRYR=WIN+2017&SLN="+section2);
        window.open("https://sdb.admin.uw.edu/timeschd/uwnetid/sln.asp?QTRYR=WIN+2017&SLN="+section3);
        window.open("https://sdb.admin.uw.edu/timeschd/uwnetid/sln.asp?QTRYR=WIN+2017&SLN="+section4);
        window.open("https://sdb.admin.uw.edu/timeschd/uwnetid/sln.asp?QTRYR=WIN+2017&SLN="+section5);
        window.open("https://sdb.admin.uw.edu/timeschd/uwnetid/sln.asp?QTRYR=WIN+2017&SLN="+section6);
        window.open("https://sdb.admin.uw.edu/timeschd/uwnetid/sln.asp?QTRYR=WIN+2017&SLN="+section7);

    }


}());