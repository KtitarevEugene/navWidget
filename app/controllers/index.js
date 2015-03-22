var button = Ti.UI.createButton({
	title: "Add",
	onClick: function(e){
		alert()
	}
});

$.widget.setFirstPage("First", Alloy.createController('firstView', {pager: $.widget}).getView());

$.mainWindow.open();

