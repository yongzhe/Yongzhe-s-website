var $visit_elements = $('.visitItem');
var $window = $(window);
var timer = 0;
var inWindow = new Array();
var my_time = void 0;
var dict = {
	"home" : 0,
	"about" : 0,
	"portfolio" : 0,
	"blog" : 0,
	"contact" : 0
};

var homeWidth = $('.homeMenu').css('width').slice(0, -2);
var homeHeight = $('.homeMenu').css('height').slice(0, -2);
var aboutWidth = $('.aboutMenu').css('width').slice(0, -2);
var aboutHeight = $('.aboutMenu').css('height').slice(0, -2);
var portfolioWidth = $('.portfolioMenu').css('width').slice(0, -2);
var portfolioHeight = $('.portfolioMenu').css('height').slice(0, -2);
var blogWidth = $('.blogMenu').css('width').slice(0, -2);
var blogHeight = $('.blogMenu').css('height').slice(0, -2);
var contactWidth = $('.contactMenu').css('width').slice(0, -2);
var contactHeight = $('.contactMenu').css('height').slice(0, -2);
var minSize = 18;
var maxValue = 0; 


function resize_items() {
	
	//iterate through list of valid elements and increment in dictionary
	for (var i = 0; i < inWindow.length; i++) {
		var id = inWindow[i];

		if (id == "contact") {
			dict["contact"] += 1;
			
			console.log("contact");
			console.log(dict["contact"]);
			
			if (dict["contact"] > maxValue) {
				maxValue = dict["contact"];
			}
			$('.contactMenu').css( 
				{ 
					'width': (dict["contact"] / maxValue) * (contactWidth - minSize) + minSize + 'px', 'height': (dict["contact"] / maxValue) * (contactHeight - minSize) + minSize + 'px'
    		}
			);			

		} else if (id == "about") {
			dict["about"] += 1;
			
			console.log("about");
			console.log(dict["about"]);
			
			if (dict["about"] > maxValue) {
				maxValue = dict["about"];
			}
			$('.aboutMenu').css( 
				{ 
					'width': (dict["about"] / maxValue) * (aboutWidth - minSize) + minSize + 'px', 'height': (dict["about"] / maxValue) * (aboutHeight - minSize) + minSize + 'px'
    		}
			);
		} else if (id == "home" ){
			dict["home"] += 1;
			
			console.log("home");
			console.log(dict["home"]);
			
			if (dict["home"] > maxValue) {
				maxValue = dict["home"];
			}
			$('.homeMenu').css( 
				{ 
					'width': (dict["home"] / maxValue) * (homeWidth - minSize) + minSize + 'px', 'height': (dict["home"] / maxValue) * (homeHeight - minSize) + minSize + 'px'
    		}
			);		
		}

		else if (id == "blog" ){
			dict["blog"] += 1;
			
			console.log("blog");
			console.log(dict["blog"]);
			
			if (dict["blog"] > maxValue) {
				maxValue = dict["blog"];
			}
			$('.blogMenu').css( 
				{ 
					'width': (dict["blog"] / maxValue) * (blogWidth - minSize) + minSize + 'px', 'height': (dict["blog"] / maxValue) * (blogHeight - minSize) + minSize + 'px'
    		}
			);		

		}

		else if (id == "portfolio" ){
			dict["portfolio"] += 1;
			
			console.log("portfolio");
			console.log(dict["portfolio"]);
			
			if (dict["portfolio"] > maxValue) {
				maxValue = dict["portfolio"];
			}
			$('.portfolioMenu').css( 
				{ 
					'width': (dict["portfolio"] / maxValue) * (portfolioWidth - minSize) + minSize + 'px', 'height': (dict["portfolio"] / maxValue) * (portfolioHeight - minSize) + minSize + 'px'
    		}
			);		
		}

	}
	
			$('.portfolioMenu').css( 
				{ 
					'width': (dict["portfolio"] / maxValue) * (portfolioWidth - minSize) + minSize + 'px', 'height': (dict["portfolio"] / maxValue) * (portfolioHeight - minSize) + minSize + 'px'
    		}
			);		
			$('.blogMenu').css( 
				{ 
					'width': (dict["blog"] / maxValue) * (blogWidth - minSize) + minSize + 'px', 'height': (dict["blog"] / maxValue) * (blogHeight - minSize) + minSize + 'px'
    		}
			);	
			$('.homeMenu').css( 
				{ 
					'width': (dict["home"] / maxValue) * (homeWidth - minSize) + minSize + 'px', 'height': (dict["home"] / maxValue) * (homeHeight - minSize) + minSize + 'px'
    		}
			);	
			$('.aboutMenu').css( 
				{ 
					'width': (dict["about"] / maxValue) * (aboutWidth - minSize) + minSize + 'px', 'height': (dict["about"] / maxValue) * (aboutHeight - minSize) + minSize + 'px'
    		}
			);	
			$('.contactMenu').css( 
				{ 
					'width': (dict["contact"] / maxValue) * (contactWidth - minSize) + minSize + 'px', 'height': (dict["contact"] / maxValue) * (contactHeight - minSize) + minSize + 'px'
    		}
			);	
	
	

}


//called at each scroll. Checks each element to see if it's inside the window
function menu_count() {

	//end any previous timer funcs
	clearTimeout(my_time);
	inWindow = new Array();

	var window_height = $window.height();
	var window_top = $window.scrollTop();
	var window_bottom = (window_top + window_height);
	var $menu_coder = $('#myHeader');
	var menu_height = $menu_coder.height();
	var $about_sec = $('#about');
	var about_top = $about_sec.offset().top;
	var about_height = $about_sec.outerHeight();
	var about_bottom = (about_top + about_height);

	$.each($visit_elements, function() {

		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top = $element.offset().top;
		var element_bottom = (element_top + element_height);

		//
		// //is the current container within viewport?
		if ($element[0].getAttribute("id") == "home") {
			if ((about_top < window_bottom) && (element_bottom > window_top )) {

				if ($.inArray($element[0].getAttribute("id"), inWindow) < 0) {
					inWindow.push($element[0].getAttribute("id"));

				}

			}
		} 

		else if ((element_top > window_top) && (element_bottom < window_bottom)) {

			var id = $element[0].getAttribute("id");

			if ($.inArray(id, inWindow) < 0) {

				if ((id == "aboutMe") || (id == "partDesigner") || (id == "partCoder") || (id == "technicalSkills")) {

					if (($.inArray("about", inWindow) < 0)) {
						inWindow.push("about");
					}

				}
				else if ((id == "zurich") || (id == "contacth")) {

					if (($.inArray("contact", inWindow) < 0)) {
						inWindow.push("contact");
					}

				}
				else{
					inWindow.push($element[0].getAttribute("id"));
				}

			}

		}

	});
	//if the list is not empty, call the timerfunc
	if (inWindow.length > 0) {

		my_time = setTimeout(resize_items, 2000);

	}

}

$window.scroll(menu_count);