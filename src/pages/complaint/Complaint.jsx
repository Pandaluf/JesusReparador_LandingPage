import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import OpenBook from '../../assets/images/Open_Book.png';
import './Complaint.css';

function Complaint() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        name: yup.string().required("El nombre es obligatorio"),
        DNI: yup.string().required("El DNI/CE es obligatorio"),
        phone: yup.string().required("El nombre de usuario es obligatorio"),
        address: yup.string().required("La ciudad es obligatoria"),
        email: yup.string().required("El estado es obligatorio"),
        parents: yup
            .string()
            .nullable()
            .when("age", {
                is: (age) => age === "Menor de edad", // Verifica si age es "Menor de edad"
                then: (schema) => schema.required("Este campo es obligatorio para menores de edad"),
                otherwise: (schema) => schema.notRequired(),
            }),
        service: yup.string().required("El servicio es obligatorio"),
        description: yup.string().required("El description es obligatorio"),
        complaintType: yup.string().required("Debes seleccionar un tipo de reclamo").notOneOf([''], 'Selección inválida'),
        complaintDetail: yup.string().required("Ingrese el detalle del reclamo o queja"),
        age: yup.string().required("El age del reclamo"),
    });

    return (
        <>
            <div className="form__title">
                <img src={OpenBook} alt="OpenBook"/>
                <div>
                    <h1>Libro de Reclamaciones</h1>
                    <h2>I.E.P Jesús Reparador</h2>
                </div>
            </div>
            <div className="form__content">
                <Formik
                    validationSchema={schema}
                    onSubmit={(values) => {
                        console.log(values); // Aquí imprimes los valores del formulario
                    }}
                    initialValues={{
                        name: '',
                        DNI: '',
                        phone: '',
                        address: '',
                        email: '',
                        parents: '',
                        service: '',
                        description: '',
                        complaintType: '',
                        complaintDetail: '',
                        age: '',
                    }}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit} className="form__content__group">
                            <h3>1. Identificación del consumnidor reclamante</h3>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationFormik01">
                                    <Form.Label className="form__content__group__label">Nombre:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.name && touched.name}
                                        size="lg"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik02">
                                    <Form.Label className="form__content__group__label">DNI/CE</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="DNI"
                                        value={values.DNI}
                                        onChange={handleChange}
                                        isInvalid={!!errors.DNI && touched.DNI}
                                        size="lg"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.DNI}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="validationFormik03">
                                    <Form.Label className="form__content__group__label">Selecciona una opción:</Form.Label>
                                    <div className="d-flex flex-column gap-3">
                                        {/* Opción 1 - mayor de edad */}
                                        <Form.Check
                                            type="radio"
                                            name="age"
                                            id="Mayor de edad"
                                            value="Mayor de edad"
                                            onChange={handleChange}
                                            checked={values.age === "Mayor de edad"}
                                            label="Mayor de edad"
                                            className="age-box form__content__group__ratio"
                                            isInvalid={!!errors.age && touched.age}
                                        />
                                        {/* Opción 2 - menor de edad */}
                                        <Form.Check
                                            type="radio"
                                            name="age"
                                            id="Menor de edad"
                                            value="Menor de edad"
                                            onChange={handleChange}
                                            checked={values.age === "Menor de edad"}
                                            label="Menor de edad"
                                            className="age-circle form__content__group__ratio"
                                            isInvalid={!!errors.age && touched.age}
                                        />
                                    </div>
                                    {errors.service && touched.service && (
                                        <div className="text-danger mt-1">{errors.service}</div>
                                    )}
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationFormikphone">
                                    <Form.Label className="form__content__group__label">Teléfono</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="number"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            isInvalid={!!errors.phone && touched.phone}
                                            size="lg"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.phone}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik04">
                                    <Form.Label className="form__content__group__label">Domicilio</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        value={values.address}
                                        onChange={handleChange}
                                        isInvalid={!!errors.address && touched.address}
                                        size="lg"
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.address}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="validationFormik05">
                                    <Form.Label className="form__content__group__label">Correo</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder=""
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email && touched.email}
                                        size="lg"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationFormik06">
                                    <Form.Label className="form__content__group__label">Padre o Madre [Para el caso de menores de edad]</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        name="parents"
                                        value={values.parents}
                                        onChange={handleChange}
                                        isInvalid={!!errors.parents && touched.parents}
                                        size="lg"
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.parents}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <h3>2. Identificación del bien contratado</h3>
                            <Row className="mb-3">
                                <Form.Group as={Col} className="mb-3" controlId="validationFormik07">
                                    <Form.Label className="form__content__group__label">Selecciona una opción:</Form.Label>
                                    <div className="d-flex flex-column gap-3">
                                        {/* Opción 1 - product */}
                                        <Form.Check
                                            type="radio"
                                            name="service"
                                            id="product"
                                            value="Producto"
                                            onChange={handleChange}
                                            checked={values.service === "Producto"}
                                            label="PRODUCTO"
                                            className="service-box form__content__group__ratio"
                                            isInvalid={!!errors.service && touched.service}
                                        />
                                        {/* Opción 2 - Círculo */}
                                        <Form.Check
                                            type="radio"
                                            name="service"
                                            id="service"
                                            value="Servicio"
                                            onChange={handleChange}
                                            checked={values.service === "Servicio"}
                                            label="SERVICIO"
                                            className="service-circle form__content__group__ratio"
                                            isInvalid={!!errors.service && touched.service}
                                        />
                                    </div>
                                    {errors.service && touched.service && (
                                        <div className="text-danger mt-1">{errors.service}</div>
                                    )}
                                </Form.Group>
                                <Form.Group as={Col} md="8" controlId="validationFormik08">
                                    <Form.Label className="form__content__group__label">Descripción:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder=""
                                        name="description"
                                        value={values.description}
                                        onChange={handleChange}
                                        isInvalid={!!errors.description && touched.description}
                                        size="lg"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.description}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <h3>3. Detalle de la reclamación</h3>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationFormik09">
                                    <Form.Label className="form__content__group__label">Tipo de Reclamación</Form.Label>
                                    <Form.Select
                                        name="complaintType"
                                        value={values.complaintType}
                                        onChange={handleChange}
                                        isInvalid={!!errors.complaintType && touched.complaintType}
                                        size="lg"
                                    >
                                        <option value="">Abre este menú para seleccionar</option>
                                        <option value="Reclamo">Reclamo (1)</option>
                                        <option value="Queja">Queja (2)</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.complaintType}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group md="8" as={Col} controlId="validationFormik010">
                                    <Form.Label className="form__content__group__label">Detalle:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder=""
                                        name="complaintDetail"
                                        value={values.complaintDetail}
                                        onChange={handleChange}
                                        isInvalid={!!errors.complaintDetail && touched.complaintDetail}
                                        size="lg"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.complaintDetail}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <div className="d-flex justify-content-center align-items-center mb-4 mt-5">
                                <Button type="submit" className="form__content__button">Enviar</Button>
                            </div>
                            <p className="form__content__group__label"><b>(1) Reclamo:</b> Disconformidad relacionada a los productos o servicios.</p>
                            <p className="form__content__group__label"><b>(2) Queja:</b> Disconformidad no relacionada a los productos o servicios; o, malestar, o descontento respecto a la atención al público.</p>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}

export default Complaint;