type Props = {
  title?: string;
  children?: React.ReactNode;
};
const Card = ({ title, children }: Props) => {
  return (
    <div className="py-2 w-80 mx-auto">
      <h2 className="text-center text-xl font-bold pb-2">{title}</h2>
      <div className="">{children}</div>
    </div>
  );
};

export default Card;
