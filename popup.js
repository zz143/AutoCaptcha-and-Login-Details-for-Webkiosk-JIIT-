$(document).ready(function(){
    $('#form').on('submit',function(){
    	var institute = $('#institute').val();
        var enroll = $('#enroll').val();
        var dob = $('#dob').val();
        var password = $('#password').val();
        chrome.storage.sync.set({'institute': institute, 'enroll': enroll, 'dob': dob, 'password': password}, function() {
        	alert('Record Successfully Saved!. Click "Saved Record" to see');
    	});
    });
    $("#btn").click(function(){
    	chrome.storage.sync.get(function(data) {
        	alert(data.institute+", "+data.enroll+", "+data.dob);
    	});
    });
});