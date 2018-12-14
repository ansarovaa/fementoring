let script = document.createElement('script');

script.type = 'text/javascript';

script.src = 'http://code.jquery.com/jquery-1.8.3.js';

document.head.appendChild(script);

$(document).ready(function () {
  size_li = $("#myList li").size();
  x = 3;
  $('#myList li:lt(' + x + ')').show();
  $('#loadMore').click(function () {
    x = (x + 3 <= size_li) ? x + 3 : size_li;
    $('#myList li:lt(' + x + ')').show();

    if (x == size_li) {
      $('#loadMore').hide();
    }
  });

});