var backButtonHandler = null;

var stack = [];


function backButtonClick (e) {
	if(typeof(backButtonHandler) === "function")
		backButtonHandler(e);	
}

exports.onBackButtonClick = function(handler) {
	backButtonHandler = handler;
};

exports.openPage = function (title, view) {
	var hidingView = stack[stack.length - 1];

	var openingViewMatrix = Ti.UI.create2DMatrix();
	openingViewMatrix = openingViewMatrix.translate(-400, 0);
	
	var hidingViewMatrix = Ti.UI.create2DMatrix();
	hidingViewMatrix = hidingViewMatrix.scale(0.5, 0.5);
	
	var openAnimation = Ti.UI.createAnimation({
		transform: openingViewMatrix,
		duration: 300
	});
	openAnimation.addEventListener("complete", function() {
		stack.push(view);
		$.currentWindowTitle.text = title;
		$.icon.visible = true;
	});
	// openAnimation.addEventListener("start", function(){
	// });
	
	var hideAnimation = Ti.UI.createAnimation({
		transform: hidingViewMatrix,
		duration: 300
	});
	hideAnimation.addEventListener("complete", function() {
		hidingView.visible = false;
	});
	
	$.content.add(view);
	view.setLeft(200);
	view.setRight(-200);
	hidingView.animate(hideAnimation);
	view.animate(openAnimation);
};

exports.setFirstPage = function(title, view) {
	title = title || "";
	$.icon.visible = false;
	$.currentWindowTitle.text = title;
	stack.push(view);
	$.content.add(view);
};
