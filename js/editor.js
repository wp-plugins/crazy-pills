(function () {
	tinymce.create('tinymce.plugins.callouts', {
		createControl: function (n, cm) {
			switch(n) {
			case 'callouts':
				var mlb = cm.createListBox('callouts', {
					title: 'Callouts',
					onselect: function (v) {
						tinyMCE.activeEditor.focus();
						var sel_txt = tinyMCE.activeEditor.selection.getContent();
						if( '' == sel_txt ) sel_txt = "Message box contents...";
						tinyMCE.activeEditor.execCommand('mceInsertContent', false, '<div class="cp_' + v + '">' + sel_txt + '</div>');

					}
				});
				mlb.add( 'Alert', 'alert' );
				mlb.add( 'Error', 'error' );
				mlb.add( 'Info', 'info' );
				mlb.add( 'Success', 'success' );
				return mlb;
			}
			return null;
		}
	});

	tinymce.create('tinymce.plugins.highlights', {
		createControl: function (n, cm) {
			switch(n) {
			case 'highlights':
				var mlb = cm.createListBox('highlights', {
					title: 'Highlights',
					onselect: function (v) {
						tinyMCE.activeEditor.focus();
						var sel_txt = tinyMCE.activeEditor.selection.getContent();
						if( '' == sel_txt ) sel_txt = "Highlighted text...";
						tinyMCE.activeEditor.execCommand('mceInsertContent', false, '<span class="cp_highlight ' + v + '">' + sel_txt + '</span>');

					}
				});
				mlb.add( 'Yellow', 'yellow' );
				mlb.add( 'Brown', 'brown' );
				mlb.add( 'Black', 'black' );
				mlb.add( 'Blue', 'blue' );
				mlb.add( 'Green', 'green' );
				mlb.add( 'Silver', 'silver' );
				mlb.add( 'Magenta', 'magenta' );
				mlb.add( 'Natural', 'natural' );
				mlb.add( 'Orange', 'orange' );
				mlb.add( 'Purple', 'purple' );
				mlb.add( 'Red', 'red' );
				mlb.add( 'Teal', 'teal' );
				return mlb;
			}
			return null;
		}
	});

	tinymce.create('tinymce.plugins.buttons', {
		createControl: function (n, cm) {
			switch(n) {
			case 'buttons':
				var mlb = cm.createListBox('buttons', {
					title: 'Buttons',
					onselect: function (v) {
						tinyMCE.activeEditor.focus();
						var sel_txt = tinyMCE.activeEditor.selection.getContent();
						if( '' == sel_txt ) sel_txt = "Button";
						tinyMCE.activeEditor.execCommand('mceInsertContent', false, '<a href="#" class="cp_button ' + v + '">' + sel_txt + '</a>');

					}
				});
				mlb.add( 'Light Blue', 'light-blue' );
				mlb.add( 'Blue', 'blue' );
				mlb.add( 'Green', 'green' );
				mlb.add( 'Red', 'red' );
				mlb.add( 'Orange', 'orange' );
				mlb.add( 'Purple', 'purple' );
				mlb.add( 'Grey', 'grey' );
				mlb.add( 'Black', 'black' );
				return mlb;
			}
			return null;
		}
	});

	tinymce.create('tinymce.plugins.checks', {
		createControl: function (n, cm) {
			switch(n) {
			case 'checks':
				var mlb = cm.createListBox('checks', {
					title: 'Checks',
					onselect: function (v) {
						tinyMCE.activeEditor.focus();
						var sel_txt = tinyMCE.activeEditor.selection.getContent();
						if( '' == sel_txt ) sel_txt = "List item";
						tinyMCE.activeEditor.execCommand('mceInsertContent', false, '<ul class="cp_check ' + v + '"><li>' + sel_txt + '</li></ul>');

					}
				});
				mlb.add( 'Green', 'green' );
				mlb.add( 'Blue', 'blue' );
				mlb.add( 'Dark Blue', 'darkblue' );
				mlb.add( 'Gray', 'gray' );
				mlb.add( 'Orange', 'orange' );
				mlb.add( 'Pink', 'pink' );
				mlb.add( 'Purple', 'purple' );
				mlb.add( 'Red', 'red' );
				mlb.add( 'Black', 'black' );
				return mlb;
			}
			return null;
		}
	});

	tinymce.create('tinymce.plugins.bullets', {
		createControl: function (n, cm) {
			switch(n) {
			case 'bullets':
				var mlb = cm.createListBox('bullets', {
					title: 'Bullets',
					onselect: function (v) {
						tinyMCE.activeEditor.focus();
						var sel_txt = tinyMCE.activeEditor.selection.getContent();
						if( '' == sel_txt ) sel_txt = "List item";
						tinyMCE.activeEditor.execCommand('mceInsertContent', false, '<ul class="cp_bullet ' + v + '"><li>' + sel_txt + '</li></ul>');

					}
				});
				mlb.add( 'Green', 'green' );
				mlb.add( 'Blue', 'blue' );
				mlb.add( 'Orange', 'orange' );
				mlb.add( 'Pink', 'pink' );
				mlb.add( 'Purple', 'purple' );
				mlb.add( 'Yellow', 'yellow' );
				mlb.add( 'Red', 'red' );
				mlb.add( 'Black', 'black' );
				return mlb;
			}
			return null;
		}
	});

	tinymce.PluginManager.add( 'callouts', tinymce.plugins.callouts );
	tinymce.PluginManager.add( 'highlights', tinymce.plugins.highlights );
	tinymce.PluginManager.add( 'buttons', tinymce.plugins.buttons );
	tinymce.PluginManager.add( 'checks', tinymce.plugins.checks );
	tinymce.PluginManager.add( 'bullets', tinymce.plugins.bullets );
})();