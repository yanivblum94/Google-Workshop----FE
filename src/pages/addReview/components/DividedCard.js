import "./DividedCard.css";

const DividedCard = (props) => {
  return (
    <div className="divided-card">
      <div className="divided-card_1sthalf">{props.children[0]}</div>
      <div className="vl"></div>
      <div className="divided-card_2ndhalf">{props.children.slice(1)}</div>
    </div>
  );
};

export default DividedCard;
