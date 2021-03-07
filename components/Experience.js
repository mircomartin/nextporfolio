
export const Experience = ({experience}) => {

    const { empresa, periodo, rol } = experience;

    return (
        <li>
            <h3>{empresa}</h3>
            <h5>{periodo}</h5>
            <p>{rol}</p>
        </li>
    )
}
