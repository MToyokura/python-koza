---
id: error_handling
title: エラーの対処
---

エラーの見かたについては、基礎講座の[ステージ3](stage_3)の最後で見ましたが、ここでは具体的なエラーの対処法についてみていきます。エラーの対処には主に`try`文を使います。 

下のコードを見てください。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/a60deeb91f" width="100%"></iframe>

```
a = float(input())
print(10 / a)
```

実際にコードを実行してみるとわかりますが、このコードでは「10」という整数を、ユーザーが実行画面で入力した任意の数字で割ることができます。`input()`関数については[実践 1](practice_1)の「もっとやりたい人のために」にも出てきますが、Pythonの実行画面上でユーザーが入力したものを文字列に変換してPythonに渡す役割をはたす関数です。 

今度はコードを実行して、実行画面に整数ではなく適当な文字を入力してみましょう。以下のようなエラーが表示されるはずです。 

```
Traceback (most recent call last):
  File "/tmp/sessions/36411cdee32cd47a/main.py", line 1, in <module>
    a = float(input())
ValueError: could not convert string to float: 'asdf'
```

エラーの内容を読むと、エラーの種類は「ValueError」で、内容は「'asdf'を小数に変換できませんでした」と書かれています。 

それでは、`try`文と`except`節を用いてユーザーが数字以外を入力した場合にはエラーではなく、実行画面に「入力した内容は数字ではないようです」と表示させるようにします。 

`try`文は、「`try`の中身を実行してみて、エラーが発生したら`except`を実行する」ことを指示します。書き方は、 

```
try:
    処理
except:
    処理
```

です。では実際につかってみます。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/95834b1447" width="100%"></iframe>

```
try:
    a = float(input())
    print(10 / a)
except:
    print('入力した内容は数字ではないようです')
```

これを実行して文字を入力すると「入力した内容は数字ではないようです」が`print()`されますね。 

ところで、今のコードで実行画面に「0」を入力した場合も、「0」は数字なのに「入力した内容は数字ではないようです」と表示されてしまいます。実はユーザーの入力が「0」の場合は先程の「ValueError」とは異なるエラーが発生しているのですが、`except`が1つしかないのですべてのエラーをこれで賄ってしまっている状態です。 

`except`節は、 

```
except エラー名:
    処理
```

と書くことでエラーの種類ごとに異なる指示を与えることができます。 

それでは、エラーの種類を指定するためにユーザーの入力が「0」の場合どのようなエラーが発生しているかを確認します。このページの最初に書かれたコードを実行し、「0」と入力してください。すると以下のエラーが発生するはずです。 

```
Traceback (most recent call last):
  File "/tmp/sessions/921d2a020cf886ff/main.py", line 2, in <module>
    print(10 / a)
ZeroDivisionError: float division by zero
```

このことから、ユーザーの入力が「0」の場合「ZeroDivisionError」というエラーが発生することがわかりました。それでは先程書いたコードにおいて「ValueError」と「ZeroDivisionError」で異なる`except`の処理を与えましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/4efef8dc49" width="100%"></iframe>

```
try:
    a = float(input())
    print(10 / a)
except ValueError:
    print('入力した内容は数字ではないようです')
except ZeroDivisionError:
    print('ゼロで割ってはいけません！')
```

ユーザーの入力が文字の場合と「0」の場合で異なる内容を`print()`することができましたね。 

ここでは「ValueError」と「ZeroDivisionError」のエラーを見ましたが、Pythonにはその他にも様々なエラーが存在します。`try`文で回避できるエラーはPython公式ドキュメントの<a href="https://docs.python.org/ja/3/library/exceptions.html">組み込み例外</a>に書かれています。 