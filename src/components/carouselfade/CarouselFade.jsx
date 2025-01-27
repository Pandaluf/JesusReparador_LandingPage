import Carousel from "react-bootstrap/Carousel";
import CarouselImages from "../../assets/images/carouselImages/Carouselmages.js";
import "./CarouselFade.css";

export default function CarouselFade() {
    return (
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={CarouselImages.imgEnroll2025JR0}
                        alt="Image One"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={CarouselImages.imgSchoolJR}
                        alt="Image Two"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={CarouselImages.imgEnroll2025JR4}
                        alt="Image Three"
                    />
                </Carousel.Item>
            </Carousel>
    );
}
