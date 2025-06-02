

function FormattedDate(props) {

    return <div className="date">
        {props.date.toLocalDateString()}
    </div>

}

export default FormattedDate; 