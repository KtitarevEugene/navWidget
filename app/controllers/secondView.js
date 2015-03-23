var args = arguments[0] || {};

function showThird (e) {
	args.pager.openPage("Third", Alloy.createController('thirdView', {pager: args.pager}).getView());
}
