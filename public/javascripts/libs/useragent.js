/* class UserAgentParserle loop effects in javascript */
function UserAgentParser() {
	
	this.UAString = navigator.userAgent;
	
	/*method to get browser name*/
	var browser = function (){

	    var regexps = {
	 	   'Chromium' : [/Chromium\/(\S+)/] ,
            	   'Chrome': [ /Chrome\/(\S+)/ ],
            	   'WebOS': [ /hpwOS\/(\S+)/ ],
            	   'Firefox': [ /Firefox\/(\S+)/ ],
            	   'MSIE': [ /MSIE (\S+);/ ],
            	   'Opera': [
                	      /Opera\/.*?Version\/(\S+)/,     
                      	/Opera\/(\S+)/             
                     	],
            	   'Safari': [ /Version\/(\S+).*?Safari\// ]            
            },re, m, browser;

	    try {
		for (browser in regexps)
        		while (re = regexps[browser].shift())    /*shift fetches items from the array and remove that item*/
            			if (m = this.UAString.match(re))
                			return browser;          /*return browser name from matched set*/
   	 	return 'unknown';
	    }
	    catch(exception){
		    return 'unknown';
	    }
 	}

	/*method to get browser version*/
	var browserversion = function (){
		
	    var regexps = {

			'Browser_version' : [ /Chrome\/(\S+)/, /hpwOS\/(\S+)/, /Firefox\/(\S+)/, /MSIE (\S+);/, 
			/Opera\/.*?Version\/(\S+)/, /Opera\/(\S+)/, /Version\/(\S+).*?Safari\//] 

            },re, m, browser, version;

	    try{
        	while (re = regexps['Browser_version'].shift()){
            		if (m = this.UAString.match(re)) {
                		version = (m[1].match(new RegExp('[^.]+(?:\.[^.]+\.?[^.]*)')));
				return version.toString();     /*changing the object 'version' into a string type*/            		
            			}
		}
       	 	return 'unknown';
	    }
	    catch(exception){
		    return 'unknown';
	    }
	 }

	/*method to get device name*/
	var device = function (){
	    var regexps = {
		'Device' : [/iphone/i,/ipod/i,/ipad/i, /Nokia\w*/i, /Motorola/i, /Dell/,
	        	    /^treo$/i, /^pre$/i, /^pixi$/i, /hpwOS/i, /samsung/i, /sony\s?ericsson\w*/i, 
		           /^lg$/i, /htc[\s\d\.]+/i, /blackberry[\s\d\.]+/i, /nexus\sone/i, /Xoom/i, /^sie$/i] 
	    }, re, m, version, os, result;

	    try {
		while (re = regexps['Device'].shift()){
			if (m = this.UAString.match(re)){
				return m.toString();
			}
		}
		if ((this.UAString.indexOf('X11') != -1) || 
	   	(this.UAString.indexOf("Macintosh;") != -1) || 
	   	(this.UAString.indexOf("Windows NT") != -1))
			return 'PC';
	
		return 'unknown';
	    }
	    catch(exception){
		    return 'unknown';
		}
	}
	/*method to get operating system*/
	var operatingsystem = function (){
		var regexps = {

			'OperatingSystem' : [/SymbianOS/, /Android[\s\w\/\.]+/, /Linux/, 
					    /IRIX/, /FreeBSD/, /SunOS/, /Windows[\w\s\.\_]+/,
					    /Win9\d/, /[\w\s]+Mac OS[\w\s\.\_]+/]

		}, re, m, version, os, result, matched;
	    try {

		while (re = regexps['OperatingSystem'].shift()){
			if (m = this.UAString.match(re)){
				matched = m.toString();
				if (matched.indexOf("Windows") != -1){
					if (matched.indexOf("Phone") != -1)  /*identifying windows phone OS*/
							return m.toString();
					else{                                 /*identifying windows version like XP, vista etc*/
						version = matched.match(new RegExp('\\d+\\.\\d+'));
						switch(version.toString()){
							case '5.0':
								os = 'Windows 2000';
								break;
							case '5.1':
								os = 'Windows XP';
								break;
							case '5.2':
								os = 'Windows XP';
								break;
							case '6.0':
								os = 'Windows Vista';
								break;
							case '6.1':
								os = 'Windows 7';
								break;
							case '6.2':
								os = 'Windows 8';
								break;
							default:
								os = m.toString();
						}
						return os;
					}
				}
				else if (matched.indexOf("Mac") != -1){         /*if it is a mac OS*/
					//version = matched.match(new RegExp('[\\d\\_]+'));
					if ((matched.indexOf("iPhone") != -1) || matched.match(new RegExp('CPU[\\s\\w]+?like')))
						result = 'iPhone OS';
					else
						result = 'OS X';			

					return result;
				}
				else
					return m.toString();
			}
		}
		return 'unknown';
	    }
	    catch(exception){
		    return 'unknown';
	    }
	}

	/*method to get os version*/
	var osversion = function (){
	    var versionArray = [/[\w\s]+Mac OS[\w\s]+/, /Windows (NT|CE)[\w\s\.]+/, 
	        	            /Android[\w\s\.]+/,/iPhone[\w\s\.]+/], re, m, version;
	    try{		
		while (re = versionArray.shift()){
			if (m = this.UAString.match(re)){
				if (version = m.toString().match(new RegExp('[\\d\\.\\_]+')))
					version = (version.toString().replace(/\_/g, '.')).toString();
				else
					version = null;

				return version;
			}
		}
			return 'unknown';
	    }
	    catch(err){
		return 'unknown';
	    }
	}

	/*method to get layout engine*/
	var engine = function (){

	    var regexps = {
			'LayoutEngine' : [/AppleWebKit\/\d+\.\d+/,/Trident\/\d+\.\d+/,
		        /Gecko\/\d+/, /Presto\/[\d\.]+/]
	    }, re, m, version, os, result;

	    try {
	   	while (re = regexps['LayoutEngine'].shift()){

			if (m = this.UAString.match(re)){
				return m.toString();
			}
		}
		return 'unknown';
	    }
	    catch(exception){
		    return 'unknown';
	    }
	}
	/*method to check whether the device is mobile, tablet or pc device*/
	var devicetype = function() {

	try {
	    var isMobile = (/iphone|ipod|smartphone/i.test(this.UAString
		    .toLowerCase()));
	    var isTablet = (/ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i
		    .test(this.UAString.toLowerCase()));

	    if (isMobile)
		return 'mobile';
	    else if (isTablet)
		return 'tablet';
	    else if (device() == 'PC')
		return 'pc';
	    else
		return 'pc';
	} catch (exception) {
	    return 'pc';
	}
    };

					
	return ({
			'useragentstring':this.UAString,
			'device':device(),
                        'browser':browser(),
			'browserVersion':browserversion(),
                        'os':operatingsystem(),
			'osVersion':osversion(),
                        'browserEngine':engine(),
                        'deviceType':devicetype()
	});
                                    
}

