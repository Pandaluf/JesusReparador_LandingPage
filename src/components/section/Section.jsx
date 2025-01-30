import "./Section.css"

function Section({text}){
    return (
        <>
            <section className="contact">
                <div className="contact__title">
                    <h1>{text}</h1>
                </div>
            </section>
        </>
    )
}

export default Section;