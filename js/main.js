
// for ie

navigator.sayswho= (function(){
    var ua=  navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    M= M[2]? [M[1], M[2]]:[navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    return M.join(' ');
})();


/*if(navigator.sayswho == 'IE 11.0') {
    document.querySelector('body').className += 'ie11';
    alert("this IE");
}*/



//media

$(window).resize(function(){
	
	if($(window).width() <= 900) {
		$('.whatYouGet ').removeClass('col-4');
		$('.form').removeClass('col-6');
	}
	else {
		$('.whatYouGet ').addClass('col-4');
		$('.form').addClass('col-6');
	}

	if($(window).width() <= 770) {
		$('.subscribe > div').removeClass('container');
		$('.subscribe > div').css('margin' , 'auto');
	}
	else {
		$('.subscribe > div').addClass('container');
		$('.subscribe__main').css('margin' , 'unset');
	}
})

if($(window).width() <= 770) {
		$('.subscribe > div').removeClass('container');
	}
	else {
		$('.subscribe > div').addClass('container')
	}

if($(window).width() <= 900) {
	$('.whatYouGet ').removeClass('col-4');
	$('.form').removeClass('col-6');
}
	else {
		$('.whatYouGet ').addClass('col-4');
		$('.form').addClass('col-6');
	}	


