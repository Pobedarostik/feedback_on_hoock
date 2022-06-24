

const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return(
        options.map(
            option => <button key={option} name={option} onClick={onLeaveFeedback}>{option}</button>)
    )
}
export default FeedbackOptions;