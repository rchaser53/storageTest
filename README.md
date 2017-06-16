# storageTest
sessionStorageの説明とか

# 伝えたいこと
   sessionStorageの仕様

    - タブ、ウィンドウごとにobjectを保持できること
    - 画面の更新や遷移をしてもobjectが保持できること
    - タブ、ウィンドウを閉じるとobjectが消去されること
    - ５MB以上情報を入れると「例外」を投げること

# コマンド
  基本的な挙動

    npm start

  ５MB以上情報を入れると「例外」を投げることの確認

    npm startの後、http://localhost:3000/killStorage」に遷移すること(urlベタ打ちでOK)