function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// to build a new url query, the original path is transfered as a parameter with name 'url', the 
// original query is transfered to parameters with the same name separately
// e.g. for the url link https://detail.tmall.com/item.htm?id=44987868904&spm=a1z09.2.0.0.3mUmi8,
// it returns 'url=https://detail.tmall.com/item.htm&id=44987868904&spm=a1z09.2.0.0.3mUmi8' will
function formatLinkToQuery(link) {
    var query = 'url=' + link;

    var paramSep = link.indexOf('?');
    if (paramSep !== -1) {
      var param = link.substr(paramSep+1);
      var url = link.substr(0, paramSep);
      query = 'url=' + url + "&" + param;
    }

    return query;
}

module.exports = {
  formatTime: formatTime,
  formatLinkToQuery: formatLinkToQuery
}
