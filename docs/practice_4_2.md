---
id: practice_4_2
title: 実践 4(後半)
---

import useBaseUrl from '@docusaurus/useBaseUrl';


## モジュールの使い方 ～openpyxl編～

前半からのモジュール紹介の続きで、今度はopenpyxlの使い方から見ていきましょう。 

openpyxlの使い方に関する英語文書はありますが、日本語に翻訳されたものは現時点ではありません。 

openpyxlの使い方(英語): <a class="href" href="https://openpyxl.readthedocs.io/en/stable/">https://openpyxl.readthedocs.io/en/stable/</a>

openpyxlを使った次の例では、IDLEの対話型インタープリタを通じてエクセルのファイルを新たに作ります。 

特に指定しない限り、エクセルファイルはPythonが動いているフォルダ内に作成されるので、まずはじめにエクセルファイルを保存する場所を決めます。 

(下の手順は対話モードのインタープリタの作業ディレクトリを指定するために行っています。<a href="https://docs.python.jp/3/library/os.html#os.chdir">osモジュールのchdir()</a>でも可能ですので、そちらがやりやすい人は下の手順を飛ばしてもらって大丈夫です。) 

最初に、エクセルを保存するフォルダを決めておいてください。 

次に、IDLEを起動し、<b>File &gt; New File</b>を押し、新たに出てきたUntitledという画面の左上の<b>File &gt; Save As... </b>を押し、エクセルファイルを保存する場所と同じ場所を指定して適当な名前をつけて保存してください。 

<img alt="エクセルの保存場所" src={useBaseUrl('img/docs/practice_4_2/excel_location.png')} /> 

保存したらフォルダを開き、pythonファイルを右クリックすると、<b>Edit with IDLE</b>という選択肢があると思います。それをクリックしてください。 

<img alt="Edit with IDLE" src={useBaseUrl('img/docs/practice_4_2/edit_with_idle.png')} /> 

クリックしたら、出てきた画面の上にある<b>Run &gt; Python Shell</b>を押すと対話モードのインタープリタが起動します。 
<img alt="Shellの実行" src={useBaseUrl('img/docs/practice_4_2/run_shell.png')} /> 

これで準備が整いました。 

それでは今起動している対話モードのインタープリタに下のコードを打ち込んでみましょう。 

```
>>> from openpyxl import Workbook
>>> wb = Workbook()
>>> ws = wb.create_sheet('NewSheet')
>>> ws['A1'] = '団体名'
>>> ws['B1'] = 'リンク'
>>> wb.save('テスト用.xlsx')
```

エクセルファイルを保存するために用意したフォルダを見てみましょう。「テスト用」という名前のエクセルが作成されていると思います。1枚目のシートは白紙ですが、2番目のシートを見てみると、下の画像のように、A1とB1のセルに文字が書かれているはずです。 

<img alt="コード実行後のExcel" src={useBaseUrl('img/docs/practice_4_2/excel.png')} /> 

先程のコードの解説をします。 

1行目ではopenpyxlからWorkbookモジュールをインポートしています。 

2行目では`Workbook()`メソッドを使って新しいエクセルを作成しています。目には見えませんが、実は2行目を書いた時点で新しいエクセルのファイルがPythonによって作られています。 

3行目では`create_sheet()`メソッドを使って「NewSheet」という名前の新しいエクセルシートを作っています。 

4、5行目では、A1のセルに「団体名」、B1のセルに「リンク」という文字列を書き込んでいます。openpyxlでは、セルにアクセスする際は`ワークシート['セル']`という書き方をします。 

6行目では、`save()`メソッド作成されたエクセルファイルを「テスト用.xlsx」という名前で保存しています。エクセルファイルが保存される場所は、特に指定をしない場合はPythonが動いているフォルダになります。 

## プログラムを書く 

道具は揃いましたね。 

次は実際にプログラムを書いていきましょう。 
### プログラムのイメージ 

今回作るプログラムは、以下のような手順を踏みます。 

1. モジュールをインポートする 
1. openpyxlで新しいエクセルファイルを作成する 
1. SDGsは全部で17個あるので、for文を使って17回、以下の4～7の作業を繰り返す 
1. 「Goal○○」というシートを新たに作る 
1. Requestsを使って○○番目のゴールのURLにアクセスし、内容を取得する 
1. BeautifulSoupを使って取組事例の団体名とリンクを抽出する 
1. openpyxlを使って団体名とリンクをエクセルに書き込む 
1. エクセルを保存する 

