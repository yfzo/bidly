import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'

export default class RegisterForm extends Component {
  const { Formik } = formik;

  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    address: yup.string().required(),
    password: yup.string().required(),
  });

function FormExample() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group controlId="validationFormik01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            isValid={touched.firstName && !errors.firstName}
          />
          <Form.Control.Feedback>Looks good!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationFormik02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            isValid={touched.firstName && !errors.lastName}
          />

          <Form.Control.Feedback>Looks good!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            name="email"
            value={values.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
                {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text" 
            name="address"
            value={values.address}
            onChange={handleChange}
            isInvalid={!!errors.address} 
            placeholder="1234 Main St" />
            <Form.Control.Feedback type="invalid">
                {errors.address}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            name="password"
            value={values.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
            placeholder="Password" />
            <Form.Control.Feedback type="invalid">
                {errors.password}
            </Form.Control.Feedback>
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      )}
    </Formik>
    )
  }
  render(<FormExample />);
  