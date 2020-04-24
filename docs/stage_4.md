---
id: stage_4
title: ステージ4：関数を作る
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## 引数(Arguments) 

今まで関数を使うとき、`○○()`の()の中には変数あるいはデータをひとつだけ入れてきました(`range()`関数を除いては)。この()に入る変数やデータを、その関数に与える引数と呼びます。実は関数によっては複数の引数を扱うことができます。例えばいままで使ってきた`print()`関数も複数の引数を扱うことができます。下の例を見てみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/b481be4eac" width="100%"></iframe>

```
a = 'Hello'
b = 'World.'
c = 'Happy'
d = 'coding,'
e = 'everyone.'

print(a, b, c, d, e)
```

`print()`関数では、複数の引数の中身をスペースで区切って連続して`print()`してくれます。 

ステージ3や実践 1で出てきた`range()`関数も複数の引数を扱う関数です。引数を1つだけ与えた場合は「0以上、ある数未満」の整数のデータの集まりができ、引数を2つ与えると、「ある数以上、ある数未満」の整数のデータの集まりができます。さらに、3つ目の引数を与えると、その数から1引いた数字おきの整数のデータの集まりをつくることができます。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/baa26d4d4e" width="100%"></iframe>

```
print('↓0以上6未満')
for i in range(6):
    print(i)
  
print('↓3以上8未満')
for j in range(3, 8):
    print(j)

print('↓1以上21未満2つおき')
for k in range(1, 21, 3):
    print(k)
```

Pythonに組み込まれている関数の、どの関数が何個の引数を扱えるか、またそれぞれの引数がどんな役割を果たすかについては<a href="https://docs.python.org/ja/3/library/functions.html" target="_blank">https://docs.python.org/ja/3/library/functions.html</a>で確認することができます。 

## パラメータ(Parameters) 

パラメータとは、関数の引数を受け取る部分です。次の関数の作成で見ていきますが、関数が呼び出された場合、指定されたパラメータに引数が渡されるという動きをします。「パラメータ」と「引数」という単語は、それぞれが区別されずに使用されている場合がよくありますが、ここでは混乱を避けるためにこれらを区別して使っていきます。 

## 関数の作成 

今まではすでに用意されている関数を使ってきましたが、今度は自分で関数を作ります。関数を作るときは`def`文を使います(defは”define”=「定義する」の略)。 

`def`文は下のような書き方をします。 

```
def 関数の名前(パラメータ1, パラメータ2, ...):
    処理
```

関数の名前は変数と同じ方法でメモリ上に記憶されるため、関数の名前を指定するときには注意が必要です。関数の名前をすでに存在する変数と同じにしてしまうと、変数は新しく定義した関数に上書きされてしまいます。逆に、関数を定義した後に関数の名前と同じ変数を作ってしまうと、関数が失われ、変数に上書きされてしまいます。 

早速関数を作ってみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/2bb4f36afa" width="100%"></iframe>

```
def こんにちはを言うだけの関数():
    print('こんにちは')

こんにちはを言うだけの関数()
こんにちはを言うだけの関数()
こんにちはを言うだけの関数()
```

上の例では、1行目では「`こんにちはを言うだけの関数()`」という関数を作っています。この関数は引数が渡されることはないのでパラメータは指定せずに()を空にしています。2行目で関数に「『こんにちは』を`print()`する」という処理を指定しています。4～6行目では関数を呼び出しています。コードを実行してみると、4～6行目の関数が実行され、画面上に「こんにちは」が3回呼び出されるのが確認できますね。 

次は引数を受け取る関数を作ってみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/89ac7b3080" width="100%"></iframe>

```
def ある数を10倍にする関数(引数):
    print(引数*10)

ある数を10倍にする関数(2)
ある数を10倍にする関数(10)
ある数を10倍にする関数(123)
```

上の例では「`数を10倍にする関数()`」という関数を作っています。この関数は数字を引数として受け取るので、パラメータを一つ「(引数)」として指定しています。 

2行目で「パラメータに渡された引数に10を掛けた値を`print()`する」という処理を指定しています。 

4～6行目では関数を呼び出しています。それぞれ呼び出すときに、「(引数)」の部分にパラメータに渡したい引数を指定しています。 

コードを実行してみると、4～6行目の関数が実行され、10倍されて`print()`されているのが確認できますね。それぞれで指定した引数がしっかりパラメータに渡されているようです。 

ちなみにdef文はその関数が呼び出される前なら何行目に書いても良いのですが、慣例的にコードの最初にまとめて書くことになっています。 

### 変数を使った関数の作成 

関数を作成する際、関数の中身でも変数を使うことができます。 

下の例を見てみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/253896fd33" width="100%"></iframe>

