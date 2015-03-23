var args = arguments[0] || {};


function onEdit (e) {
	alert("Control button on second view");
};

function showThird (e) {
	args.pager.openPage("Third", Alloy.createController('thirdView', {pager: args.pager}).getView());
}
