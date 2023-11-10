//eslintをファイル全体に対してoffにする場合
/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
//defalt exportの場合は{}なし
//exportの場合は{}必須。インポート名が一致しないとエラーになるので注意喚起となる
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  //State:各コンポーネント（画面要素）が持つ状態。変更されると再レンダリングされる
  //num:変数、setNum:Stateを更新する関数、useState(初期値)
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  //クリックしてフラグを切り替えるため「!：逆にする」をつける
  const onClickSwitchShowflag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //useEffect:第二引数[]の変更に限定して処理を行う（何も入れない場合は初回のみ処理を行う）
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslintを対象行だけoffにする場合
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    //returnのルール
    //内容が複数となる場合は()で囲い、さらに１つのタグで囲う
    <>
      {/* スタイルの設定：{}外側 JavaScript、内側 オブジェクト */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* 変数名を指定してメッセージ（props）を渡す場合 */}
      {/* <ColorfulMessage color="blue" messege="お元気ですか？" />
      <ColorfulMessage color="pink" messege="元気です" /> */}
      {/* タグで囲ってchildrenとしてメッセージを渡す場合 */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      {/* イベントの設定：関数を当てはめるときは{}とする */}
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowflag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>◤●ㅅ●◥</p>}
    </>
  );
};

//他でも使用することを宣言
//ファイル名をjsxとすることでコンポーネントであることを明示
export default App;
