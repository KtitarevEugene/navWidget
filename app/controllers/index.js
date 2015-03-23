var button = Ti.UI.createButton({
	title: "Add",
	accessibilityHidden: "true"
});

button.addEventListener("click", function(e) {
	alert("Control button on first view");
});

$.widget.setFirstPage("First", Alloy.createController('firstView', {pager: $.widget}).getView(), [button]);

$.mainWindow.open();

