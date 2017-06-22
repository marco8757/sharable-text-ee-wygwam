CKEDITOR.plugins.add( 'sharable-text', {
    
    init: function( editor ) {
        // Plugin logic goes here...
        var pluginName = 'sharable-text';
        	      
        editor.addCommand('sharable-text', {
				    exec: function(edt) {

				        var originalHTML = edt.getSelectedHtml(true);
				        var stripHTML = encodeURI(originalHTML.replace(/(<([^>]+)>)/ig,""));

				        edt.insertHtml("<a class='sharable-text' href='https://twitter.com/intent/tweet?text=" + stripHTML + "' target='_blank'>" + originalHTML + "</a>");

				    }
				});

        editor.ui.addButton('Sharable Text', {
						label: "Share this",
				    command: 'sharable-text',
				    // toolbar: 'insert',
				    icon: this.path + 'twitter.png'
				});

    }
});