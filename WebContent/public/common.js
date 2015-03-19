$(function() {
  $('.i18n').each(function(index, element) {
	if (/^\$/.test(element.innerText)) {
		element.innerText = $.i18n(element.innerText.substr(1));
	}
  });
});