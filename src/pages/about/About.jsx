import "./About.css"
import Section from "../../components/section/Section.jsx";
import BadjeJR from "../../assets/images/Badge_JR.jpg"

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
                        <br />
                        <p>
                            Contamos con instalaciones adaptadas a las necesidades de cada nivel educativo: inicial, primaria
                            y secundaria. Nuestros laboratorios, talleres y espacios recreativos están diseñados para promover un
                            aprendizaje dinámico y participativo. En el Colegio Jesús Reparador, cultivamos valores de respeto,
                            colaboración y trabajo en equipo, creando una comunidad educativa que apoya a cada estudiante en su
                            crecimiento personal y académico.
                        </p>
                    </div>
                    <img src={BadjeJR} alt="BadjeJR" className="who__content__img"/>
                </div>
            </section>
        </>
    )
}

export default About;