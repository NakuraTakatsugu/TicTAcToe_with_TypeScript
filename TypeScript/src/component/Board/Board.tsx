import { useState } from "react";
import { Square } from "../../component/Square";
import { SquareType } from "../../types/SquareType";
import { calculateWinner } from "../util/calculate";

export const Board: React.FC = () => {

  const [squares, setSquares] = useState<Array<SquareType>>(
    Array(9).fill(null)
  );

  const [xIsNext, setXIsNext] = useState<Boolean>(true);
  const handleClick = (i: number) => {
    const _squares = [...squares];

    // 勝者が決定した or 既に埋まっているマスにクリックした場合は何も起こらない
    if (calculateWinner(_squares) || _squares[i]) return;

    _squares[i] = xIsNext ? "X" : "O" ;
    setSquares(_squares);
    setXIsNext(!xIsNext);
  }

  const renderSquare = (i: number) => {
    //ES2015の引数分割束縛（MDNでは分割代入）のテクニックを利用。
    //コンポーネント思想には反することになりそう?
    return <Square value={squares[i]} onClick={() => handleClick(i) } />;
  };

  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = winner + "プレイヤーの勝利！";
  } else {
    status = "次は " + (xIsNext ? "X" : "O") + "プレイヤーの番です！"
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* 分割代入でpropsをSquareに渡している この方法がベター？ */}
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {/* 分割代入を使用しない場合 書きやすさでは分割代入に分がありそう*/}
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4) } />
        <Square value={squares[5]} onClick={() => handleClick(5) } />
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
