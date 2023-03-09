type CardType = {
  mouseEnter: (t: string) => void;
  mouseLeave: () => void;
};

export default function Card({ mouseEnter, mouseLeave }: CardType) {
  return (
    <div
      className="w-[200px] h-[200px] bg-orange-500"
      onMouseEnter={() => mouseEnter("T")}
      onMouseLeave={mouseLeave}
    >
      Card
    </div>
  );
}
