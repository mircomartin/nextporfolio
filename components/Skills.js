export const Skills = ({skill}) => {

    const { skill:name, percentage } = skill;

    return (
        <>
          <h5>{name}</h5>
            <div className="progress">
                <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{width: `${percentage}%`}}
                >
                </div>
            </div>  
        </>
    )
}
