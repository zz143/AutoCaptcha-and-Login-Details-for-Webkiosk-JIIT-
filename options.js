$(document).ready(function() {
    chrome.storage.sync.get(function(user) {
        $("#institute").val(user.institute);
        $("#enroll").val(user.enroll);
        $("#dob").val(user.dob);
        $("#password").val(user.password);
    });

    $('#submit_button').on('click', function() {
        var institute = $('#institute').val();
        var enroll = $('#enroll').val();
        var dob = $('#dob').val();
        var password = $('#password').val();
        chrome.storage.sync.set({ 'institute': institute, 'enroll': enroll, 'dob': dob, 'password': password }, function() {
            var notifOptions = {
                type: "basic",
                iconUrl: "logo48.png",
                title: "Record Updated",
                message: "Record has been updated!"
            };

            chrome.notifications.create("updateRecord", notifOptions, function() {
                window.close();
                close();
            });
        });
    });
});

//