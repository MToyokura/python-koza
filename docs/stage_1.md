---
id: stage_1
title: ステージ1：インタープリタ、データ型、オペレータ
---

import useBaseUrl from '@docusaurus/useBaseUrl';

さて、プログラムを書きはじめる前に、Pythonインタープリタについて少し解説します。

「[はじめに](introduction)」で、コンピューターがPythonで書かれたプログラムに従って動くといいましたが、実際にPythonプログラムをコンピューターに実行させるためには、Pythonプログラムをコンピューターが処理しやすい形に変換する必要があります。この変換を施すためのソフトが「インタープリタ」です。このPythonインタープリタはパソコンを買った時点では備わっていません。ですので、みなさんのパソコンでPythonのプログラムを実行するためにはインタープリタをパソコンにインストールしておく必要があります。 

インタープリタには、通常モード（正式な名前はありませんが、仮にこう呼ぶことにします）と対話モードの2つのモードがあります。通常モードのインタープリタは、起動すると直ちにPythonプログラムを読み込み、それを最初から最後まで一気に実行します。一方、対話モードのインタープリタは、起動すると何もせずに待機状態に入ります。そして、ユーザーが何かプログラムを入力する度に、その実行結果を表示します。このサイトでは、最初のうちは後者の対話モードを使ってPythonを学習していきます。 

インタープリタをパソコンにインストールするのは初心者には少しわかりにくいかもしれません。そこで、このサイトではインタープリタをインストールしなくてもPythonを学べるよう、サイト上からPythonプログラムを実行できるようになっています。しかし、後半に入るとインタープリタがパソコンにインストールされていないと取り組めない部分が出てきます。やる気が出たときにインタープリタのインストールに挑戦してみてください。インストールの手順は[こちら](installing_python)で解説しています。 

また、Pythonをインストールすると、Python用の統合開発環境であるIDLEが使えるようになります。統合開発環境とは、プログラムを書き、実行するためのソフトです。このサイトで使っているTrinketも簡単な統合開発環境です。TrinketとIDLEはほぼ同じと考えて良いのですが、見た目が少し違います。TrinketとIDLEがどのように対応しているかは[こちら](trinket_and_idle)で解説しています。 

突然専門用語がたくさん出てきて混乱している人もいると思いますが、わからなくてもプログラム自体は書けるので大丈夫です。しばらくしてから理解できたりもするので、後で見返すのもいいかもしれません。 

## インタープリタを知ろう 

最初は、もっぱら対話モードのインタープリタを使っていきます。 

```
>>> Pythonのコードだよ
```

このように「&gt;&gt;&gt;」で書かれたコードは対話モードのインタープリタ上で書くコードを表現していきます。実際にインタープリタに入力する際は、「&gt;&gt;&gt;」は自動でつくので自分で入力する必要はありません。 

それでは、とりあえず下のインタープリタに 

```
>>> 1+2
```

と半角数字と半角記号で入力して、Enterキーを押してみましょう。 
<iframe src="https://trinket.io/embed/python3/b16b78e665?outputOnly=true&runOption=console&start=result" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

```
>>> 1+2
3
```

このような結果が表示されたと思います。この数字は、Pythonが1+2というコードを見て、コンピューターで1+2を計算して、返してくれた結果です。対話モードのインタープリタは、書いたコードをその場で処理して結果を返してくれます。 

:::note
### 角文字と半角文字 

<table><tr><th>全角</th><th>半角</th></tr><tr><td>Ｔｙｐｏｇｒａｐｈｙ</td><td>Typography</td></tr><tr><td>１２３４５</td><td>12345</td></tr><tr><td>＋－／（）</td><td>+-/()</td></tr></table>

これらは、左が全角文字で、右が半角文字です。 

わたしたち人間からすると同じ文字だと判別できますが、コンピューターでは全く別のものとして認識されます。全角の記号でコードを書いてしまうとプログラムが動かなくなる場合が多いので、半角を使うことを意識しましょう。 
:::

