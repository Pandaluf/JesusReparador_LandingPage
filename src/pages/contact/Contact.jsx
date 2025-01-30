import "./Contact.css"
import CapybaraJR2 from "../../assets/images/Capybara_JR_2.png"
import WhatsAppLogo2 from "../../assets/images/Whatsapp_Logo_2.png"

function Contact() {
    const mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.7852179716256!2d-77.0568551913524!3d-11.920030388258171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d04d0bd052a3%3A0x824fe77a2677fbfb!2sColegio%20Jesus%20Reparador!5e0!3m2!1ses-419!2spe!4v1738204834052!5m2!1ses-419!2spe"

    return (
        <>
            <section className="information">
                <div className="information__content d-flex justify-content-evenly mt-4">
                    <img src={CapybaraJR2} alt="Capybara" className="information__content__img"/>
                    <div className="information__content__contact text-center gap-4">
                        <div className="information__content__contact__part">
                            <p className="information__content__contact__part-size">Horario de atención</p>
                            <p>Lunes a Viernes | 9:00 AM - 4:00 PM (Presencial)</p>
                            <p>Lunes a Sabados | 9:00 AM - 7:00 PM (WhatsApp)</p>
                        </div>

                        <div className="information__content__contact__part">
                            <p>¡Dejanos un mensaje y reserva tu visita!</p>
                            <p>WhatsApp: 961 814 053</p>
                            <img src={WhatsAppLogo2} alt="Whatsapp" width={100} className="mt-4"/>
                        </div>
                    </div>
                </div>
            </section>
            <h1 className="text-center pt-3 pb-3 mb-0 map__title">UBICANOS</h1>
            <section className="map">
                <iframe
                    src={mapURL}
                    className="w-100 h-100"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </section>
        </>
    )
}

export default Contact;