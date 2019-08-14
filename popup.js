function sendEmail() {
    var emailUrl = "mailto:blah@blah.com";
    chrome.tabs.create({
        url: emailUrl
    }, function(tab) {
        setTimeout(function() {
            chrome.tabs.remove(tab.id);
        }, 500);
    });
}

$(document).ready(function() {
    chrome.storage.sync.get(function(user) {
        $('#userRollNumber').text(user.enroll);
    });

    $("#sendEmail").click(function() {
        sendEmail();
    })
});