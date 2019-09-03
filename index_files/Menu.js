$(document).ready(function()
{
	$('.applynowshow').css('opacity','0');
	$('#Resourcespage').css('display','none');
	$('#LifeDYPEFpage').css('display','none');
	
	$(window).scroll(function()
	{
		if($(window).width() >= 768)
		{
			if ($(document).scrollTop() > 80)
			{
				$('#topheader').addClass('shrink');
				$('.applynowshow').css('opacity','1');
			}
			else
			{
				$('#topheader').removeClass('shrink');
				$('.applynowshow').css('opacity','0');
			}
		}
		else{
			$('.applynowshow').css('opacity','1');
		}
		
		
		if($(window).width() >= 768)
		{
			if ($(document).scrollTop() > 80)
			{
				if($('body').hasClass('Rpage'))
				{
					$('#Resourcespage').css('display','block');
				}
				else{
					$('#Resourcespage').css('display','none');
				}
				
				if($('body').hasClass('Lpage'))
				{
					$('#LifeDYPEFpage').css('display','block');
				}
				else{
					$('#LifeDYPEFpage').css('display','none');
				}
			}
			else{
				$('#Resourcespage').css('display','none');
				$('#LifeDYPEFpage').css('display','none');
			}
		}
		else
		{
			$('#Resourcespage').css('display','none');
			$('#LifeDYPEFpage').css('display','none');
		}
	});

	
	/* affix the navbar after scroll below header */
	$('#fixednavbar').affix({
	      offset: {
	        top: ($('#headerheight').height() + $('#admapplyheight').height()+60) - $('#fixednavbar').height()
	      }
	});	
			
	/* Number animation INDEX PAGE */
	$(window).scroll( function()
	{
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
		$('#startanimation').each( function(i)
		{
			var bottom_of_object = $('.facts').offset().top + $('.facts').outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			if( bottom_of_window > bottom_of_object )
			{
				$('#lines-31').animateNumber({ number: 31, numberStep: comma_separator_number_step },2000);
				$('#lines-4').animateNumber({ number: 4 , numberStep: comma_separator_number_step},2000);
				$('#lines-200000').animateNumber({ number: 200000, numberStep: comma_separator_number_step},2000);
				$('#lines-500000').animateNumber({ number: 500000, numberStep: comma_separator_number_step },2000);
				$('#lines-200').animateNumber({ number: 200, numberStep: comma_separator_number_step},2000);
				$('#lines-1000').animateNumber({ number: 1000, numberStep: comma_separator_number_step },2000);
				
				$('#formfade').addClass('fadeInRight');  
			}
		});
	});
	


	
	$(window).load(function()
	{
		$('.applynowshow').css('opacity','0');
	});

	$(window).resize(function()
	{
		
	});

	
	$("#Our-Team1").click(function(){
	    var pos = $("#Our-Team");
	     $('html,body').animate({scrollTop: pos.offset().top-90}, 1500);
	    return false;
    })
    $("#Our-Library1").click(function(){
	    var pos = $("#Our-Library");
	     $('html,body').animate({scrollTop: pos.offset().top-90}, 1500);
	    return false;
    })
    $("#Our-Labs1").click(function(){
	    var pos = $("#Our-Labs");
	     $('html,body').animate({scrollTop: pos.offset().top-90}, 1500);
	    return false;
    })
    $("#our-computer-labs1").click(function(){
	    var pos = $("#our-computer-labs");
	     $('html,body').animate({scrollTop: pos.offset().top-90}, 1500);
	    return false;
    })
     $("#WiFi-Campus1").click(function(){
	    var pos = $("#WiFi-Campus");
	     $('html,body').animate({scrollTop: pos.offset().top-90}, 1500);
	    return false;
    })
     $("#Canteen1").click(function(){
	    var pos = $("#Canteen");
	     $('html,body').animate({scrollTop: pos.offset().top-90}, 1500);
	    return false;
    })
    $("#Hostels1").click(function(){
	    var pos = $("#Hostels");
	     $('html,body').animate({scrollTop: pos.offset().top-90}, 1500);
	    return false;
    })
    
    
    
    $("#Students1").click(function(){
	    var pos = $("#Students");
	     $('html,body').animate({scrollTop: pos.offset().top-100}, 1500);
	    return false;
    })
    $("#Industrial-Visit1").click(function(){
	    var pos = $("#Industrial-Visit");
	     $('html,body').animate({scrollTop: pos.offset().top-100}, 1500);
	    return false;
    })
    $("#Events1").click(function(){
	    var pos = $("#Events");
	     $('html,body').animate({scrollTop: pos.offset().top-100}, 1500);
	    return false;
    })
    $("#Gallery1").click(function(){
	    var pos = $("#Gallery");
	     $('html,body').animate({scrollTop: pos.offset().top-100}, 1500);
	    return false;
    })

	
	var originalLeave = $.fn.popover.Constructor.prototype.leave;
		$.fn.popover.Constructor.prototype.leave = function(obj){
		  	var self = obj instanceof this.constructor ?
		    obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
		  	var container, timeout;

		  	originalLeave.call(this, obj);

		  	if(obj.currentTarget) {
		    	container = $(obj.currentTarget).siblings('.popover')
		    	timeout = self.timeout;
		    	container.one('mouseenter', function(){
		      		//We entered the actual popover – call off the dogs
		      		clearTimeout(timeout);
		      		//Let's monitor popover content instead
		      		container.one('mouseleave', function(){
		        		$.fn.popover.Constructor.prototype.leave.call(self, self);
		      		});
		    	})
		  	}
		};
		$('body').popover({ selector: '[data-popover]', trigger: 'click hover', placement: 'auto', delay: {show: 50, hide: 400}});	

});



/*var $t = $('#divToSlide');

if ($t.is(':visible')) {
$t.slideUp();
// Other stuff to do on slideUp
} else {
$t.slideDown();
// Other stuff to down on slideDown
}*/