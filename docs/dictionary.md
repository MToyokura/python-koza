---
id: dictionary
title: 辞書型データ
---

辞書型データはデータ型の一種で、リスト型データと同様、複数のデータを含むことができるデータ型です。ただしリスト型データと異なり、辞書型データ内の要素の一つ一つが、キー(key)と値(value)のペアで構成されています。キーは各要素の名前のようなもので、値がそのキーに紐付けられたデータと考えると良いでしょう。 

辞書型データは、 

```
{キー1: 値, キー2: 値, ...}
```

のように、`{}`の中に要素をカンマで区切って示します。それぞれの要素では、キーの後に「:」をつけ、その後に値を入れます。 

辞書型データのキーには多くの場合文字列あるいは数字を使います。辞書型データの値は、Pythonのデータ型であれば何でも大丈夫です。 

下は辞書型データの例です。 

```
>>> 辞書型データの例1 = {'おはよう': '朝にするあいさつ', 'こんにちは': '昼にするあいさつ', 'こんばんは': '夜にするあいさつ'}
>>> 辞書型データの例2 = {1: 'ね', 2: 'うし', 3: 'とら'}
```
##  辞書型データで使えるオペレータ 

辞書型データでは以下のオペレータを使うことができます。 
<table><tr><th> オペレータ </th><th> 意味 </th></tr><tr><td> [キー] </td><td> 指定したキーの値を取り出す </td></tr><tr><td> キー in 辞書 </td><td> 辞書の要素に、「キー」というキーがある場合`True`を返す </td></tr><tr><td> キー not in 辞書 </td><td> 辞書の要素に、「キー」というキーがない場合`True`を返す </td></tr></table>
それでは辞書型データにこれらのオペレータを使ってみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/aabc3d2675" width="100%"></iframe>

```
辞書型データの例1 = {'おはよう': '朝にするあいさつ', 'こんにちは': '昼にするあいさつ', 'こんばんは': '夜にするあいさつ'}

print(辞書型データの例1['こんばんは'])  # 夜にするあいさつ
print('おはよう' in 辞書型データの例1)  # True
print('おやすみ' not in 辞書型データの例1)  # True
```

[キー]のオペレータを使って「=」を使うことで、そのキーに紐づけられている値を変えることができます。[キー]が存在しない場合は新たに[キー]とその値を辞書型データの要素として追加することができます。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/5d9d0bbfa4" width="100%"></iframe>

```
d1 = {1: 'いち', 2: 'に', 3: 'さん', 4: 'し'}
print(d1[4])  # し

d1[4] = 'よん'
print(d1[4])  # よん

d1[5] = 'ご'
print(d1)  # {1: 'いち', 2: 'に', 3: 'さん', 4: 'よん', 5: 'ご'}
```

##  要素の削除 

辞書型データから要素を削除する場合は、`del`文、あるいは`pop()`メソッドを使います。 

### `del`文 

`del`文は、 

```
del d[キー]
```

という書き方をします。例を見てみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/d8366444ea" width="100%"></iframe>

```
d1 = {1: 'いち', 2: 'に', 3: 'さん', 4: 'よん'}
del d1[3]
print(d1)  # {1: 'いち', 2: 'に', 4: 'よん'}
```
### `pop()`メソッド 

`pop()`メソッドは、 

```
辞書型データ.pop(キー)
```

という書き方をします。`pop()`メソッドは辞書型データ内の要素を削除すると同時に、その値を`return`します。例を見てみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/e8541d48ea" width="100%"></iframe>

```
d1 = {1: 'いち', 2: 'に', 3: 'さん', 4: 'よん'}
a = d1.pop(3)
print(d1)  # {1: 'いち', 2: 'に', 4: 'よん'}
print(a)  # さん
```

##  その他メソッド 

### `keys()`メソッド 

`keys()`メソッドは、辞書型データのキーを列挙してくれます。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/833e0965cf" width="100%"></iframe>

```
d1 = {1: 'いち', 2: 'に', 3: 'さん', 4: 'よん'}
print(d1.keys())  # dict_keys([1, 2, 3, 4])
```

このメソッドによって返される値はリストと近いものですが、リストが受け付ける操作をすべて受け付けるわけではありません。たとえば、リストに対しては[n]によって左からn番目の要素を取り出すことができますが、辞書型データの`keys()`が返す値に対して同じことをしようとするとエラーが発生します。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/c60c53e69a" width="100%"></iframe>

```
d1 = {1: 'いち', 2: 'に', 3: 'さん', 4: 'よん'}
print(d1.keys()[0])    # (エラーが発生します)
```

そのような場合は`list()`関数を使うことで、`keys()`メソッドが返す値をリストに変換することができます。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/a785631246" width="100%"></iframe>

```
d1 = {1: 'いち', 2: 'に', 3: 'さん', 4: 'よん'}
print(list(d1.keys())[0])  # 1
```

### `values()`メソッド 

`values()`メソッドは、ある辞書型データの値を列挙してくれます。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/488438229e" width="100%"></iframe>

```
d1 = {1: 'いち', 2: 'に', 3: 'さん', 4: 'よん'}
print(d1.values())  # dict_values(['いち', 'に', 'さん', 'よん'])
```

こちらも先程の`keys()`メソッドと同様に、返される値はリストではないので、リスト型データに変換したい場合は`list()`関数を使います。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/aea33e20ac" width="100%"></iframe>

```
d1 = {1: 'いち', 2: 'に', 3: 'さん', 4: 'よん'}
print(list(d1.values()))  # ['いち', 'に', 'さん', 'よん']
```

その他にも使えるメソッドがたくさんあります。`help()`関数で確認してみましょう。 