import { Layout } from "../components/Layout"

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


        </Layout>
    )
}

export default Index
