---
id: practice_3
title: 実践 3
---

実践 3では、いままでの実践より少し難易度が高くなるので、一歩ずつチュートリアルのような形で進めていきます。 

実践 3は2つのセクションに分かれています。前半は既存の名簿に番号をつけるプログラムを作ります。後半は既存の日時一覧の一部をまとめて変更してくれるプログラムを書いていきます。 

## 前半: 番号付きの名簿 

下のような名前の一覧があり、一人ひとりに番号をつける必要があるとします。 

渡辺 恵美<br/>田中 舞 <br/>加藤 綾 <br/>高橋 千尋 <br/>山下 純子 <br/>藤田 拓也 <br/>鈴木 陽太 <br/>佐藤 康介 <br/>大木 直也 <br/>中本 哲史 

目的を達成させるための方法はいくつかありますが、今回はリストとメソッドを使ったコードを書いてみます。 

大きな流れは以下のようになります。 

*  名前をリストの要素として登録する 
*  それぞれの名前を`print()`する際に番号をつける 

まずはじめに、各名前をリストの要素として登録しましょう。 

複数行にわたる文字列を扱いたい場合、`'''`、あるいは`"""`で囲むと複数行にわたる文字列として認識されます。 

```
'''
渡辺 恵美
田中 舞
加藤 綾
高橋 千尋
山下 純子
藤田 拓也
鈴木 陽太
佐藤 康介
大木 直也
中本 哲史
'''
```

名前の一つ一つをリストの要素として登録したいので、名前一覧の改行を認識し、それに基づいて文字列を分割していく必要があります。 

まず何をするかというと、はGoogleで「python 文字列 分割」で検索します。 

検索の結果、`split()`メソッドというものが出てきたと思います。この`split()`メソッドは、与えた引数ごとに文字列分割してくれます。今回は改行ごとに分割したいので、`split()`メソッドの引数として、改行を意味する「'\n'」を与えます。(「'\n'」に関しては、[実践 1](practice_1)の「もっとやりたい人のために」を参照してください！) 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/d2436181ee" width="100%"></iframe>

```
names = '''
渡辺 恵美
田中 舞
加藤 綾
高橋 千尋
山下 純子
藤田 拓也
鈴木 陽太
佐藤 康介
大木 直也
中本 哲史
'''

names_list = names.split('\n')
print (names_list)
```

実行結果を見るとわかりますが、リストの最初と最後に空の要素が入っていますね。これは最初の'''の後と最後の'''の前にそれぞれ改行があるからです。これら2つの空の要素は必要ないのでリストから削除しましょう。リストの要素を消すには、`del`文あるいは`pop()`メソッドあるいは`remove()`メソッドを使います。今回は`del`文を使ってリストから削除します。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/a934e873e2" width="100%"></iframe>

```
names = '''
渡辺 恵美
田中 舞
加藤 綾
高橋 千尋
山下 純子
藤田 拓也
鈴木 陽太
佐藤 康介
大木 直也
中本 哲史
'''

names_list = names.split('\n')
del names_list[0]
del names_list[-1]

print(names_list)
```

しっかり削除されていますね。 

次は、`for`文と`range()`関数と`len()`関数を使ってリストの各要素の頭に番号をつけた文字列を作り、一つずつ`print()`しましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/be66403414" width="100%"></iframe>

```
names = '''
渡辺 恵美
田中 舞
加藤 綾
高橋 千尋
山下 純子
藤田 拓也
鈴木 陽太
佐藤 康介
大木 直也
中本 哲史
'''

names_list = names.split('\n')
del names_list[0]
del names_list[-1]

for i in range(len(names_list)):
    numbered_line = str(i+1)+'. '+names_list[i]
    print(numbered_line)
```

18行目では、`len(names_list)`でリストの要素を数え、`range()`関数で`for`ループの回数をリストの要素の数だけ行うことを指定しています。 

## 後半: 日付一覧の一部をまとめて変更 

次は、既存の日時一覧の一部をまとめて変更してくれるプログラムを書きます。 

所属しているスポーツクラブで、練習日程をメンバーに以下の日時でメールしたとします。 

8/02 17:00から <br/>
8/05 17:00から <br/>
8/12 17:00から <br/>
8/15 17:00から <br/>
8/22 17:00から <br/>
8/25 17:00から 

当初はは17:00からの予定でしたが、場所の都合で17:30開始に変更になってしまいました。そこで、今度は時間を17:30からに変更してもう一度メールを送りたいとします。 

そんなときに使えるPythonコードを書いてみます。 

プログラムの大きな流れは以下のようになります。 

*  各日時をリストの要素として登録する 
*  それぞれの「17:00から」を「17:30から」に書き換える 

プログラムの中身は先程の名簿に番号をつけるプログラムとあまりかわりません。 まずは各行をリストの要素として登録します。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/6f8b2f89d9" width="100%"></iframe>

```
days = '''
8/02 17:00から
8/05 17:00から
8/12 17:00から
8/15 17:00から
8/22 17:00から
8/25 17:00から
'''

days_list = days.split('\n')
del days_list[0]
del days_list[-1]
```

問題は、どうやってリストの各時間を変えるかですね。これも今までやったことないので、Googleで「python 文字列 置換」などのキーワードで検索してみましょう。 

どうでしょうか、`replace()`メソッドというものが出てきたかと思います。`replace()`メソッドは引数を2つとり、1つ目の引数が探し出す文字列、2つ目の引数が置き換える文字列を指定します。 

では`replace()`メソッドの1つ目の引数に「'00'」を、2つ目の引数に「'30'」を入れてさっそく使ってみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/20837fe7f0" width="100%"></iframe>

```
days = '''
8/02 17:00から
8/05 17:00から
8/12 17:00から
8/15 17:00から
8/22 17:00から
8/25 17:00から
'''

days_list = days.split('\n')
del days_list[0]
del days_list[-1]

for i in range(len(days_list)):
    replaced_line = days_list[i].replace('00', '30')
    print(replaced_line)
```

「17:00」が「17:30」に変わりましたね。 
