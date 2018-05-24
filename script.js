$(document).ready(function(){
	var institute, enroll, dob, password;
	chrome.storage.sync.get(function(data) {
        	institute = data.institute;
        	enroll = data.enroll;
        	dob = data.dob;
        	password = data.password;
			$("select[name='InstCode']").children("option[value='J128']").prop('selected',true);
			$("#MemberCode").val(enroll);
			$("#DATE1").val(dob);
			$("#Password101117").val(password);
			var str = $("font[face='casteller']").text();
			$("#txtcap").val(str);
        });
});