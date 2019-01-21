/*
 * Bootstrap Image Gallery JS Example 2.9
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true */
/*global window, document, $ */

var path='../album/photos/';
var thumbPath='../album/photos/s/';

$(function(){
	var documentTitle=document.title;
	
	var i=0;
	while(i<data.length){
		var title=data[i]['FileName'];
		var desc=data[i]['ExitInfo']['Description'] ? data[i]['FileName'] : '未命名';
		$('<a title="' + desc + '" id="_pic' + i + '"/>').append($('<img>').attr('data-src',thumbPath + title).attr('class','lazy')).attr({'href':path + title,'title':desc}).appendTo($('#gallery'));
		++i;
	}
	$('#gallery').find('a').each(function(i){
		$(this).fancybox({
			'titlePosition'  : 'inside',
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			onComplete:function(){						
				var s='<p style="position:absolute;left:0;bottom:-10px;font-size:11px;display:block; padding:2px;opacity:0.7;background:#000;color:#fff;">相机:' + data[i]['ExitInfo']['Camera'] +
			' 焦距:' + data[i]['ExitInfo']['Focal'] + 
			' 曝光时间:' + data[i]['ExitInfo']['Exposure'] + 
			' ISO:' + data[i]['ExitInfo']['ISO'] + 
			' 拍摄时间:' + data[i]['ExitInfo']['CaptureTime'] +
			'</p>';
				$('#fancybox-content').css('position','relative').append(s).find('p').width($('#fancybox-content').width()-4);
				$('#fancybox-title-inside').append(' <a style="float:right;color:#999;" href="map.html#_pic' + i + '" title="在地图中查看">View in map</a>');
				location.hash='_pic' + i;
				document.title = $(this).attr('title') + ' - ' + documentTitle;
			},
			onClosed:function(){
				//document.title=documentTitle;
			}
		});
	});
	var hash=location.hash;
	if(hash){
		$(hash).click();
	}
	var myLazyLoad = new LazyLoad({
		elements_selector: ".lazy"
	    });
});
