function show_sticker(){
	$('.popupWrapper').fadeIn();
	return false;
}
function hide_popup(){
	$('.popupWrapper').fadeOut();
	return false;
}
$(document).ready(function(){ 
	$('select').selectOrDie();
});