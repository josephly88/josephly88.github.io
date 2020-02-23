log = FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

document.getElementById("board").innerHTML = log;