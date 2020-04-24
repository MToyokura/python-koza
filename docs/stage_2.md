---
id: stage_2
title: ステージ2：関数
---

## 関数(Function) 

関数とは、データにある処理を施すものです。オペレータと似ていますが、より複雑なことができます。 

関数は、 

`print()`, `int()`, `str()`

というように、 

`◯◯()`

という形で表し、`()`の中には処理したい変数あるいはデータを入れます。 

関数には、もともとPythonに組み込まれているものと、自分で作るものがあります。Pythonに組み込まれている関数の一覧は下のリンクで見ることができますが、最初のうちはそこに書かれている関数の多くは使うことはないと思います。 

Pythonに組み込まれている関数の一覧<br/>
[https://docs.python.jp/3/library/functions.html](https://docs.python.jp/3/library/functions.html)

ここでは、関数の使い方さえ分かれば良いので、よく使われるものを4つ紹介するにとどめておきます。 

### `str()`関数

下は`str()`関数を使った例です。 

<iframe allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/a5f9a36c60?outputOnly=true&amp;runOption=console&amp;start=result" width="100%"></iframe>

```
>>> 変数1 = 3
>>> 変数2 = 7
>>> 変数1 + 変数2
10
>>> 
>>> 変数1改 = str(変数1)
>>> 変数2改 = str(変数2)
>>> 変数1改 + 変数2改
'37'
```

4行目まではいままでに見てきた、変数に入った整数の足し算です。注目すべきは6行目からです。 

6行目と7行目で「変数1」と「変数2」に入っていた整数を文字列に変換し、新たな変数に入れています。 

8行目では新たな変数同士に「+」のオペレータを使っています。新たな変数の中身は文字列なので、「'3'」という文字列と「'7'」という文字列がくっつき、「'37'」という文字列が出来上がります。 

このように、 `str()`関数を使うことで数字を文字列として扱うことが可能になります。 

### `int()`関数 

先程の`str()`関数の例では、最後に「'37'」という文字列ができていました。その「'37'」という文字列は `int()`関数を使うことで、整数に変換することが可能です。 

<iframe allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/cddffaa405?outputOnly=true&amp;runOption=console&amp;start=result" width="100%"></iframe>

```
>>> 変数1 = 3
>>> 変数2 = 7
>>> 変数1 + 変数2
10
>>> 
>>> 変数1改 = str(変数1)
>>> 変数2改 = str(変数2)
>>> 変数1改 + 変数2改
'37'
>>> 
>>> 整数に変換した文字列 = int(変数1改 + 変数2改)
>>> 整数に変換した文字列
37
>>> 整数に変換した文字列 + 13
50
```

11行目で`int()`関数を使って「'37'」を整数に変換し、12行目でその整数を呼び出しています。 

14行目では、ほんとうに数字として機能するのか確認するために新たな変数をつかって足し算をしています。 

### `len()`関数

`len()`関数はあるデータを構成する要素の数を数えます。この関数は文字列、タプル、リスト、辞書など、様々なデータ型で使えますが、文字列以外については触れていないので、文字列で使ってみることにしましょう。 

<iframe allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/0e1957612d?outputOnly=true&amp;runOption=console&amp;start=result" width="100%"></iframe>

```
>>> len('いろはにほへと')
7
```

上の例では「'いろはにほへと'」という文字列にいくつ文字が含まれているかを数えています。

`len()`関数で得られた値は整数なので、この値を使って計算などもできます。

<iframe allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/cfe87c9a3c?outputOnly=true&amp;runOption=console&amp;start=result" width="100%"></iframe>

```
>>> len('いろはにほへと') + 3
10
```

上の例では、「'いろはにほへと'」の文字列の長さである7に3を足すことで10という結果を得ています。

### `print()`関数

`print()`関数は渡されたデータ、あるいは渡された変数の中にあるデータを画面上に表示させる関数です。 

といってもよく意味がわからないと思うので、解説します。 

いままではPythonの対話モードのインタープリタを使って勉強してきましたが、今度は通常モードのインタープリタを使っていきます。通常モードのインタープリタに関しては、[ステージ1](stage_1)と、補足資料の[trinketとIDLE](trinket_and_idle)でも解説しているのでそちらも合わせて参照してください。 

それでは下の画面を見てみましょう。 

<iframe allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/46a0dfb3b5" width="100%"></iframe>

この画面の左側がPython読むことになるコードを書く場所で、右側には左側のコードの実行結果が映し出されます。IDLEを使っている人にとっては、左側がIDLE Editorの画面、右側がPythonファイルを実行した際に現れる画面に対応しています。 

画面の上部にある「▶Run」というボタンをクリックすると、左側に書かれたコードを実行することができます。では、上の画面で「▶Run」をクリックしてみましょう。 

どうでしょうか、右側にはなにも表示されないと思います。実はPythonは通常、画面上ではわからないコンピューターの内部でコードを実行しています。この場合も、Pythonは「1+2」を間違いなく計算しているのですが、「その結果を画面上に表示する」という指示がないため私達には見えていないのです。 

いままで使用していた対話モードのインタープリタはあらゆるデータを私達に見えるかたちで提供してくれていましたが、通常モードではその機能はありません。 

通常モードでプログラムの実行結果を画面上に表示させたい場合には`print()`関数を使います。 

<iframe allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/58d9eee81b" width="100%"></iframe>
