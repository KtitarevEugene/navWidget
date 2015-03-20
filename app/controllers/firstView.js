var args = arguments[0] || {};

function showNext (e) {
	args.pager.openPage(Alloy.createController('secondView', {pager: args.pager}).getView());
}
