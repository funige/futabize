
# futabize

futabizeは、[POTI-board改二](https://github.com/sakots/poti-kaini)を色々と「ふたば風にする」テンプレートです。

## [サンプル](http://futabize.websozai.jp)

## 設置方法
config.phpと同じフォルダに[futabizeのフォルダ](https://github.com/funige/futabize/tree/master/futabize)をコピーした後、config.phpを編集します。

    define('SKIN_DIR', 'futabize/');

- フォルダの名前は「futabize」でお願いします。リネームすると動きません

ふたばにない機能は実装していません。

- コメントの編集機能はありません
- 動画記録はサポートしません
- DynamicPaletteも無しの方向で

## fixtree.phpについて
fixtree.phpは、お絵かき掲示板 Poti-board用の外部phpプログラムです。  
掲示板が頻繁に荒らされる管理者用です。通常は必要ありません。

スパムが投稿されて何年も前の古いコメントツリーが浮上してしまったとき、スレッドを「自然な順序」に並べ直すことができます。

futabizeでは

    [管理用] -> 記事削除 -> [tree.logを修復する]

で、fixtree.phpを実行できます。  
(fixtree.php は potiboard.php 等と同じ階層に置いてください)  

まあ、ちゃんと設定してスパムの投稿をブロックすれば、こんなもの要らないはずなんですけど……


## メモ

Skinnyの外部テンプレートを使用しています。外部テンプレートのキャッシュはなかなか更新されないので、いつまでたっても古いのが出てくるときはcacheフォルダを丸ごと削除するといいです。

## 履歴

#### ver1.0.1 (2020/09/22)
- fixtree.phpを追加

#### ver1.0.0 (2020/08/02)
- 作成








