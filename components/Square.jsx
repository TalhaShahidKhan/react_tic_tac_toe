export default function Square({ value, onSquareClick }) {
  return (
    <>
      <button
        className="border border-gray-500 w-24 text-6xl font-bold h-24 m-1 "
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}