#### 1. モジュールをインポートする 

`import`を使ってモジュールをインポートします。 

```
import requests
from bs4 import BeautifulSoup
from openpyxl import Workbook
```

#### 2. openpyxlで新しいエクセルファイルを作成する 

```
wb = Workbook()
```

#### 3. SDGsは全部で17個あるので、for文を使って17回以下の作業を繰り返す 

`for`を使ってSDGs17個分繰り返す作業を指定します。 

```
for i in range(1, 18):
```

これ以降のコードは「8. エクセルを保存する」まで全てforの中のコードになります。 

#### 4. 「Goal○○」というシートを新たに作る

```
    ws = wb.create_sheet('Goal' + str(i))
```

#### 5. Requestsを使って○○番目のゴールのURLにアクセスし、内容を取得する 

```
    url = 'https://www.mofa.go.jp/mofaj/gaiko/oda/sdgs/case/goal' + str(i) + '.html'
    result = requests.get(url)
    pagecontent = result.content
```

#### 6. BeautifulSoupを使って取組事例の団体名とリンクを抽出する

サイトのHTMLのdivタグを見ると、ゴールの番号によってidが変わっているため、それに対応するようにidの名前にforループのiの値を取るように指定します。 

```
    soup = BeautifulSoup(pagecontent, 'html.parser')
    soup_div = soup.find('div', {'id': 'goal_' + str(i)})
```

#### 7. openpyxlを使って団体名とリンクをエクセルに書き込む 

エクセルの何行目に書き込むかを管理するために「rownum」という変数を用意し、1という数字を代入しておきます。「rownum」の数字は団体名とリンクが書き込まれる行を表します。 

```
    rownum = 1
```

先程の6番目の手順で得た、「soup_div」からリンク部分を抽出したものはリスト型データとして返されます。そのリスト中に存在する一つ一つの要素をエクセルに書き込むために`for`文を使います。 

ただし、`find_all()`した後のリストを見るとわかりますが、この要素の中には取組事例ではない、ウェブページ内の特定の場所にジャンプするためのリンクが含まれています。このジャンプするためのリンクには「#」が使われているので、`if`文を使い、リンクに「#」を含むものと含まないものを選別します。リンクに「#」を含まないものはエクセルに書き込むようにします。 

ある行への企業名とリンクの書き込みが終わるたびに、次の企業名とリンクが次の行に書き込まれるようにするために「rownum」の値を1増やします。 

```
    for link in soup_div.find_all('a'):
        if '#' not in link.get('href'):
            ws['A' + str(rownum)] = link.text
            ws['B' + str(rownum)] = link.get('href')
            rownum = rownum + 1
```

#### 8. エクセルを保存する 


```
wb.save('SDGs_companies.xlsx')
```


## 完成

以下がコードの全貌です。 

```
import requests
from bs4 import BeautifulSoup
from openpyxl import Workbook

wb = Workbook()

for i in range(1, 18):
    ws = wb.create_sheet('Goal' + str(i))
    url = 'https://www.mofa.go.jp/mofaj/gaiko/oda/sdgs/case/goal' + str(i) + '.html'
    result = requests.get(url)
    pagecontent = result.content
    soup = BeautifulSoup(pagecontent, 'html.parser')
    soup_div = soup.find('div', {'id': 'goal_' + str(i)})
    rownum = 1

    for link in soup_div.find_all('a'):
        if '#' not in link.get('href'):
            ws['A' + str(rownum)] = link.text
            ws['B' + str(rownum)] = link.get('href')
            rownum = rownum + 1

wb.save('SDGs_companies.xlsx')
```

プログラムを保存して実行すると、プログラムが保存されているフォルダ内に「SDGs_companies.xlsx」というエクセルファイルが出現し、それを開いてみると、Goal1からGoal17まで書き込まれているはずです。 

余力があれば、プログラムを少し拡張して1つ目のシートを自動的に削除されるようにしたり、それぞれのシートの1行目にゴールの番号とゴールの内容を記述するようにしてみたりするとかなり勉強になると思います！ 