## データ型(Data Types) 

Pythonが処理できるデータにはいくつ種類があり、それぞれを「データ型」と呼びます。 データ型には以下のようなものがあります。 

**数値**：整数(Integer)、小数(Floating-point numbers) 

**その他**：文字列(String), リスト型データ(List), 辞書型データ(Dictionary)、タプル型データ(Tuple)、ブール値(Boolean) 

これらのデータ型のうち、整数、小数、文字列、リスト型データについては後ほど詳しく見ていきます。 

これら以外にもPythonで使えるデータ型はありますがここでは取り扱いません。興味ある方は調べてみると良いでしょう。 

## オペレータ(Operator) 

オペレータは、Pythonにデータの関わり方を伝えます。 

データ型によって使えるオペレータや、使い方が異なります。 

+, -, /, *, ==, &lt;,&gt;, and, or, not, is, is not, in, not, in などがあります。 

オペレータを現段階で全て覚える必要はありません。ただ、「あるオペレータ使えばたしかこんなこともできたよなー」ということは頭に入れておくと良いと思います。 

## 整数と小数 

「整数」と「小数」は、それぞれデータ型の一種です。Pythonで書かれたのプログラム上で整数があった場合、Pythonインタープリタは、「これは整数だ！」と認識します。また同様に、プログラム上に小数点を含む数字があった場合、Pythonインタープリタは、「これは小数だ！」と認識します。小数は、Pythonでは厳密には浮動小数と呼ばれますが、そこは気にしなくていいです。 

整数と小数で使えるオペレータには以下のようなものがあります。 
<table><tr><th>オペレータ</th><th>意味</th></tr><tr><td>+</td><td>足し算</td></tr><tr><td>-</td><td>引き算</td></tr><tr><td>*</td><td>掛け算</td></tr><tr><td>/</td><td>割り算</td></tr><tr><td>%</td><td>割ったあまり</td></tr><tr><td>**</td><td>階上</td></tr><tr><td>//</td><td>割って切り捨て</td></tr><tr><td>&lt;, &gt;, &lt;=, &gt;=, ==, など</td><td>大小の比較、値の一致など(後のブール値の解説で詳しくみます)</td></tr></table>
それでは、整数と小数とオペレータを使って遊んでみましょう。 

下のインタープリタに、一行目に書かれたコードを参考に、数字とオペレータを使ってコンピューターに簡単な計算をさせてみてください。 

<iframe allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/085f573276?outputOnly=true&amp;runOption=console&amp;start=result&amp;runMode=console" width="100%"></iframe>

## 文字列 

文字列はデータ型の一種で、文字通り「文字」のデータです。プログラム内の他の文字と区別するために、「'」あるいは「"」で閉じて文字列であることを示します。 

文字列で使えるオペレータには以下のようなものがあります。 
<table><tr><th>オペレータ</th><th>意味</th></tr><tr><td>+</td><td>文字列をくっつける</td></tr><tr><td>*</td><td>文字列を繰り返す</td></tr><tr><td>[ n ]</td><td>左からn番目の文字を取り出す</td></tr><tr><td>[-n]</td><td>右からn番目の文字を取り出す</td></tr><tr><td>[ n : m ]</td><td>n番目からm番目までの文字を取り出す</td></tr><tr><td>in, not in</td><td>ある文字列がもう片方の文字列に含まれているかどうかを判定する(後のブール値の解説で詳しくみます)</td></tr><tr><td>==</td><td>ある文字列がもう片方の文字列と一致するかどうかを判定する(後のブール値の解説で詳しくみます)</td></tr></table>

:::note
### Pythonで数を数える

Pythonで数字を数えるときは0から始める場合が多いです。 

また、終わりの数を指定するときは「その数未満」という形で表記する場合が多いです。 
:::

それでは、文字列とオペレータを使って遊んでみましょう。 

下は対話モードのインタープリタに入力した画面を再現しています。 

