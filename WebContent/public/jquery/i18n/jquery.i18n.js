(function($) {
  var path = 'public/jquery/i18n/locale/', name = 'lang', lang = 'zh_CN';

  // i18n file
  var filename = baseDir + '/' + path + name + '-' + lang + '.json';

  $.i18n = function(key) {
    return fetchValue($.i18n.map, key)
  }
  $.i18n.map = {};

  // load i18n data
  // $.getJSON(filename, function(data) { $.i18n.map = data });
  $.ajax({
	  url: filename,
	  async: false,
	  type: 'post',
	  dataType: 'json',
      success: function(data) {
    	  $.i18n.map = data;
      }
  });
  
  var fetchValue = function(obj, key) {
    if (typeof (obj) === 'object' && typeof (key) === 'string') {
      var tempIndex = -1;
      if ((tempIndex = key.indexOf('.')) > -1) {
        return fetchValue(obj[key.substring(0, tempIndex)], key.substring(tempIndex + 1));
      } else {
        var value = obj[key] || key;
        if (typeof (value) === 'object') {
          value = JSON.stringify(value);
        }
        return value;
      }
    }
  }
})(jQuery);