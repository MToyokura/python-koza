---
id: installing_python
title: "Pythonのダウンロードとインストール方法 "
---

import useBaseUrl from '@docusaurus/useBaseUrl';


ここではPythonをダウンロードし、パソコンにインストールする際の手順を紹介します。 

Pythonコミュニティによる<a href="https://docs.python.org/ja/3/using/windows.html">公式ドキュメント</a>もあるので、もっと詳しいことが知りたい人はそちらを参照してください。 
## ダウンロード 

Pythonのホームページに行きます。 

Pythonのホームページ: <a href="https://www.python.org/">https://www.python.org/</a>

ホームページのDownloadsと書かれた部分にマウスを移動させます。 

<img alt="Types of Programming Languages" src={useBaseUrl('img/docs/installing_python/home_downloads_1.png')} />

すると、Download for Windowsというタイトルの画面と、その下に「Python 3.7.0」と書かれたボタンが表示されます(ボタンに書かれた3.7.0という数字は2018年7月時点のバージョン番号です。バージョンが更新され数字が変わっている可能性があります。)。そのボタンをクリックし、Pythonのインストーラーをダウンロードします。 

<img alt="Types of Programming Languages" src={useBaseUrl('img/docs/installing_python/home_downloads_2.png')} />

## インストール 

先程のダウンロードが完了したら、そのファイルを実行してください。 

実行すると下のような画面がでてきます。この画面で、<b>Add Python 3.7 to PATH</b>のチェックボックスにチェックを入れ、上にある<b>Install Now</b>をクリックしてください。すると、「このアプリがデバイスに変更を加えることを許可しますか?」という画面が出てくるので「はい」を押してください。 ちなみに<b>Add Python 3.7 to PATH</b>は、Windowsのコマンドプロンプト上でPythonを呼び出すための項目です。これにチェックを入れておくとpipインストールが楽になったりします。 

<img alt="Python setup 1" src={useBaseUrl('img/docs/installing_python/python_setup_1.png')} />

インストールが完了すると下のような画面が出てきます。Closeボタンの上に表示されている<b>Disable path length limit</b>は現時点ではチェックしておく必要はありませんが、将来的に巨大なプログラムを作る場合は必要になるかもしれないのでチェックしておくと安心でしょう。 

<img alt="Python setup 2" src={useBaseUrl('img/docs/installing_python/python_setup_2.png')} />

これでPythonのインストールは完了です。 

## Pythonの実行

Windows10であれば、画面下の検索画面でPythonを検索すると、下のように表示されるはずです（画像は一つ前のバージョンであるPython3.6のものです。）
<img alt="Windows10のPython検索" src={useBaseUrl('img/docs/installing_python/python_search.png')} /> 

1番目に表示されているPython 3.6 (32-bit) というのはWindowsのコマンドライン上で動作する対話モードのインタープリタです。 

2番目に表示されているのはPythonのモジュール一覧です。 

3番目に表示されているのはIDLEと呼ばれるPython用の統合開発環境です。 

最初は基本的にIDLE以外は使わないと思います。IDLEについては[こちら](trinket_and_idle)で解説しています。 