```
>>> '皆さん' + 'こんにちは'
'皆さんこんにちは'
>>> 'あ' + 'は' * 4
'あはははは'
>>> '皆さんこんにちは' [2]
'ん'
>>> '皆さんこんにちは' [3:8]
'こんにちは'
>>> '皆さん' in '皆さんこんにちは'
True
```

今度は下のインタープリタに、上のコードを参考に、文字列とオペレータを使ってコンピューターに簡単な処理をさせてみましょう。 
<iframe allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/5a781fd17a?outputOnly=true&amp;runOption=console&amp;start=result&amp;runMode=console" width="100%"></iframe>

## 変数(Variable) 

変数とは、プログラムで扱うデータを一時的に入れておく「箱」 です 。変数にデータを入れ、Pythonに渡すと、Pythonは箱の中身を見てくれます。変数にデータを入れることを「変数にデータを代入する」と言います。 

変数にデータを代入する際は、 

```
変数 = データ
```

というように「=」を挟んで左側に箱の名前、右側にデータという書き方をします。 

変数は半角英数字以外の、漢字やひらがなでも大丈夫です。（大丈夫ですがほとんどの場合、英数字を用います。）

逆に、単体の数字や、特定の文字列(後で出てくるin, for など)は使えません。 

変数に対して使えるオペレータは、中に入っているデータ型に対応します。 

それでは、変数に整数を指定して遊んでみましょう。 
<iframe allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/6f0bf51457?outputOnly=true&amp;runOption=console&amp;start=result&amp;runMode=console" width="100%"></iframe>

```
>>> 変数1 = 23
>>> 変数2 = 45
>>> 変数1 + 変数2
68
```

上の例では、 

1行目で「変数1」という変数に「23」という整数を入れ、 

2行目では「変数2」という変数に「45」という整数を入れ、 

3行目で「変数1」と「変数2」を「+」というオペレータで処理してください、 

という指示をPythonに出しました。するとPythonは「変数1」と「変数2」にそれぞれ入っている整数を見て、足し合わせて返してくれました。賢いですね。 

同じデータを複数回使う場合において、変数を使うことで毎回データそのものを書く必要がなくなるので便利です。 

対話モードのインタープリタでは、「&gt;&gt;&gt;」のあとに変数の名前を入力すると変数の中身を表示してくれます。 
<iframe allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/973bbdc563?outputOnly=true&amp;runOption=console&amp;start=result&amp;runMode=console" width="100%"></iframe>

```
>>> 変数 = 'あいうえお'
>>> 変数
'あいうえお'
```

上の例では、 

1行目で「変数」という変数に「'あいうえお'」という文字列を入れ、 

2行目で「変数」と入力することで中身を呼び出しています。 

3行目は呼び出された「変数」の中身です。 

変数は指定するたびに上書きされます。つまり、箱の中身は新しいものに入れ替わります。 
<iframe allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/c4e8568a5d?outputOnly=true&amp;runOption=console&amp;start=result&amp;runMode=console" width="100%"></iframe>

```
>>> 変数1 = 5
>>> 変数1
5
>>> 変数1 = 10
>>> 変数1
10
>>> 変数1 = 変数1 + 7
>>> 変数1
17
```

上の例では、 

1行目で「変数1」に「5」という数字を入れ、 

2行目で「変数1」を呼び出しています。 

3行目はその結果です。 

4行目では、「変数1」に「10」という数字を指定し、上書きしています。 

5行目では新「変数1」を呼び出しています。 

6行目はその結果です。 

7行目では、「変数1」に「変数1」に7を足した値を指定しています。このように、 = の両側に「変数1」が入っている場合は右側の「変数1」にはもともと入っていたデータが適用され、左側の「変数1」には、右側の「変数1」を使った処理が終わったものが指定されます。つまり、今回の場合はもともと「変数1」には4行目の「10」という整数が入っていて、7行目では「10」と「7」を足し合わせたものが新たに「変数1」として指定されます。 

8行目で「変数1」を呼び出しています。 

9行目はその結果です。