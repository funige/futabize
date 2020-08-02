function fixPage(prev, next) {
  var tmp = [];
  var page = document.getElementsByClassName('page')[0];
  if (page) {
    tmp.push(prev ? "<button onclick='javascript:location.href=\"" + prev + "\"'>前のページ</button>": "最初のページ");
    tmp.push(page.innerHTML.replace(/></g, '>&nbsp;<'));
    tmp.push(next ? "<button onclick='javascript:location.href=\"" + next + "\"'>次のページ</button>": "最後のページ");
    page.innerHTML = "<table align='left' border=1><tr><td>" + tmp.join("</td><td>") + "</td></tr></table>";
  }
}

function fixSelect() {
  var pics = document.getElementsByClassName('picselect')[0];
  if (pics) {
    var len = pics.options.length;
    pics.options[0].selected = false;
    if (len) pics.options[len - 1].selected = true;
    console.log('fixSelect', len);
  }
}

function fixAdminComment() {
  for (var i = 0; i < document.forms.length; i++) {
    if (document.forms[i].com) {
      document.forms[i].com.value = "<font color='red'>[管理人]</font>\n";
    }
  }
}
