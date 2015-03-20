var backButtonHandler = null;

var stack = [];

function backButtonClick (e) {
	if(typeof(backButtonHandler) === "function")
		backButtonHandler(e);	
}

exports.onBackButtonClick = function(handler) {
	backButtonHandler = handler;
};

exports.openPage = function (view) {
	var hidingView = stack[stack.length - 1];
	var openingViewMatrix = Ti.UI.create2DMatrix();
	openingViewMatrix = openingViewMatrix.translate(-400, 0);
	openingViewMatrix = openingViewMatrix.scale(2, 2);
	
	var hidingViewMatrix = Ti.UI.create2DMatrix();
	hidingViewMatrix = hidingViewMatrix.scale(0.5, 0.5);
	
	var openAnimation = Ti.UI.createAnimation({
		transform: openingViewMatrix,
		duration: 500
	});
	openAnimation.addEventListener("complete", function(){
		stack.push(view);
	});
	
	var hideAnimation = Ti.UI.createAnimation({
		transform: hidingViewMatrix,
		duration: 500
	});
	hideAnimation.addEventListener("complete", function(){
		hidingView.hide();
	});
	
	var initialMatrix = Ti.UI.create2DMatrix();
	initialMatrix = initialMatrix.scale(0.5, 0.5);
	initialMatrix = initialMatrix.translate(400, 0);
	
	view.setTransform(initialMatrix);
	$.content.add(view);
	view.animate(openAnimation);
	
	hidingView.animate(hideAnimation);
};

exports.setFirstPage = function(view) {
	stack.push(view);
	$.content.add(view);
};
