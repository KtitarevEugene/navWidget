var args = arguments[0] || {};

var button = Ti.UI.createButton({
	title: "Save"
});

button.addEventListener("click", function(e) {
	alert("Control button on second view");
});

function showNext (e) {
	args.pager.openPage("Second", Alloy.createController('secondView', {pager: args.pager}).getView(), [button]);
}
