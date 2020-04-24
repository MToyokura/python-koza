---
id: practice_1_final_answer
title: 実践 1の答え
---

```
while True:
    print('整数を入力:')
    調べたい整数 = int(input())

    a = 1
    while a*a <= 調べたい整数:
        a = a + 1

    for n in range (1,a):
        if 調べたい整数%n == 0:
            割った相手 = int(調べたい整数/n)
            print(str(n) + ' * ' + str(割った相手))
          
    print('\n')
```