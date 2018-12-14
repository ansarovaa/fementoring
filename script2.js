let script = document.createElement('script');

script.type = 'text/javascript';

script.src = 'http://code.jquery.com/jquery-1.8.3.js';

document.head.appendChild(script);

var $window = $(window);
var $videoWrap = $('.blog-video');
var $video = $('.video');
var videoHeight = $video.outerHeight();

$window.on('scroll', function () {
    var windowScrollTop = $window.scrollTop();
    var videoBottom = videoHeight + $videoWrap.offset().top;

    if (windowScrollTop > videoBottom) {
        $videoWrap.height(videoHeight);
        $video.addClass('stuck');
    } else {
        $videoWrap.height('auto');
        $video.removeClass('stuck');
    }
});