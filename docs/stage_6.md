---
id: stage_6
title: ステージ6：モジュール 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## モジュール(Module) 

ついに最後のステージ、モジュールについてです。モジュールが使えるようになるとPythonでできることが途端に増えます。 

Pythonのコードでは、別のファイルに書かれたPythonコードを作業中のコードに取り込むことができます。 あるファイルで作った関数や変数を複数のファイルで使いたい場合に便利です。 
この際、取り込まれるコードをモジュールと呼びます。 

まずはモジュールを使った簡単な例を見てみましょう。 

パソコンのPythonを使う人は、下に表示されている2つのファイル(main.pyとmy_module.py)を同じフォルダ内に作成し、main.pyを実行してください。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/1c76d86bf9" width="100%"></iframe>

main.py 

```
import my_module

my_module.my_function1()
my_module.my_function2()
print(my_module.variable1)
```

my_module.py 


```
def my_function1():
    print('Hello World')

def my_function2():
    print('Happy Coding')

variable1 = 'Good Night'
```

コードの1行目の上を見ると「main.py」、「my_module.py」という2つのタブがあるのがわかります。「main.py」が実際に実行されるプログラムで、「my_module.py」がモジュールです。「my_module.py」の中身を見ると2つの関数と1つの変数が定義されているのがわかります。 

▶Runボタンを押すと、「main.py」が実行され、モジュールとして取り込まれた「my_module.py」内の関数や変数を呼び出せていることがわかります。 (trinketでは、my_module.pyを表示している状態で▶Runボタンを押しても、main.pyが実行されます。)

## `import`文 

`import`文は、モジュールを取り込む際に使う文です。 

先程の例だと、「main.py」の1行目に「`import`」、その後に「my_module」と書かれていますね。この一文によって「main.py」で「my_module.py」に書かれている関数が使えるようになります。 

モジュール内の関数を使う際は以下のような書き方をします。 

```
モジュール名.モジュール内の関数や変数
```

`import`文に少し工夫を加えるとモジュールの使い勝手がよくなります。 
### `as`を使った`import`文

```
import モジュール名 as 〇〇
```

とすることで、 

```
モジュール名.モジュール内の関数や変数
```

ではなく 

```
〇〇.モジュール内の関数や変数
```

と書くことでモジュールの中身を呼び出せるようになります。 

モジュール名が長い場合や分かりづらいときに使えますね。 

これを使った例を見てみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/ace8592723" width="100%"></iframe>

```
import my_module as mymod

mymod.my_function1()
mymod.my_function2()
print(mymod.variable1)
```

### `from`を使った`import`文 

```
from モジュール名 import モジュール内の関数や変数
```

とすることで、 

```
モジュール名.モジュール内の関数や変数
```

ではなく直接 

```
モジュール内の関数や変数
```

と書くことでモジュール内の関数を呼び出せるようになります。 

毎回モジュール名を書かなくても関数や変数が使えるので楽ちんですね。 

この方法でモジュール内の関数を`import`する際、`import`文内で関数の最後に「()」を付けるのは誤りなので注意してください。 

```
# これが正しい
from モジュール名 import 関数

# これは誤り（エラーになる）
from モジュール名 import 関数()
```

これを使った例を見てみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/aa0585e19a" width="100%"></iframe>

```
from my_module import my_function1, my_function2, variable1
my_function1()
my_function2()
print(variable1)
```

### `from`と`*`を使った`import`文

```
from モジュール名 import *
```

とすることで、モジュール内のすべての関数や変数を直接呼び出すことができます。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/90f18213b2" width="100%"></iframe>

```
from my_module import *
my_function1()
my_function2()
print(variable1)
```

ただし、複数のモジュールからこの方法で`import`した場合、後に`import`された中身が優先されてしまうため、先に取り込まれた関数や変数のうち、後から取り込んだものと名前が重複しているものが使えなくなってしまいます。また、使用している関数や変数がどこで定義されているかがわかりにくく、コードが読みづらくなります。これらは混乱の元になるので、中身を限定できる先程の 

```
from モジュール名 import モジュール内の関数
```

の書き方が推奨されます。 


## モジュールを使う 

さて、`import`の仕方がわかったので実際にモジュールを使っていきましょう。 

Pythonには、インストールした時点でいくつものモジュールが搭載されています。標準で搭載されているモジュールの一覧は以下のリンクで見ることができます。

[https://docs.python.org/ja/3/py-modindex.html](https://docs.python.org/ja/3/py-modindex.html)

この中から今回は`random`モジュールと`math`モジュールを見ていきます。 

### `random`モジュール 

`random`モジュールには、いろいろな乱数を発生させる関数が入っています。`random`モジュールに含まれる関数の一覧とそれぞれの説明は下のリンクで見ることができます。 

[https://docs.python.org/ja/3/library/random.html](https://docs.python.org/ja/3/library/random.html)

今回はそのなかの`randint()`関数を使ってみます。 `randint()`は整数の引数を2つとり、1個目の整数以上、2個目の整数以下のランダムな整数を返してくれます。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/9d9dc32018" width="100%"></iframe>

```
import random

print(random.randint(1,10))
```

プログラムを実行するたびに異なる数字が`print()`されることがわかります。 

`random`モジュールには他にも様々な関数があります。気になる人は使ってみてください。 

### `math`モジュール 

`math`モジュールは数学関数を集めたモジュールです。指数関数、対数関数、三角関数など数学に関連する関数や定数が含まれています。`math`モジュールに含まれる関数の一覧とそれぞれの説明は下のリンクで見ることができます。 

[https://docs.python.org/ja/3/library/math.html](https://docs.python.org/ja/3/library/math.html)

下の例ではそのうちのいくつかの関数を使っています。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/768314e56b" width="100%"></iframe>

```
import math


print(math.exp(1)) # 自然対数 e の 1 乗

print(math.log10(1000)) # 1000 の常用対数

print(math.sqrt(2)) # 2 のルート

print(math.pi) # π (これは関数ではなく定数)

print(math.sin(math.pi/2)) # sin(90°)
```

`math`モジュールには他にも様々な関数があります。気になる人は使ってみてください。 

### 外部モジュール・外部パッケージ 

標準で搭載されているモジュールでもかなりの数がありますが、それら以外にPython言語の開発コミュニティではない外部の人たちによって作成されたモジュールが無数に存在します。これらを外部モジュールと呼んでいます。モジュールが集まったものはパッケージと呼ばれており、外部モジュールを一式集めたものは外部パッケージと呼ばれます。ただしモジュールとパッケージの区別は厳密ではないためモジュールをパッケージと呼んだり、また逆にパッケージをモジュールと呼んだりする場合もあります。 

外部のモジュールやパッケージを自分のパソコンで使えるようにするためには、パソコンにインストールする必要があります。幸いなことに、Pythonにはこれらの外部モジュールなどを簡単にインストールする「pip」というインストールの方法が備わっています。pipによるインストールは次の実践で実際にやりながら解説していきます。 


## モジュールに関して

このステージで見てきた`random`モジュール、`math`モジュール以外にもいくつものモジュールが存在するということは先ほど述べたとおりで、それぞれのモジュールで使える関数となるとその数はさらに大きく、外部モジュールなんかを考えると膨大な数になります。モジュールが使えるようになると、できることが途端に増えるということの意味がおわかりいただけたかと思います。より高度なプログラムを書く場合はモジュールやパッケージは欠かせません。モジュールやパッケージはPythonのプログラムの要と言って良いでしょう。 

そんなにモジュールがあってもそれぞれの関数なんて覚えられないよ！と思ったかもしれませんが安心してください。モジュールに含まれる関数すべてを覚えている必要はなく、「このモジュールでこんなことができる」ということさえ覚えておけば後で説明書を読みながらプログラムを書くことができます。モジュールに関しても自分が必要とするモジュールさえ頭に入れておけば不足はありません。 

ではどのモジュールから勉強するのがいいのかというと、それは人それぞれになってしまいます。自分が書きたいプログラムに必要なモジュールを調べて、その使い方を見ていくという形がおそらく一番効率が良い習得の方法でしょう。 

モジュールを使った実用例として、次の実践ではウェブサイト上の情報をエクセルに保存するというプログラムを書いていきます。 ウェブサイト上の情報をエクセルに保存するためにはどのようなモジュールが必要なのか、ぜひ一度検索してみてから実践に進んでみてください！ 
