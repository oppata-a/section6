import React from "react";

//props（コンポーネントに渡す引数のようなもの）
export const ColorfulMessage = (props) => {
  //分割代入でpropsの表示を省略する
  const { color, children } = props;
  //スタイル定義
  const contentStyle = {
    //スタイルとオブジェクトが同一名称の場合は省略可
    color,
    fontSize: "18px"
  };
  //変数名を指定してメッセージを渡す場合
  // return <p style={contentStyle}>{props.messege}</p>;
  //タグで囲ってchildrenとしてメッセージを渡す場合
  return <p style={contentStyle}>{children}</p>;
};

//defalt exportの場合
// export default ColorfulMessage;
