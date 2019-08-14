$(document).ready(function() {
    var institute, enroll, dob, password;
    chrome.storage.sync.get(function(user) {
        institute = user.institute;
        enroll = user.enroll;
        dob = user.dob;
        password = user.password;
        $("select[name='InstCode']").children("option[value=" + institute + "]").prop('selected', true);
        $("#MemberCode").val(enroll);
        $("#DATE1").val(dob);
        $("#Password101117").val(password);
        var str = $("font[face='casteller']").text();
        $("#txtcap").val(str);

        /* var notifOptions = {
            type: "basic",
            iconUrl: "logo48.png",
            title: "Record Rendered",
            message: "Record has been Rendered!"
        };

        chrome.notifications.create("recordRendered", notifOptions, function() {
            alert("adfasdf");
        }); */

    });
});