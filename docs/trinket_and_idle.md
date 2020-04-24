---
id: trinket_and_idle
title: trinketとIDLE
---

import useBaseUrl from '@docusaurus/useBaseUrl';

本サイトではtrinketというサービスを使うことでサイト上でPythonコードを書き、動かせるようになっています。しかし実際にパソコン上でコードを書く場合はtrinketではなくIDLEなどの統合開発環境(IDE)を使うことになります。統合開発環境とは、プログラムを書き、実行するためのソフトです。trinketも統合開発環境の一種ですが、使用はウェブサイト上に限定されます。 

ここではtrinketとIDLEがどのように対応しているかを解説していきます。 

なお、trinketのインタープリタについてはPython講座の[ステージ1](stage_1)や[ステージ3](stage_3)でも触れているので参照してください。 

## trinket 

trinketでは下の画像のように、左側にPythonプログラム本体、右側にインタープリタというように画面が隣り合って表示されている場合が多いです。 

<img alt="trinket" src={useBaseUrl('img/docs/trinket_and_idle/trinket.png')} />

「**▶ Run**」と書かれたボタンの右にある▼を押すと「**▶ Run**」と「**&gt;_ Console**」という2つの選択肢が出てきます。「**▶ Run**」を押すと右側の画面は通常モードのインタープリタとなり、「 **&gt;_ Console**」を押すと対話モードのインタープリタとなります。 

<img alt="trinket run" src={useBaseUrl('img/docs/trinket_and_idle/trinket_run.png')} />

左側に書いたコードを実行するには、「**▶ Run**」を押します。実行結果は右側に表示されます。 

※Trinketに日本語で直接入力しようとすると不具合が生じます。 

## IDLE 

IDLEには「**Shell**」と「**Editor**」の2つのモードがあります。「**Shell**」は対話モードのインタープリタで、「**Editor**」はコードを編集する画面です。trinketとの対比をすると、trinketの左側がIDLEの「**Editor**」、「**&gt;_ Console**」状態のtrinketの右側がIDLEの「**Shell**」と対応しています。 

IDLEを起動するとまずIDLEの「**Shell**」が起動します。 

<img alt="IDLE Shell" src={useBaseUrl('img/docs/trinket_and_idle/idle_shell.png')} />

IDLEの画面の左上の**File &gt; New File**を押すとIDLEの「**Editor**」を起動することができます。 

<img alt="IDLE New File" src={useBaseUrl('img/docs/trinket_and_idle/idle_new_file.png')} />

IDLEの「**Editor**」を起動すると下の画像のように、何も書かれていない画面が出てきます。この画面にプログラムを書きます。 

<img alt="IDLE Editor" src={useBaseUrl('img/docs/trinket_and_idle/idle_editor.png')} />

IDLEの「**Editor**」で書いたコードを**File &gt; Save As... **でPythonのファイルとして保存できます。 

<img alt="IDLE Save As" src={useBaseUrl('img/docs/trinket_and_idle/idle_save_as.png')} />

保存したコードは**Run &gt; Run Module**で実行することが可能です。 

<img alt="IDLE Run Module" src={useBaseUrl('img/docs/trinket_and_idle/idle_run_module.png')} />
