---
id: pass_break_continue
title: pass, break, continue
---

条件分岐やループで活躍する`pass`文、ループで活躍する`break`文、`continue`文を紹介します。 

## `pass`文 

`pass`文は、「何も処理を行わない」ことを指示します。下の例を見てみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/a3f83a5ffa" width="100%"></iframe>

```
for i in range(1, 6):
    if i == 3:
        pass
    else:
        print(i)
```

上のコードを実行すると、「1」から「5」の数字のうち「3」以外の数字が`print()`されます。 

コードの2、3行目の`if`文の中で`pass`文を使うことで、「『i』が『3』のときは何もしない」ようになっています。 

## `break`文 

`break`文はループを中断する際に使用します。下の例を見てみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/18f1da52c1" width="100%"></iframe>

```
a = 1
while True:
    print(a)
    if a == 10:
        break
    a += 1
```

このコードの4，5行目の`if`文とその中の`break`文がなければ実行画面上に永遠に数字を表示し続けます。`if`文の条件として「a == 10 のとき」と指定し、処理として`break`文を入れることで「a == 10 のとき」にループが中断されるようになります。 

## `continue`文 

`continue`文は、ループの中で使われる文です。ループの中に`continue`文があった場合、`continue`文以降のコードは無視され、次のループに入ります。下の例を見てみましょう。 

<iframe  allowfullscreen="" frameborder="0" height="356" marginheight="0" marginwidth="0" src="https://trinket.io/embed/python3/27bc3a58dc" width="100%"></iframe>

```
while True:
    print('ユーザー名を入力してください')
    name = input()
    if not name == '田中':
        print('無効なユーザー名です')
        continue
    print('田中さんこんにちは')
    break
```

この例では、「'田中'」という文字列が入力されるまで再入力を求め続けるコードです。 

1行目はおなじみの`while`を使った無限ループです。 

4行目はループ内の条件分岐です。`if`の中身は、「'田中'」という文字列でなければ、「無効なユーザー名です」と`print()`して`continue`することを指示しています。この`continue`によって7行目以降のコードは実行されず、現在実行されている`while`ループの先頭にもどります。 

入力された文字列が「'田中'」であった場合は、7行目と8行目が実行され、8行目の`break`文によってループが終了します。 