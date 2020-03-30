# weekly-office-cleaning-notification-bot

| [日本語](https://github.com/yossiee/weekly-office-cleaning-notification-bot/blob/master/README.md) | [英語](https://github.com/yossiee/weekly-office-cleaning-notification-bot/blob/master/README_EN.md) |
| :---: | :---: |

## 概要
毎週月曜日にオフィスを掃除しますが、掃除当番グループが決まっており、グループは毎週順番に回していきます。
今回作ったのは、今週どのグループが担当なのかを毎週時間になると slack に通知するボットを作成しました。

<img alt="デモ" width="300" src="https://user-images.githubusercontent.com/38056766/75618359-506e5080-5bb0-11ea-8945-4710a729b51a.png">

## 依存ソフトウェア
- Google Account
- Git
- Node/npm

## アーキテクチャ
- Google サービス
    - Google Apps Script
    - Google スプレッドシート
    - Google カレンダー
- Slack APIs
    - [chat.postMessage](https://api.slack.com/methods/chat.postMessage)
- ローカル開発環境
    - [GitHub](https://github.com)
    - [clasp](https://github.com/google/clasp)

## 仕様
1. Google スプレッドシートにマスタデータが格納してあります。
2. データを取得して今週アサインされるグループに所属するユーザの slackID を取得します。
3. Google calendar API 本日が祝日かどうか調べます。Google が「日本の祝日」を公開しているのでそれを利用しています。
4. 本日が月曜日かつ祝日でない場合は、取得したユーザに対してメンションをつけたメッセージをチャンネルへ送信します。
5. 最後に、スプレッドシートにデータを保存して処理を終了します。

## `clasp` の使い方メモ
clasp とは、ローカル環境で Google Apps Script を実行できるプラットフォームです。<br>
[公式ドキュメント](https://developers.google.com/apps-script/guides/clasp) はこちらをご参照下さい。

```sh
# npm パッケージをグローバルインストールします。
$ npm install @google/clasp -g

# ログイン
$ clasp login
# ブラウザが開きどの Google アカウントで認証するか聞かれるので利用するアカウントを選択します。
# 認証に成功したら `~/.clasprc.json` にログイン情報が保存されます。

# ログアウト
$ clasp logout

# プロジェクトを作成
$ clasp create <project name> --rootDir ./src
Create new script https://script.google.com/d/xxxxxxxxxxxxxxxxxxxx
Cloned 1 file.
└─ appsscript.json

# 作成したプロジェクトのエディタをブラウザで開きます。
$ clasp open
```
