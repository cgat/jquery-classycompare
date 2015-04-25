/*!
 * jQuery ClassyCompare
 * http://www.class.pm/projects/jquery/classycompare
 *
 * Written by Marius Stanciu - Sergiu <marius@picozu.com>
 * Licensed under the GPL Version 3 license.
 * Version 1.1.1
 *
 * Additional functionality by M.E. Sanseverino
 * Mar 11 2015
 * added horizonal and rectangular wipes
 */
(function ($) {
    $.fn.extend({
        ClassyCompare: function (b) {
            var c = {
                defaultgap: "half",
                leftgap: 0,
                rightgap: 0,
                caption: true,
                reveal: .5,
                vertical: false,
                horizontal: false,
                rectangular: false
            };
            var b = $.extend(c, b);
            return this.each(function () {
                var c = b, h = $(this).children("img:eq(0)").width(), i = $(this).children("img:eq(0)").height();
                $(this).css("height",i);
                $(this).css("width",h);
                $(this).children("img").hide();
                $(this).css({
                    overflow: "hidden",
                    position: "relative"
                });
                $(this).append('<div class="uc-mask"></div>');
                $(this).append('<div class="uc-bg"></div>');
                $(this).append('<div class="uc-caption">' + $(this).children("img:eq(0)").attr("alt") + "</div>");
                $(this).children(".uc-mask, .uc-bg").width(h);
                $(this).children(".uc-mask, .uc-bg").height(i);
                if(c.horizontal){
                    c.defaultgap = i/2;
                    $(this).children(".uc-mask").animate({height: c.defaultgap}, "fast"); //changed from 1e3 to fast for the animation.
                    $(this).children(".uc-mask").css("backgroundImage", "url(" + $(this).children("img:eq(0)").attr("src") + ")");
					$(this).children(".uc-bg").css("backgroundImage", "url(" + $(this).children("img:eq(1)").attr("src") + ")");
					    if (c.caption) {
					       $(this).children(".uc-caption").show();
					       }
                }
                else {
                    c.defaultgap = h/2;
                    $(this).children(".uc-mask").animate({width: c.defaultgap}, "fast"); //changed from 1e3 to fast for the animation.
                    $(this).children(".uc-mask").css("backgroundImage", "url(" + $(this).children("img:eq(0)").attr("src") + ")");
                    $(this).children(".uc-bg").css("backgroundImage", "url(" + $(this).children("img:eq(1)").attr("src") + ")");
                        if (c.caption) {
                       $(this).children(".uc-caption").show();
				   }
                }
            }).mousemove(function (c) {
                var d = b;
                if(d.horizontal)
                {
                	var pos_img = $(this).position()["top"];
                	var new_height = c.pageY - pos_img;
                	var img_height = $(this).height();
                	var img_cap_one = $(this).children("img:eq(0)").attr("alt");
               		var img_cap_two = $(this).children("img:eq(1)").attr("alt");
                	if (new_height > d.leftgap && new_height < img_height - d.rightgap)
                	{
                    	$(this).children(".uc-mask").height(new_height)
                	}
                	if (new_height < img_height * d.reveal)
                	{
                    	$(this).children(".uc-caption").html(img_cap_two)
                	}
                	else
                	{
                    	$(this).children(".uc-caption").html(img_cap_one)
                	}
            	}
                if (d.vertical)
                {
                var pos_img = $(this).position()["left"];
                var new_width = c.pageX - pos_img;
                var img_width = $(this).width();
                var img_cap_one = $(this).children("img:eq(0)").attr("alt");
                var img_cap_two = $(this).children("img:eq(1)").attr("alt");
                if (new_width > d.leftgap && new_width < img_width - d.rightgap) {
                    $(this).children(".uc-mask").width(new_width)
                }
                if (new_width < img_width * d.reveal) {
                    $(this).children(".uc-caption").html(img_cap_two)
                }
                else {
                    $(this).children(".uc-caption").html(img_cap_one)
                }
            	}
                if (d.rectangular)
                {
                var pos_img = $(this).position()["left"];
                var new_width = c.pageX - pos_img;  // setting the x value
                //var new_width = c.pageX
                var img_width = $(this).width();
                var pos_img = $(this).position()["top"];
                var new_height = c.pageY - pos_img;  // setting the y value
                //var new_height = c.pageY;
                var img_height = $(this).height();
                var img_cap_one = $(this).children("img:eq(0)").attr("alt");
                var img_cap_two = $(this).children("img:eq(1)").attr("alt");
                if (new_width > d.leftgap && new_width < img_width - d.rightgap) {
                    $(this).children(".uc-mask").width(new_width)
                    $(this).children(".uc-mask").height(new_height)
                }
                if (new_width < img_width * d.reveal) {
                    $(this).children(".uc-caption").html(img_cap_two)
                }
                else {
                    $(this).children(".uc-caption").html(img_cap_one)
                }
            	}
            })
        }
    })
})(jQuery)
