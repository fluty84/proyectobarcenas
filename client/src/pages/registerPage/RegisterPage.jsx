import { FormControl, Input, InputLabel, FormHelperText } from '@mui/material'
import { Col, Row } from 'react-bootstrap'
import RegisterRestaurant from '../../components/registerRestaurant.jsx/RegisterRestaurant'
import "../registerPage/RegisterPage.css"


const RegisterPage = () => {

    return (
       

        <div className='register-form'>
            <Row className="justify-content-md-center">
                <Col md={6}>
            <RegisterRestaurant></RegisterRestaurant>
                </Col>
            </Row>
        </div>

    )
}

export default RegisterPage;
