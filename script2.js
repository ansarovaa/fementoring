let script = document.createElement('script');

script.type = 'text/javascript';

script.src = 'http://code.jquery.com/jquery-1.8.3.js';

document.head.appendChild(script);

var $window = $(window);
var $videoWrap = $('.personal-blog__video');
var $video = $('.personal-blog__video iframe');
var videoHeight = $video.outerHeight();

$window.on('scroll', function () {
    var windowScrollTop = $window.scrollTop();
    var videoBottom = videoHeight + $videoWrap.offset().top;

    if (windowScrollTop > videoBottom) {
        $videoWrap.height(videoHeight);
        $video.addClass('personal-blog__video_stuck');
    } else {
        $videoWrap.height('auto');
        $video.removeClass('personal-blog__video_stuck');
    }
});