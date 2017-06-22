CKEDITOR.plugins.add( 'tweetable-text', {
    
    init: function( editor ) {
        // Plugin logic goes here...
        var pluginName = 'tweetable-text';
        	      
        editor.addCommand('tweetable-text', {
				    exec: function(edt) {

				        var originalHTML = edt.getSelectedHtml(true);
				        var stripHTML = encodeURI(originalHTML.replace(/(<([^>]+)>)/ig,""));

				        edt.insertHtml("<a class='tweetable-text' href='https://twitter.com/intent/tweet?text=" + stripHTML + "' target='_blank'>" + originalHTML + "</a>");

				    }
				});

        editor.ui.addButton('TweetableText', {
				    label: "Tweet this",
				    command: 'tweetable-text',
				    // toolbar: 'insert',
				    icon: this.path + 'twitter.png'
				});

    }
});