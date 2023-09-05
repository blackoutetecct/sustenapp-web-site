import './style.css'

export default function AboutCard(props) {

    return(
        <div className='card' >
            <img src={ props.image } alt="Representação do app" />
            <p> { props.description } </p>
        </div>
    )
}