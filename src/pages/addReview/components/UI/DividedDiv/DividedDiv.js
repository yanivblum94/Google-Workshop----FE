import './DividedDiv.css'

const DividedDiv = (props) => {
    return (
        <div className="divided-div">
            <div className='divided-div_1sthalf'>
                {props.children[0]}
            </div>
            <div className="divided-div_vl"></div>
            <div className='divided-div_2ndhalf'>
                {props.children.slice(1)}
            </div>
        </div>
    )
}

export default DividedDiv;