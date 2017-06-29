CKEDITOR.plugins.add( 'sharable-text', {
    
    init: function( editor ) {
        // Plugin logic goes here...
        var pluginName = 'sharable-text';
        	      
        editor.addCommand('sharable-text', {
				    exec: function(edt) {

				        var originalHTML = edt.getSelectedHtml(true);
				        // var stripHTML = encodeURI(originalHTML.replace(/(<([^>]+)>)/ig,""));
				        var stripHTML = originalHTML.replace(/(<([^>]+)>)/ig,"");

				        // edt.insertHtml("<sharable-text>" + originalHTML + "</sharable-text>");
				        var element = CKEDITOR.dom.element.createFromHtml( "<sharable-text>" + originalHTML + "</sharable-text>" );
								edt.insertElement( element );

				    }
				});

        editor.addContentsCss( this.path + 'styles/sharable-text.css' );

        editor.ui.addButton('SharableText', {
				    label: "Share this",
				    command: 'sharable-text',
				    // toolbar: 'insert',
				    icon: this.path + 'share.png'
				});

    }
});