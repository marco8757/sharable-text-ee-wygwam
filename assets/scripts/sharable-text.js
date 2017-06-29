

var sharableURL = window.location.href;
var facebookAppID = 'YOUR_APP_ID_HERE';

$(".sharable-text").each(function(){
	$(this).after('<a class="sharable-text__facebook" href="https://www.facebook.com/sharer/sharer.php?u=' + sharableURL + '" target="_blank">Share this</a> <a class="sharable-text__twitter" href="https://twitter.com/intent/tweet?text=' + $(this).text() + '&url=' + sharableURL + '" target="_blank">Tweet this</a>');
	
});


// Normal sharing
// $(".sharable-text").each(function(){
// 	$(this).after('<a class="sharable-text__facebook" href="https://www.facebook.com/sharer/sharer.php?u=' + sharableURL + '" target="_blank">Share this</a> <a class="sharable-text__twitter" href="https://twitter.com/intent/tweet?text=' + $(this).text() + '&url=' + sharableURL + '" target="_blank">Tweet this</a>');
// });


// Facebook dialog sharing with quotes
// $(".sharable-text").each(function(){
//  $(this).after(' <a class="sharable-text__facebook" data-sharable-text="' + $(this).text() + '"><i class="icon icon-facebook small"></i><span class="sharable-text__tooltip"> Share this quote</span></a> <a class="sharable-text__twitter" href="https://twitter.com/intent/tweet?text=' + $(this).text() + '&url=' + sharableURL + '" target="_blank"><i class="icon icon-twitter small"></i><span class="sharable-text__tooltip"> Share this quote</span></a>');
// });

// if ( $('.sharable-text').length > 0 ) {

// (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=" + facebookAppID;
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));


// }

// $('.sharable-text__facebook').on('click', function(){
// 	FB.ui({
//     method: 'share',
//     display: 'popup',
//     href: sharableURL,
// 		quote: $(this).data('sharable-text'),
//   }, function(response){});

// });

  