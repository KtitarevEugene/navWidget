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
	var previousWidth = view.borderWidth;
	var previousColor = view.borderColor;
	view.setBorderWidth(2);
	view.setBorderColor("#000");
	var hidingView = stack[stack.length - 1];

	var hidingViewBorderWidth = hidingView.borderWidth;
	var hidingViewBorderColor = hidingView.borderColor;

	hidingView.setBorderWidth(2);
	hidingView.setBorderColor("#000");

	var openingViewMatrix = Ti.UI.create2DMatrix();
	openingViewMatrix = openingViewMatrix.translate(-200, 0);
	openingViewMatrix = openingViewMatrix.scale(2, 2);
	
	var hidingViewMatrix = Ti.UI.create2DMatrix();
	hidingViewMatrix = hidingViewMatrix.translate(-400, 0);
	hidingViewMatrix = hidingViewMatrix.scale(0.5, 0.5);
	
	var openAnimation = Ti.UI.createAnimation({
		transform: openingViewMatrix,
		duration: 300
	});
	openAnimation.addEventListener("complete", function() {
		stack.push(view);
		view.setBorderWidth(previousWidth);
		view.setBorderColor(previousColor);
	});
	// openAnimation.addEventListener("start", function(){
	// });
	
	var hideAnimation = Ti.UI.createAnimation({
		transform: hidingViewMatrix,
		duration: 300
	});
	hideAnimation.addEventListener("complete", function() {
		hidingView.hide();
		hidingView.setBorderWidth(hidingViewBorderWidth);
		hidingView.setBorderColor(hidingViewBorderColor);
	});
	
	var initialMatrix = Ti.UI.create2DMatrix();
		initialMatrix = initialMatrix.translate(200, 0);
		initialMatrix = initialMatrix.scale(0.5, 0.5);	
		view.setTransform(initialMatrix);

	$.content.add(view);	
	hidingView.animate(hideAnimation);
	view.animate(openAnimation);

};

exports.setFirstPage = function(view) {
	stack.push(view);
	$.content.add(view);
};
