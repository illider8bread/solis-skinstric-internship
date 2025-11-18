import radio from '../assets/radio-btn.png'

function Message({addClass}) {
    return (
        <div className={`webcam__message ${addClass}`}>
            To get better results make sure to have<br />
            <ul>
                <li ><img src={radio} className='inverted' />Neutral Expression</li>
                <li><img src={radio} className='inverted' />Frontal Pose</li>
                <li><img src={radio} className='inverted' />Adequate lighting</li>
            </ul>
        </div>
    )
}

export default Message