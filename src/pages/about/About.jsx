import "./About.css"
import Section from "../../components/section/Section.jsx";
import BadjeJR from "../../assets/images/Badge_JR.jpg";
import MissionJR from "../../assets/images/Mission_JR.png";
import VissionJR from "../../assets/images/Vision_JR.jpg";

function About() {
    return (
        <>
            <Section text="Nosotros"></Section>
            <section className="who">
                <h1>¿Quiénes somos?</h1>
                <div className="who__content">
                    <div className="who__content__text">
                        <p>Somos el Colegio Jesús Reparador de Comas, una institución educativa que ofrece una formación integral desde la
                            educación inicial hasta la secundaria. Nos comprometemos a brindar una educación de calidad que fomente el
                            desarrollo académico, emocional y social de cada uno de nuestros estudiantes. Nuestro equipo de docentes
                            está dedicado a acompañar a los alumnos en cada etapa de su aprendizaje, asegurando que adquieran las
                            herramientas necesarias para enfrentar con éxito los retos del futuro.
                        </p>
                    </div>
                    <img src={BadjeJR} alt="BadjeJR" className="who__content__img"/>
                </div>
                <div className="d-flex justify-content-evenly mt-5 mb-2">
                    <img src={MissionJR} alt="MissionJR" />
                    <img src={VissionJR} alt="MissionJR"/>
                </div>
            </section>
        </>
    )
}

export default About;