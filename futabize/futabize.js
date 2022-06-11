// ページ選択をふたばのフォーマットに合わせる
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

//　アップロード途中の画像が複数あるときは最後の画像を選択する
function fixSelect() {
  var pics = document.getElementsByClassName('picselect')[0];
  if (pics) {
    var len = pics.options.length;
    pics.options[0].selected = false;
    if (len) pics.options[len - 1].selected = true;
  }
}

// 管理人投稿
function fixAdminComment() {
  for (var i = 0; i < document.forms.length; i++) {
    var form = document.forms[i];
    if (form.com) form.com.value = "<font color='red'>[管理人]</font>\n";
    if (form.name) form.name.value = "";
    if (form.email) form.email.value = "";
  }
}

// カタログの下に数ピクセル余白が出るのを消す
function fixCatalog() {
  var cattable = document.getElementsByClassName('cattable')[0];
  cattable.innerHTML = cattable.innerHTML.replace(/<tr>\s*<\/tr>/g, '');
}
