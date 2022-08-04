import './ColumnCard.css'

const ColumnCard = (props) => {
    return (
        <div className="column-card">
            {props.children}
        </div>
    )
}

export default ColumnCard;