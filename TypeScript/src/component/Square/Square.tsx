import { SquareProps } from "../../types/SquareProps";

export const Square: React.FC<SquareProps> = (SquareProps) => {
  return (
    // 通常のpropsを使用する場合
    <button className="square" onClick={() => SquareProps.onClick()}>
      {SquareProps.value}
    </button>
  );
};

// 分割代入を使用する場合
export const Square1: React.FC<SquareProps> = ({ value ,onClick}) => {
  return (
    <button className="square" onClick={()=> onClick()}>{value}</button>
  )
};
