---
id: and_or_not
title: and, or, not
---

ブール値に関わるオペレータとして、`and`, `or`, `not`を紹介します。 

これらのオペレータは、複数のブール値を使いたい場合や、逆のブール値を指定したい場合に用います。 

最初に`and`, `or`, `not`の概要を紹介し、次にこれらのオペレータに関わる`bool()`関数について解説し、後半でより詳しくそれぞれのオペレータを解説します。最後に`or`を使った応用を紹介します。 

##  概要 

###  and 

`and`オペレータは、`and`の両側のブール値が`True`である場合に`True`を、それ以外の場合に`False`を返します。 

```
>>> True and True
True
>>> True and False
False
>>> False and False
False
```

###  or 

`or`オペレータは、`or`の両側のブール値のうち一つ以上が`True`である場合`True`を、両方が`False`の場合`False`を返します。 

```
>>> True or True
True
>>> False or True
True
>>> False or False
False
```

###  not 

`not`オペレータは、`not`の後に来るブール値を逆のものに変えます。 

```
>>> not True
False
>>> not False
True
```

###  各オペレータの優先順位 

`and`, `or`, `not`オペレータは、 

1. not
1. and
1. or

の順番に処理されます。 

```
>>> True or False and not True
True
```

## `bool()`関数 

`bool()`関数は、Pythonの組み込み関数の一つで、与えられた引数をもとに`True`または`False`を返します。`Flase`を返すように指定されているものでなければ`True`が返されます。 

`Flase`を返すように指定されているものに、「None」、「0」、空の文字列「''」や空のリスト「[]」があります。 

```
>>> bool(None)
False
>>> bool('abc')
True
>>> bool('')
False
```

`bool()`関数については公式ドキュメントの<a href="https://docs.python.org/ja/3/library/functions.html#bool">組み込み関数</a>と<a href="https://docs.python.org/ja/3/library/stdtypes.html#truth">組み込み型</a>でより詳しく解説されています。 

## `and`, `or`, `not`のより詳しい解説 

###  and 

```
x and y
```

は、下の関数と同様の処理を行います。 

```
def and_operator(x, y):
    if bool(x) == False:
        return x
    else:
        return y
```

つまり、`bool(x)`が`False`ならばxの値が、`bool(x)`が`True`ならばyの値が返されます。 

###  or 

```
x or y
```

は、下の関数と同様の処理を行います。 

```
def or_operator(x, y):
    if bool(x) == False:
        return y
    else:
        return x
```

つまり、`bool(x)`が`False`ならばyの値が、`bool(x)`が`True`ならばxの値が返されます。 

###  not 

```
not x
```

は、下の関数と同様の処理を行います。 

```
def not_operator(x, y):
    if bool(x) == False:
        return True
    else:
        return False
```

つまり、`bool(x)`が`False`ならば`True`、`bool(x)`が`True`ならば`False`が返されます。 


## `or`を使った応用例 

`or`を使って条件分岐のようなことを行うことが可能です。下の例を見てみましょう。 

```
def name_function(あだ名=None, 本名=None):
    print((あだ名 or 本名 or '名無し') + 'さんこんにちは。')
```

この関数では、 

1行目で引数を2つとる関数を定義し、同時に引数のデフォルトの値を`None`に設定しています。`None`については今まで触れたことがありませんが、簡単に言うと「なにもない状態」を表します。 

2行目では`or`を使って関数の挙動を指定しています。 

この関数を使ってみます。 

```
>>> name_function('キリン', 'Giraffa camelopardalis')
```

と入力した場合は、 

```
あだ名 or 本名 or '名無し'
```

の処理が 

```
True or True or True
```
となり、「'キリン'」が返されます。 

```
>>> name_function(None, 'Giraffa camelopardalis')
```
と入力した場合は、 

```
あだ名 or 本名 or '名無し'
```
の処理が 

```
False or True or True
```
となり、「'Giraffa camelopardalis'」が返されます。 

```
>>> name_function()
```
と入力した場合は、 

```
あだ名 or 本名 or '名無し'
```
の処理が 

```
False or False or True
```
となり、「'名無し'」が返されます。 
