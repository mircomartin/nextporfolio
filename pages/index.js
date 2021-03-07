import { Experience } from "../components/Experience"
import { Layout } from "../components/Layout"
import { Skills } from "../components/Skills"
import { experienceProfile, skillsProfile } from "../profile"

const Index = () => {
    return (
        <Layout>
            
            <header className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-secondary text-light">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <img src="https://picsum.photos/200" alt="Mirco Martin" className="img-fluid"/>
                            </div>
                            <div className="col-md-8">
                                <h1>Mirco Martin</h1>
                                <h3>Front-end Developer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere accusantium, quae id nihil tempore alias eveniet repellendus maiores sunt aspernatur!</p>
                                <a href="/hireme">Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </header>

            <div className="row py-2">
                <div className="col-md-4">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Skills</h1>

                            {
                                skillsProfile.map((skill) => (
                                    <Skills key={skill.skill} skill={skill}/>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Experience</h1>
                            <ul>
                                {
                                    experienceProfile.map((experience) => (
                                        <Experience key={experience.empresa}  experience={experience} />
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Index
