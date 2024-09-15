function myFunction_2(){
	var dots_2=document.getElementById('dots_2');
	var moreText_2=document.getElementById('more_2');
	var btnText_2=document.getElementById('myBtn_2');
	if (dots_2.style.display === "none") {
		dots_2.style.display="inline";
		btnText_2.innerHTML="Read more";
		moreText_2.style.display="none";
	}else{
		dots_2.style.display="none";
		btnText_2.innerHTML="Read less";
		moreText_2.style.display="inline";
	}
}
function myFunction_1(){
	var dots_1=document.getElementById('dots_1');
	var moreText_1=document.getElementById('more_1');
	var btnText_1=document.getElementById('myBtn_1');
	if (dots_1.style.display === "none") {
		dots_1.style.display="inline";
		btnText_1.innerHTML="Read more";
		moreText_1.style.display="none";
	}else{
		dots_1.style.display="none";
		btnText_1.innerHTML="Read less";
		moreText_1.style.display="inline";
	}
}
function myFunction(){
	var dots=document.getElementById('dots');
	var moreText=document.getElementById('more');
	var btnText=document.getElementById('myBtn');
	if (dots.style.display === "none") {
		dots.style.display="inline";
		btnText.innerHTML="Read more";
		moreText.style.display="none";
	}else{
		dots.style.display="none";
		btnText.innerHTML="Read less";
		moreText.style.display="inline";
	}
}
