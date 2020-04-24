---
id: practice_2_answer
title: 実践 2の答え
---

```
def prime_function(number):
    約数リスト = []
    for i in range(2, number):
        if number % i == 0:
            約数リスト.append(i)
    if len(約数リスト) == 0:
        print(number, 'は素数です!')
    else:
        print(number, 'は、1と'+str(number)+'以外に以下の約数を持っています。')
        print(約数リスト)

# 作った関数を使ってみます。
prime_function(456)
prime_function(4567)
prime_function(123)
```