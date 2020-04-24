---
id: stage_5
title: ステージ5：リスト、メソッド 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## リスト型データ 

リスト型データはデータ型の一種で、複数のデータを含むことができるデータ型です。リスト型データを構成するそれぞれのデータを要素と呼びます。 

リストは、 

```
[要素1, 要素2,...]
```

というように`[]`の中に要素をカンマで区切って示します。 

リスト型データの要素は、Pythonのデータ型であれば何でも大丈夫です。リストの中にさらにリストを入れることも可能です。 

下はリスト型データの例です。 

```
>>> リスト型データの例1 = [1, 2, 3]
>>> リスト型データの例2 = ['Hello', 'World', 'How', 'Are', 'You']
>>> リスト型データの例3 = [1, [2, 3, 4], [5, [6, 7, True], 'qwerty'], 'asdfg']
```

3つともちゃんと機能するリスト型データです。 

リスト型データでは以下のオペレータを使うことが可能です。 

<table><tr><th> オペレータ </th><th> 意味 </th></tr><tr><td> + </td><td> リストとリストをくっつける </td></tr><tr><td> * </td><td> 要素を繰り返す </td></tr><tr><td> [ n ] </td><td> 左からn番目の要素を取り出す </td></tr><tr><td> [ -n ] </td><td> 右からn番目の要素を取り出す </td></tr><tr><td> [ n : m ] </td><td> n番目からm番目までの要素を取り出す </td></tr><tr><td> in, not in </td><td> ある要素がリストに含まれているかどうかを判定する </td></tr><tr><td> == </td><td> リスト同士が完全に一致するかどうかを判定する </td></tr></table>

リスト型データにオペレータを使った例を見てみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/6843eebc8e?runOption=run" width="100%"></iframe>

```
買い物リスト = ['お米', 'カレーのルウ', '人参', '玉ねぎ', 'じゃがいも']

print(買い物リスト + ['鶏もも肉', '板チョコ'])
# ['お米', 'カレーのルウ', '人参', '玉ねぎ', 'じゃがいも', '鶏もも肉', '板チョコ']

print(買い物リスト + ['鶏もも肉']*3)
# ['お米', 'カレーのルウ', '人参', '玉ねぎ', 'じゃがいも', '鶏もも肉', '鶏もも肉', '鶏もも肉']

print(買い物リスト[2])
# 人参

print(買い物リスト[1:4])
# ['カレーのルウ', '人参', '玉ねぎ']

print('プリン' in 買い物リスト)
# False
```

リスト型データの要素は、「=」を使って書き換えることが可能です。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/00d25529c8?runOption=run" width="100%"></iframe>

```
買い物リスト = ['お米', 'カレーのルウ', '人参', '玉ねぎ', 'じゃがいも', '鶏もも肉']
print(買い物リスト)
# ['お米', 'カレーのルウ', '人参', '玉ねぎ', 'じゃがいも', '鶏もも肉']

買い物リスト[5] = '豚小間切れ肉'
print(買い物リスト)
# ['お米', 'カレーのルウ', '人参', '玉ねぎ', 'じゃがいも', '豚小間切れ肉']
```

上の例では、「買い物リスト」というリスト型データの6番目の要素である「鶏もも肉」を「豚小間切れ肉」に書き換えています。 

## メソッド(Method) 

メソッドとは、厳密な定義ではないですが、ここでは「あるデータ型に特有な関数」という認識で大丈夫でしょう。厳密な定義を解説するためには、「クラス」と「オブジェクト」というもう少し難しい概念について話す必要があるのですが、今の段階ではそこまで知る必要はないので割愛します。 

Pythonの開発者は、Pythonで扱えるそれぞれのデータ型で様々なメソッドを用意してくれています。 

メソッドは数値や文字列にも存在しますが、主にリスト型データや辞書型データ、タプル型データなど、複数の要素を含むデータ型で使われます。 

使い方は下のとおりです。 

```
あるデータ.〇〇()
```

メソッドの使い方は関数に似ていますが、関数の前にメソッドを施したいデータを書いて、「.」を書いた後にメソッドを書きます。`〇〇()`の部分は関数と同じで、()の部分に引数を与えます。 

リスト型データでよく使われるメソッドをいくつか見てみましょう。 

### `append()`メソッド 

`append()`メソッドは引数を1つだけとり、あるリスト型データの最後尾にその引数で与えられたデータを要素として追加します。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/80c82e101d" width="100%"></iframe>

```
mylist = [1, 2, 3, 4]

mylist.append(5)
print(mylist)  # [1, 2, 3, 4, 5]
```

### `insert()`メソッド 

`insert()`メソッドは引数を2つとり、1つ目の引数には整数、2つ目の引数にはデータをとります。 

```
あるリスト型データ.insert(2, ‘Hi’)
```

であれば、「あるリスト型データ」というリスト型データの3番目の要素に「’Hi’」という文字列データを挿入します。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/525a7775ff" width="100%"></iframe>

```
mylist = [1, 2, 3, 4]

mylist.insert(2, 'Hi')
print(mylist)  # [1, 2, 'Hi', 3, 4]
```

### `pop()`メソッド 

`pop()`メソッドは整数の引数を1つだけとり、引数として与えた番号に対応するリストの要素を削除します。この際、削除した要素が`return`されます。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/e00a3e7e16" width="100%"></iframe>

```
mylist = [1, 2, 3, 4, 5]

a = mylist.pop(2)
print(mylist)  # [1, 2, 4, 5]
print(a)  # 3
```

### `__len__()`メソッド 

関数とメソッドとで、見た目が違うだけで同じ処理を行うものもあります。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/18009afc81" width="100%"></iframe>

```
a = [1, 2, 3, 4, 5]

print(len(a))  # 5
print(a.__len__())  # 5
```

`__len__()`メソッドは、`len()`関数のようにリストの中の要素の数を数えてくれます。余談ですが、実は`len()`関数は、あるデータの`__len__()`メソッドを呼び出しているだけなので、`len()`は結局`__len__()`メソッドを行っているに過ぎません。`len()`関数がリスト型データ、文字列、辞書型データなど複数のデータ型で使うことができるのは、それぞれが同じく`__len__()`メソッドを持っているからなのです。 

## メソッド一覧の表示

それぞれのデータ型にはそれぞれで使えるメソッドがたくさんあります。あるデータがどのようなメソッドを持っているかを知りたい場合は、`help()`関数と`dir()`関数が便利です。`help()`関数と`dir()`関数に、引数としてデータを渡すと、`help()`関数ではそのデータ型で使用可能なメソッドの一覧とそれぞれの英語による説明、`dir()`関数ではそのデータ型で使用可能なメソッドの一覧を見ることができます。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/e993c6a8a6" width="100%"></iframe>

```
mylist = []

print(help(mylist))
# Help on list object:
#
# class list(object)
#  |  list() -> new empty list
#  |  list(iterable) -> new list initialized from iterable's items
#  |  
# ...

print(dir(mylist))
# ['__add__', '__class__', '__contains__', '__delattr__', '__delitem__', '__dir__', 
# ...
```