```
def myfunction(arg_1, arg_2):
    if arg_1 >= arg_2:
        var_1 = arg_1 - arg_2
    elif arg_1 < arg_2:
        var_1 = arg_2 - arg_1
  
    print(var_1 * 5)

myfunction(10, 6)
```

上の例では、「2つの数字の大きい方から小さい方を引いた値に5を掛ける」関数を作って、最後にその関数を呼び出しています。 

1行目から7行目にかけて「`myfunction()`」という関数を定義しています。 

1行目では、関数の名前を「`myfunction()`」とし、2つのパラメータを「arg_1」と「arg_2」としています。 

最終的には大きい方から小さい方を引いた値に5を掛けたいので、そのためには引数として与えられた2つの数字(「arg_1」と「arg_2」)のどちらが大きくてどちらが小さいかをまず判断しなければなりません。 

2、3行目では、「arg_1」が「arg_2」以上のとき、「arg_1 - arg_2」の値を「var_1」という変数に入れるように指示をしています。 

4、5行目では、「arg_1」が「arg_2」より小さい場合は「arg_2 - arg_1」の値を「var_1」という変数に入れるように指示しています。 

7行目では、「var_1」の値に5を掛けたものを`print()`するように指示をしています。 

9行目で、10と6を引数に`myfunction()`の関数を呼び出しています。 

実行画面を確認すると、正しく動いているのがわかります。 

### 関数の中の変数について 

さて、先程の例に「`print(var_1)`」という行を最後に追加して実行してみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/a927db7a4c" width="100%"></iframe>

```
def myfunction(arg_1, arg_2):
    if arg_1 >= arg_2:
        var_1 = arg_1 - arg_2
    elif arg_1 < arg_2:
        var_1 = arg_2 - arg_1
    
    print(var_1 * 5)

myfunction(10, 6)
print(var_1)
```

エラーが発生してしまいましたね。 

```
Traceback (most recent call last): File "/tmp/sessions/0b8e6a67de060072/main.py", line 10, in print(var_1)NameError: name 'var_1' is not defined
```

つまり「var_1」が見当たらないということです。いままでの感覚からすると、`print(var_1)`をすると、10から6引いた値の4が表示されそうな気がしますが、そうはなりません。なぜならば、`def`文の中身は、def文の外とは隔離されたものとして扱われるからです。つまり`def`文の中で代入した変数は`def`文の外には出ていかず、`def`文の外から`def`文の中の変数を呼び出そうとしても見つからずにエラーになってしまいます。逆に、`def`文の中の変数は`def`文の外には出ていかないということは、`def`文の中の変数の名前が`def`文の外にある変数とかぶっていても、コードが見づらくなるだけで、実行上は問題ないのです。 

例を見てみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/cf650c435a?runOption=run" width="100%"></iframe>

7、8行目で代入した「変数1」と「変数2」が、10行目の`myfunction()`関数によって上書きされることなく、11、12行目でそれぞれ`print()`されているのがわかります。 

`def`文の中に存在する変数をローカル変数、`def`文の外に存在する変数をグローバル変数と呼びます。 

#### 補足 

実は`def`文の中からグローバル変数を呼び出すことはできます。しかし、その変数に新しいデータを代入することはできません。 

呼び出すことはできても、 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/a9bbe790d9" width="100%"></iframe>

```
def myfunction():
    print(a + 1)

a = 3
myfunction()
```

新たに代入することはできない。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/61b67da7f2" width="100%"></iframe>

```
def myfunction():
    a = a + 1
    print(a)

a = 3
myfunction()
```

### `return`文 

`return`文は、関数を定義する際に使える文で、関数の内部のコードで得られたデータの値を"返して"くれます。 

`return`文は下のような書き方をします。 

```
return データ
```

今までの文とは違い、最後にコロンはつきません。 

イメージがつかみづらいと思うので`return`文を使った簡単な例を見てみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/7dcc242631" width="100%"></iframe>

```
def myfunction(arg1):
    new_value = arg1 + 7
    return new_value
  
a = 3
b = myfunction(a)
print(b)
print(a + b)
```

1行目から3行目で、関数を定義しています。 

2行目では、関数に渡された引数に7を足し、「new_value」という変数にその値を代入するように指示しています。 

3行目では、2行目で得られた「new_value」を`return`するように指示しています。 

5行目では、「a」という変数に「3」という値を代入しています。 

6行目では、`myfunction()`に引数として「a」を渡し、`return`された値(「10」という整数)を「b」という変数に代入しています。 

7行目では、「b」の値を`print()`しています。 

8行目では、「a」と「b」を足し合わせた値を`print()`しています。 

このように、今までは直接関数を通じて得られた結果を`print()`していましたが、`return`を使うことで、関数を通して得られた値をコード内で使用できるようになります。 

関数を通して`return`された値を「戻り値」や「返り値」と表現します。 