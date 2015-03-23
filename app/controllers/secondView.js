var args = arguments[0] || {};

var button1 = Ti.UI.createButton({
	title: "Edit",
});

button1.addEventListener("click", function(e){
	alert("Control1 button on third view");
});

var button2 = Ti.UI.createButton({
	title: "Del",
});

button2.addEventListener("click", function(e){
	alert("Control2 button on third view");
});

function showThird (e) {
	args.pager.openPage("Third", Alloy.createController('thirdView', {pager: args.pager}).getView(), [button1, button2]);
}
