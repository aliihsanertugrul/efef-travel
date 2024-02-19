import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Field, Form, ErrorMessage, useFormik} from 'formik';
import * as Yup from 'yup';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { FaEnvelope,FaEnvelopeOpen } from "react-icons/fa";
import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss'

const Contact = () => {

  const form = useRef();
  const [envelope, setEnvelope] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  

  const options = [
    'VIP Tourist Transportation',
    'Airport Transfers',
    'Private Driver Service',
    'VIP Car Rental',
    'Touristic Excursions and Tours',
    'VIP Accommodation Support',
  ];

 
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().matches(/^[0-9]+$/, 'Must be a valid phone number').required('Phone number is required'),
  service: Yup.string().required('Select at least one option'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().min(6, "Your message is too short").max(200,"Your message is too long").required("Message is required")
  
});

const initialValues = {
  name: '',
  phone:"",
  service:"",
  email: '',
  message:"",
  
};



  const onSubmit = async (values,{resetForm}) => {
    if (submitting) {
      return; 
    }
    setSubmitting(true);

    await emailjs.sendForm('service_4tfvw4f', 'template_x9icssh', form.current, 'AcRP6izlk0tTyti_f')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setEnvelope(true)
    console.log('Form values:', values);
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'The email you sent has been received. We will get back to you as soon as possible.',
      confirmButtonColor: '#A41C1B', 
    });
    resetForm();
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  

  

  return (
    <section className="contact_section my-5">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Get In <span>Touch</span></h2>
      </div>
      <div className="row">
        <div className="col-md-6 px-0">
          <div className="form_container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form ref={form} className='text-center'>
              <FormGroup className='formSet'>
                <Field
                  type="text"
                  name="name"
                  as={FormControl}
                  placeholder="Enter your name"
                  isInvalid={!!(validationSchema.errors && validationSchema.errors.name)}
                />
                <ErrorMessage name="name" component="div" className="errorText text-danger mb-3" />
              </FormGroup>

              <FormGroup className='formSet'>
                <Field
                  type="number"
                  name="phone"
                  as={FormControl}
                  placeholder="Enter your phone number"
                  isInvalid={!!(validationSchema.errors && validationSchema.errors.phone)}
                />
                <ErrorMessage name="phone" component="div" className="errorText text-danger mb-3" />
              </FormGroup>

              <FormGroup className='formSet'>
                <Field
                  as="select"
                  name="service"
                  className="form-control"
                  isInvalid={!!(validationSchema.errors && validationSchema.errors.service)}
                >
                  <option selected>Please select our services</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="service" component="div" className="errorText text-danger mb-3" />

              <FormGroup className='formSet'>
                
                <Field
                  type="email"
                  name="email"
                  as={FormControl}
                  placeholder="Enter your email"
                  isInvalid={!!(validationSchema.errors && validationSchema.errors.email)}
                />
                <ErrorMessage name="email" component="div" className="errorText text-danger mb-3" />
              </FormGroup>

              </FormGroup>

              <FormGroup className='formSet'>
                
                <Field
                  type="text"
                  name="message"
                  className="message-box"
                  as={FormControl}
                  placeholder="Enter tour message"
                  isInvalid={!!(validationSchema.errors && validationSchema.errors.message)}
                />
                <ErrorMessage name="message" component="div" className="errorText text-danger mb-3" />
              </FormGroup>

              <Button style={{backgroundColor:"#A41C1B",border:"none"}} type="submit" variant="primary" className="mt-3">
                <span className='d-flex align-items-center justify-content-center gap-3'>
                {envelope?<FaEnvelope />:<FaEnvelopeOpen/>}
                  Contact Us
                </span>
              </Button>
              
            </Form>
          </Formik>
          </div>
        </div>
        <div className="col-md-6 px-0">
          <div className="map_container">
            <div className="map">
              <div id="googleMap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.352203070923!2d28.73998121212658!3d41.257666703911106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409ffff60abc95a9%3A0x380ce02cc824e506!2zxLBzdGFuYnVsIEhhdmFsaW1hbsSx!5e0!3m2!1str!2str!4v1705322097836!5m2!1str!2str" width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact
