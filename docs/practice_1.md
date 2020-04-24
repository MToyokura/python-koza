---
id: practice_1
title: 実践 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

今まで学習したことを使って、ある程度自由の効くプログラムっぽいプログラムを書いていきます。 

実践 1では、下のような、ある整数の約数を列挙してくれるプログラムを書きます。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/428d6006c8?outputOnly=true&amp;runOption=run&amp;start=result" width="100%"></iframe>





プログラムの挙動としては、 

1.  調べたい整数を変数に代入する 
1.  変数に代入されている調べたい整数を1から順に割っていく 
1.  余りが0となった数字を表示する 

という手順を踏みます。 

それでは上の手順を参考にし、以下の材料を使って下のIDEのに続きのコードを書いてみましょう。 

`調べたい整数`には好きな整数を代入してください。 

### 材料 

#### `while`を使う場合 

* `while`
* `<=`
* `if`
* `%`
* `==`
* `print()`
* `+`

#### `for`を使う場合 

* `for`
* `range()`
* `+`
* `if`
* `%`
* `==`
* `print()`


<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/5159b95c67" width="100%"></iframe>

### 答え 

#### `while`を使う場合 

```
調べたい整数 = 
n = 1
while n <= 調べたい整数:
    if 調べたい整数 % n == 0:
        print (n)
    n = n + 1
```
#### `for`を使う場合 

```
調べたい整数 = 
for n in range (1, 調べたい整数 + 1):
    if 調べたい整数 % n == 0:
        print (n)
```

最初に見たプログラムの例のように、1行目に調べた整数を表示させたい場合は`for`文または`while`文の前に`print()`で表示させるようにすればできます。 

その場合は`print()`の中身が文字列なのか整数なのかに注意しましょう。 

```
調べたい整数 = 
print(str(調べたい整数) + 'の約数は')
for n in range (1, 調べたい整数 + 1):
    if 調べたい整数 % n == 0:
        print (n)
```


これで実践 1の目標は達成されましたが、もう少し挑戦したい人は下の「もっとやりたい人のために」に挑戦してみましょう! 

もちろん、実践 1はとりあえずここまでにして次のステージに進んでもらっても大丈夫です。 


[ステージ4 へ](stage_4)

## もっとやりたい人のために

今書いたプログラムは下のようなものに発展させることができます。 

このプログラムでは実行後に人が数字を入力し、その約数を返すことができます。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/d15ea55bb5?outputOnly=true&amp;runOption=run&amp;start=result" width="100%"></iframe>

いきなりこれを作るのは難しいかもしれないので、ここからは一歩ずつチュートリアルのような形で進めていきます。 

先程書いたプログラムだと、約数の一覧がわかりますが、その約数で割ることで得られる対となる約数も気になりますよね。 

まずはその約数をセットで表示するようにします。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/1901a19ee7" width="100%"></iframe>

```
調べたい整数 = 
for n in range (1, 調べたい整数 + 1):
    if 調べたい整数 % n == 0:
        割った相手 = 調べたい整数 / n
        print(str(n) + ' * ' + str(割った相手))
```

上のコードでは、4行目で新たに「割った相手」という変数を作成し、「調べたい整数」を「n」で割った数を代入しています。 

5行目では、`str()`関数を使って「n」と「割った相手」を文字列にし、「+」のオペレーターを使って文字列を一つの行にまとめて`print()`するように指示しています。 

上のコードを実行してみると、対となる約数には「.0」がついて、浮動小数で表示されてしまっていますね。 

割り算を行うと、その結果のデータ型は浮動小数となるみたいです。 

このプログラムでは小数を扱うことはないのでint()関数を用いて浮動小数を整数に変換してやりましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/6542d32dcb" width="100%"></iframe>

```
調べたい整数 = 
for n in range (1, 調べたい整数 + 1):
    if 調べたい整数 % n == 0:
        割った相手 = 調べたい整数 / n
        print(str(n) + ' * ' + str(割った相手))
```

すでにお気づきかもしれませんが、上のコードの実行してみると、ある数を折り返し地点として同じ数字の組み合わせが重複して結果に表示されていますね。 

すこし数学を使って、表示させる組み合わせが重複しないように改良しましょう。 

折り返し地点となる数は、調べたい数の平方根なのですが、多くの場合ある数の平方根は整数ではありません。しかし、1から順に二乗していき、「調べたい整数」以上になった場合、「調べたい整数」の平方根を超えたということはわかります。つまり、1から順に整数aを二乗し、aを二乗した整数が「調べたい整数」を超えないものまでのaで「調べたい整数」を割っていけば、重複せずに約数を列挙できるということですね。 

文字だけでは分かりづらいので具体例として12という整数で見ていきます。 

12の約数は 

1, 2, 3, 4, 6, 12 

ですね。 

12の平方根は3.4641....という数なのですが、これよりも少しでも小さい数を二乗した値は12を下回り、少しでも大きい数を二乗した値は12を超えます。1から順に整数を二乗していき、その二乗した値が12を超えた時点(この場合は4*4 = 16)で、その整数(この場合は4)とその一つ前の整数(この場合は3)の間に平方根が存在することがわかります。 

この理屈を、while文を利用することでプログラムに組み込むことで、「調べたい整数」を超えない整数までの整数での割り算に限定することができます。

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/027a78b7fd" width="100%"></iframe>

```
調べたい整数 = 

a = 1
while a*a <= 調べたい整数:
    a = a + 1

for n in range (1, a):
    if 調べたい整数 % n == 0:
        割った相手 = int(調べたい整数 / n)
        print(str(n) + ' * ' + str(割った相手))
```

3行目でaという変数に1を代入し、 4行目と5行目では、aを二乗し、その数が「調べたい整数」以下なら、aという変数にaに1を足した整数を新たに代入するという作業を繰り返す ということを指定しています。 

ところで、いままでfor文で「調べたい整数」のあまりを計算するとき、 

```
for n in range (1, 調べたい整数 + 1):
```

という形でしたが、今回の7行目で`range(1,a+1)`ではなく`range(1,a)`となっています。なぜ`range(1,a)`となっているかというと、4、5行目の`while`文のおかげですでにaに「調べたい整数」の平方根を超える整数が代入されているからです。 

ちょっとややこしいですね。次からはもっと簡単です。 

次は、実行画面上に直接「調べたい整数」を打ち込めるようにします。 

このためには、`input()`という今まで出てきてない新しい関数を使います。 

ひとまず`input()`を使った例を見てみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/2cec51c562" width="100%"></iframe>

```
print('下に何かを入力してEnterを押してください。')
a = input()
print('↓あなたの入力↓')
print(a)
```

`input()`関数では、Pythonの通常モードのインタープリタ上でのユーザーの入力が()の中に入ります。この`input()`関数を用いることで「調べたい整数」をプログラムに直接書かず、実行画面上で指定できるようになります。 

それでは`input()`関数をプログラムに導入しましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/d0b0c54260" width="100%"></iframe>

```
print('整数を入力:')
調べたい整数 = input()

a = 1
while a*a <= 調べたい整数:
    a = a + 1

for n in range (1, a):
    if 調べたい整数 % n == 0:
        割った相手 = int(調べたい整数 / n)
        print(str(n) + ' * ' + str(割った相手))
```

上記のコードを実行して、実行画面に整数を入力するとエラーが出てしまいます。 

何が原因なのでしょうか。 

エラーメッセージを読んでみましょう。 

```
Traceback (most recent call last):
  File "/tmp/sessions/f47bbe25623fbd88/main.py", line 5, in <module>
    while a*a < 調べたい整数:
TypeError: '<' not supported between instances of 'int' and 'str'
```

最後の行に英語で 

「'<'というオペレータは'int'と'str'の関係には対応していません」 

と書いてありますね。 

「a*a」と「調べたい整数」のどちらかがintのデータでどちらかがstrのデータになってしまっているみたいです。 

「a*a」は今まで問題なく動いていたので「調べたい整数」がstr型データになっていると推測されます。 

そうなんです、<a href="https://docs.python.org/ja/3/library/functions.html#input">Pythonの公式サイトの組み込み関数の項目</a>にも書いてあるように、`input()`関数は入力を文字列に変換してしまうのです。今回のエラーの対処方法としては、自動で文字列に変換されたデータを`int()`関数を使って整数に戻せば大丈夫です。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/2289fec037" width="100%"></iframe>

```
print('整数を入力:')
調べたい整数 = int(input())

a = 1
while a*a <= 調べたい整数:
    a = a + 1

for n in range (1, a):
    if 調べたい整数 % n == 0:
        割った相手 = int(調べたい整数 / n)
        print(str(n) + ' * ' + str(割った相手))
```

「もっとやりたい人のために」で最初に見た例では次々と数字を入力することができました。これはループを無限に繰り返すように指定することで可能です。 

どのようにするかというと、プログラムに最初に、 

```
while True:
```

を追加するだけです。 

混乱の元になりかねないのでブール値の項では言及しませんでしたが、実は「True」はブール値としてTrueであり、「False」はブール値としてFalseなんです。 今回の無限ループの場合、whileの後のブール値がTrueでさえあれば良いので「True」の代わりに「1==1」、「10<12」なんかでも正しく作動します。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/8ea8531b75" width="100%"></iframe>

```
print('整数を入力:')
調べたい整数 = int(input())

a = 1
while a*a <= 調べたい整数:
    a = a + 1

for n in range (1, a):
    if 調べたい整数 % n == 0:
        割った相手 = int(調べたい整数 / n)
        print(str(n) + ' * ' + str(割った相手))
```

無限に入力可能になりましたね。 

このままではすこし見づらいので、一つのループが終了し、次のループが始まる前に改行されるようにコードを変えましょう。 さて、改行の仕方は今まで出てきていないのでやり方がわかりません。 そういうときどうするかと言うと、Googleに聞きます。 実はこれはかなり大事なことで、実際にプログラムを書いていく中で方法がわからないということが無数に出てきます。その方法を自力で探し出すスキルというのも必要なんです。 今回の場合は「Python 改行」あたりのキーワードで事足りそうですね。 

完成まであと少しですが、我々が指導するのはここまでにしておきます...! もちろん答えとなる完成形は用意していますが、あとは皆さんの力で、改行の方法を見つけ、コードに組み込んで、実践 1の有終の美を飾りましょう! 
### 答え 

*  Trinket版の答え: <a href="https://trinket.io/python3/9e21ce880f" target="_blank">https://trinket.io/python3/cd75cc6b61</a>
*  テキスト版の答え: [こちら](practice_1_final_answer)
