var backButtonHandler = function(e) {
	var hidingView = stack[stack.length - 1];
	var openingView = stack[stack.length - 2];
	
	var openingViewMatrix = Ti.UI.create2DMatrix();
	openingViewMatrix = openingViewMatrix.scale(1, 1);
	
	var hidingViewMatrix = Ti.UI.create2DMatrix();
	hidingViewMatrix = hidingViewMatrix.translate(400, 0);
	
	var openAnimation = Ti.UI.createAnimation({
		transform: openingViewMatrix,
		duration: 300
	});
	
	openAnimation.addEventListener("complete", function() {
		titles.pop();
		$.currentWindowTitle.text = titles[titles.length - 1];
	});
	
	var hideAnimation = Ti.UI.createAnimation({
		transform: hidingViewMatrix,
		duration: 300
	});
	
	hideAnimation.addEventListener("complete", function() {
		stack.pop();
		$.content.remove(hidingView);
		if(stack.length < 2)
			$.icon.visible = false;
	});
	
	openingView.show();
	openingView.animate(openAnimation);
	hidingView.animate(hideAnimation);
};

var stack = [];
var titles = [];

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
		titles.push(title);
		view.setLeft(leftPos);
		view.setRight(rightPos);
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
	
	var leftPos = view.getLeft();
	var rightPos = view.getRight();
	
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
	titles.push(title);
	$.content.add(view);
};
