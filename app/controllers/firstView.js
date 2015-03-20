var args = arguments[0] || {};

function showNext (e) {
	args.pager.openPage("Second", Alloy.createController('secondView', {pager: args.pager}).getView());
}
