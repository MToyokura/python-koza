---
id: practice_2
title: 実践 2
---

リスト型データとメソッドを用いることで素数を判別する`prime_function()`関数を作ります。 

対話モードであれば下のような挙動を示します。 

```
>>> prime_function(456)
456 は、1と456以外に以下の約数を持っています。
[2, 3, 4, 6, 8, 12, 19, 24, 38, 57, 76, 114, 152, 228]
>>> prime_function(4567)
4567 は素数です!
```

関数の中身としては以下のような内容になります。 

1.  空のリストを用意する。 
1.  引数として与えられた数まで2から順に割って、余りが0の場合はその数をリストに追加する。 
1.  最終的に約数のリストが空の場合は「素数である」と`print()`する。 
1.  約数のリストが空ではない場合はリストを`print()`する。 

それでは上の手順を参考にし、以下の材料を使って下のIDEの3行目以降のコードを書いてみましょう。 

### 材料 

* `%`, `==`, などのオペレーター 
* `for`
* `range()`
* `if`, `else`
* `リスト.append(i)`
* `len()`

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/b6f6e7ffcc?runOption=run" width="100%"></iframe>

```
def prime_function():
    約数リスト = []
```

### 答え 

*  Trinket版の答え: <a href="https://trinket.io/python3/5fdd6e3e1a" target="_blank">https://trinket.io/python3/5fdd6e3e1a</a>
*  テキスト版の答え: [こちら](practice_2_answer)

※この実践では数学的な正確さは求めていないので、「1」や「0」、負の数の取り扱い方については無視しています。 

ところで、実践の中身とは関係のない余談ですが、答えのコードの中に「#」がありますね。この記号はコメントを挿入する際に使われるもので、プログラムの内容をメモするときなどに使われます。ある行のこの記号以降の文字は「コメントアウト」され、Pythonはこれを無視してプログラムを実行します。 
