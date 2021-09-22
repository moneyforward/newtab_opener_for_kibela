/* 
  ＜仕様＞
  サイトにあるKibelaのaタグを全て取得し、target=_blankを追加している。

  ＜問題＞

  拡張機能だと、取得できるaタグの数が少ない

  そもそも
  var links = document.getElementsByTagName("a")
  で取得できる要素の数がおかしい。拡張機能にすると53、デベロッパーツールなら172。
  なぜ？ロードできてない？下村さんに相談。

  setTimeoutで1秒後実行にしたらできたかも。



  moneyforward.kibe.la以外のリンクを別たぶで開く
  記事番号が違う場合はKibelaリンクでも別たぶで開く

*/


/* 1. get all <a> tags */


var main = function(){
  var links = document.getElementsByTagName("a")
  console.log("取得した<a>数：　" + links.length)

  var currentURL = location.href
  currentURL = currentURL.split("#")[0]
  var blank_array = []
  var notBlank_array = []

  for (var i=0; i<links.length; i++){
    link = links[i]
    url = link.href

    if (link.target == "_blank") continue;  // すでに別タブで開く設定ならスキップ
    if (url.indexOf(currentURL) != -1) continue;  // 目次など、同じ記事のリンクの場合はスキップ

    link.setAttribute('target', link.getAttribute('target') || '_blank');

  }
  
  console.log(`別ダブで開くリンク(${blank_array.length})`)
  console.log(`変更なし(${notBlank_array.length})`)
}

setTimeout(main, 1500)
