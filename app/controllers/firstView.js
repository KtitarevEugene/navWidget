var args = arguments[0] || {};

function onAdd (e) {
	alert("Control button on first view");
}

function showNext (e) {
	args.pager.openPage("Second", Alloy.createController('secondView', {pager: args.pager}).getView());
}
