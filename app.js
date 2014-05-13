var inputNumM = document.querySelector("#a");
var inputNumF = document.querySelector("#b");
var inputPrice = document.querySelector("#X");
var inputOperator = document.querySelector("#operator");
var outputM = document.querySelector("#A");
var outputF = document.querySelector("#B");
var error = document.querySelector("#error");

var showError = function(){
	error.setAttribute("class", "");
};

var hideError = function(){
	error.setAttribute("class", "hidden");
};

//オペレーター5:5が選択された時
var f_f = function(X,M,F){
	return X/(M+F);
};

//オペレーター6:4が選択された時の男性
var s_4_M = function(X,M,F){
	return X/(M+(2/3)*F);
};

//オペレーター6:4が選択された時の女性
var s_4_F = function(X,M,F){
	return 2*X/(3*M+2*F);
};

//オペレーター7:3が選択された時の男性
var s_3_M = function(X,M,F){
	return 7*X/(7*M+3*F);
};

//オペレーター7:3が選択された時の女性
var s_3_F = function(X,M,F){
	return 3*X/(7*M+3*F);
};

var showResult = function(resultM , resultF){
	outputM.value = resultM + "";
	outputF.value = resultF + "";
};

//エラー用
var isNumber = function(a){
	return !Number.isNaN(a); //Nanじゃなかったら１、Nanだったら０
};

var isNonZeroNumber = function(a){
	return isNumber(a) && a != 0;　//数字であるかつ０でないとき１　そうでないとき０
};

var isInteger = function(a){
	return Number.isInteger(a);//整数のとき１　そうでないとき０
};

var isNaturalNumber = function(a){
	return isInteger(a) && a > 0;//自然数の時１　そうでないとき０
};

var isReady = function(X,a,b){

　return	isNumber(X) && isNonZeroNumber(X) &&isInteger(X) && isNaturalNumber(X)
  &&isNumber(a) && isNonZeroNumber(a) &&isInteger(a) && isNaturalNumber(a)
  &&isNumber(b) && isNonZeroNumber(b) &&isInteger(b) && isNaturalNumber(b);

/*
return	isNumber(X) || isNonZeroNumber(X) ||isInteger(X) || isNaturalNumber(X)
  ||isNumber(a) || isNonZeroNumber(a) ||isInteger(a) || isNaturalNumber(a)
  ||isNumber(b) || isNonZeroNumber(b) ||isInteger(b) || isNaturalNumber(b);*/
};



var startCalc = function(){
	var X = inputPrice.value;
	var a = inputNumM.value;
	var b = inputNumF.value;
	var operator = inputOperator.value;

	a = Number(a);
	b = Number(b);
	X = Number(X);
		hideError();
		if(isReady(X,a,b)){
		var result = 0;

		if(operator == "5:5"){
			resultM = resultF = f_f(X, a, b);

		}else if(operator == "6:4"){
			resultM = s_4_M(X, a, b);
			resultF = s_4_F(X, a, b);

		}else if(operator == "7:3"){
			resultM = s_3_M(X, a, b);
			resultF = s_3_F(X, a, b);
		}
		showResult(resultM, resultF);
		}else{
		showError();
		}
};



var initApp = function(){
	var calcButton = document.querySelector("#calcButton");

	calcButton.addEventListener("click", startCalc)
};

initApp();

