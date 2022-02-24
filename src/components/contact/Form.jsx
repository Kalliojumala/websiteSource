import React, {useState} from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
const Form = () => {
  const [messageAfterSubmit, setMessageAfterSubmit] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailService = process.env.REACT_APP_EMAIL_SERVICE;
  const emailTemplate = process.env.REACT_APP_EMAIL_TEMPLATE;
  const emailUser = process.env.REACT_APP_EMAIL_USER;
  

  const onSubmit = (data, e) => {
    
    setIsSubmitting(true)
    emailjs.send(emailService, emailTemplate, data, emailUser).then((result) => {
      e.target.reset();
      setMessageAfterSubmit("Message submitted, I will get back to you Asap!")  
      setIsSubmitting(false);
      },
      (error) => {
        setMessageAfterSubmit("Error occurred while sending your message please try again later!") 
        setIsSubmitting(false);
        console.log(error.message, error)
      }
    )
  };

  return (
    <>
      <form className="contactform" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="YOUR NAME"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                {...register("subject", { required: true })}
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
              />
              {errors.subject && (
                <span className="invalid-feedback">Message is required.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                {...register("message", { required: true })}
                name="message"
                placeholder="YOUR MESSAGE"
              ></textarea>
              {errors.message && (
                <span className="invalid-feedback">Message is required.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12" >
          
          
            <button type="submit" className="button" disabled={isSubmitting}>
              <span className="button-text">Send Message</span>
              <span className={isSubmitting ?"button-icon fa fa-spinner fa-spin": "button-icon fa fa-send"}></span>
            </button>
            <span style={{marginLeft: "10px"}}>{messageAfterSubmit}</span>
          
          </div>
          {/* End .col */}
        </div>
      </form>

      {/* End contact */}
    </>
  );
};

export default Form;
