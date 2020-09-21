<?php
//POTI-board plugin fixtree(c)2020 funige
//v0.0.0

include(__DIR__.'/config.php');

login() or die("パスワードが違います");
$line = file(LOGFILE);
$tree = file(TREEFILE);
save($tree, TREEFILE.".".time()) or die("バックアップが作成できません");

foreach ($line as $i => $value) {
    list($no,,,$email) = explode(",", rtrim($value));
    $sage[$no] = (stripos($email,'sage') !== false);
}

foreach ($tree as $i => $value) {
    $treelog[$i]["value"] = $value;
    $treelog[$i]["key"] = lastPost($value);
}

usort($treelog, "cmp");
save(array_column($treelog, "value"), TREEFILE) or die("上書き保存できません");

foreach ($treelog as $item) {
    echo($item["value"]);
    echo("<br>");
}

echo("<hr>tree.logを修復しました。");
echo("<a href='#' onclick='history.back();'>ログを更新してください。</a>");
exit;


//各スレッドのキー（最新の投稿No）を取得
function lastPost($value) {
    global $sage;
    $arr = array_reverse(array_slice(explode(",", rtrim($value)), 0, MAX_RES));
    foreach ($arr as $no) {
        if (!$sage[$no]) {
            return $no;
        }
    }
    return end($arr);
}

//ソート
function cmp($a, $b) {
    if ($a["key"] == $b["key"]) {
        return 0;
    }
    return ($a["key"] < $b["key"]) ? 1 : -1;
}

//保存
function save($tree, $filename) {
    $fp = fopen($filename, "wb");
    if ($fp) {
        flock($fp, LOCK_EX);
        foreach ($tree as $line) {
            fwrite($fp, $line);
        }
        fflush($fp);
        flock($fp, LOCK_UN);
        fclose($fp);
        return true;
    }
    return false;
}

//パスワード入力画面
function login() {
    if (!$_POST) {
        echo("<form action='fixtree.php' method='POST'>");
        echo("<input type='password' name='pass'> ");
        echo("<input type='submit'></form>");
        exit;
    }

    global $ADMIN_PASS;
    $password = $ADMIN_PASS; //改二
    
    //$password = ADMIN_PASS; //旧バージョン
    
    if ($_POST["pass"] != $password) {
        return false;
    }    
    return true;
}
