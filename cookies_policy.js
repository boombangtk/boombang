var cookiesPolicyName = "cookie-policy-accepted";

addEvent(window, 'load', verifyCookiesPolicy);

function cookiesPolicyHide() {
	
	 setCookie(cookiesPolicyName, "1", 999999);
	 
	 if ($("#cookiesPolicy").length) {
		
		$("#cookiesPolicy").animate({
			height:'0px'}, 'slow', function() {
				
					$("#cookiesPolicy").css("display", "none");
				});
	}
}

function haveCookie(c_name) {
	
	var c_value = document.cookie,
	c_start = c_value.indexOf(" " + c_name + "="),
	ret = true;
	
	if (c_start == -1) {
		
		c_start = c_value.indexOf(c_name + "=");
		
		if (c_start == -1) {
			
			ret = false;
		}
	}
	
	return ret;
}

function showCookiesPolicyPopup() {
	
	if ($("#cookiesPolicy").length) {
		
		$("#cookiesPolicy").css("display", "block");
		$("#cookiesPolicy").css("height", "0px");
		$("#cookiesPolicy").animate({height:'105px'}, 'slow');
	}
}

function setCookie(c_name,value,exdays) {
	
	console.log("setCookie(" + c_name + ", " + value + ", " + exdays + ")");
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function verifyCookiesPolicy() {
	
	console.log("verifyCookiesPolicy");
	if (!haveCookie(cookiesPolicyName)) {
		
		showCookiesPolicyPopup();
	}
}
