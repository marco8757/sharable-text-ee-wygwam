

var sharableURL = window.location.href;

$(".sharable-text").each(function(){
	$(this).append('<a class="sharable-text__facebook" href="https://www.facebook.com/sharer/sharer.php?u=' + sharableURL + '" target="_blank">Share this</a> <a class="sharable-text__twitter" href="https://twitter.com/intent/tweet?text=' + $(this).data('sharable-text') + '" target="_blank">Tweet this</a>');
	
    console.log($(this).data('sharable-text'));
});


// using fb share dialog to get full customizable quotes
//  $(this).append('<a class="sharable-text__facebook" data-sharable-text="' + $(this).data('sharable-text') + '">Share this</a> <a class="sharable-text__twitter" href="https://twitter.com/intent/tweet?text=' + $(this).data('sharable-text') + '" target="_blank">Tweet this</a>');
// 

// if ( $('.sharable-text').length > 0 ) {

// (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
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


//  issue with fb app id 
//  https://stackoverflow.com/questions/20956229/has-facebook-sharer-php-changed-to-no-longer-accept-detailed-parameters

  