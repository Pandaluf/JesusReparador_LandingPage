import CarouselFade from "../../components/carouselfade/CarouselFade.jsx";
import CardBasic from "../../components/card/Card.jsx";
import imgHome from "./HomeImages.js";
import "./Home.css";

function Home() {
    return (
        <>
            <CarouselFade/>
            <section className="welcome text-center">
                <h1 className="welcome__title">¡Bienvenido al colegio Jesús Reparador!</h1>
                <h2 className="welcome__subtitle">Donde los sueños de tus hijos se convierten en nuestra misión</h2>
            </section>

            {/* Contenedor principal con margen y espaciado adecuado */}
            <section className="container d-flex flex-column align-items-center">

                {/* Primera fila: 4 tarjetas distribuidas equitativamente */}
                <div className="d-flex justify-content-around flex-wrap gap-2 mb-4 w-100">
                    <CardBasic title="Formación de Valores"
                               text="Fomentamos la responsabilidad, el respeto y la solidaridad, formando no solo estudiantes brillantes, sino también ciudadanos íntegros."
                               img={imgHome.imgIntegrity}/>
                    <CardBasic title="Infraestructura Moderna"
                               text="Pizarra interactiva, laboratorio, sala de computo y espacios recreativos diseñados para el desarrollo integral de nuestros alumnos."
                               img={imgHome.imgPlayground}/>
                    <CardBasic title="Participaciones en Concursos"
                               text="Nuestros estudiantes participan en competencias científicas, olimpiadas de matemáticas y concursos de arte locales y nacionales."
                               img={imgHome.imgTrophy}/>
                    <CardBasic title="Actividades Extracurriculares"
                               text="Ofrecemos una variedad de actividades como deportes, música, arte, danza y más!, promoviendo el talento y trabajo en equipo."
                               img={imgHome.imgDance}/>
                </div>

                {/* Segunda fila: 3 tarjetas centradas */}
                <div className="d-flex justify-content-evenly flex-wrap gap-2 w-100">
                    <CardBasic title="Excelencia Académica"
                               text="brindamos educación de calidad con un currículo actualizado, enfocado en el desarrollo intelectual y rendimiento académico de cada alumno."
                               img={imgHome.imgDiploma}/>
                    <CardBasic title="Material Educativo"
                               text="Ofrecemos una amplia variedad de materiales educativos físicos que fomentan un aprendizaje efectivo y motivador."
                               img={imgHome.imgMaterialIcon}/>
                    <CardBasic title="Seguridad y Bienestar"
                               text="Priorizamos la seguridad con personal capacitado, cámaras de seguridad y protocolos de emergencia para proteger a nuestros estudiantes."
                               img={imgHome.imgSecurityIcon}/>
                </div>
            </section>


            <section className="mt-4 mb-1">
                <h1 className="text-center welcome__title">¡Forma parte de nuestra comunidad educativa!</h1>
                <div className="event__mosaic text">
                    <div
                        className="event__mosaic__card card-tall card-wide"
                    ><img className="card-custom-image" src={imgHome.imgAnniversary1}/></div>
                    <div
                        className="event__mosaic__card"
                    ><div
                        className="event__mosaic__card"
                    ><img className="card-custom-image" src={imgHome.imgAchievementDay5}/></div></div>
                    <div
                        className="event__mosaic__card"
                    ><img className="card-custom-image" src={imgHome.imgAnniversary2}/></div>
                    <div
                        className="event__mosaic__card card-wide"
                    ><img className="card-custom-image" src={imgHome.imgAchievementDay3}/></div>
                    <div
                        className="event__mosaic__card"
                    ><img className="card-custom-image" src={imgHome.imgAchievementDay2}/></div>
                    <div
                        className="event__mosaic__card"
                    ><img className="card-custom-image" src={imgHome.imgOlympics1}/></div>
                    <div
                        className="event__mosaic__card card-wide"
                    ><img className="card-custom-image" src={imgHome.imgAchievementDay4}/></div>
                    <div
                        className="event__mosaic__card"
                    ><img className="card-custom-image" src={imgHome.imgAchievementDay6}/></div>
                    <div
                        className="event__mosaic__card"
                    ><img className="card-custom-image" src={imgHome.imgPeasantsDay1}/></div>
                    <div
                        className="event__mosaic__card"
                    ><img className="card-custom-image" src={imgHome.imgPeasantsDay2}/></div>
                    <div
                        className="event__mosaic__card"
                    ><img className="card-custom-image" src={imgHome.imgSchoolDrill1}/></div>
                    <div
                        className="event__mosaic__card card-wide"
                    ><img className="card-custom-image" src={imgHome.imgSchoolDrill2}/></div>
                    <div
                        className="event__mosaic__card card-wide"
                    ><img className="card-custom-image" src={imgHome.imgParaliturgy1}/></div>
                    <div
                        className="event__mosaic__card hide-on-small"
                    ><img className="card-custom-image" src={imgHome.imgSwearingIn1}/></div>
                </div>
            </section>
        </>
    );
}

export default Home;
