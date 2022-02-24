import React from "react";
import Form from "./Form";
import Address from "./Address";
import Social from "./Social";

const Contact = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-4">
        <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
          Contact
        </h3>
        <p className="open-sans-font mb-4">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities.
        </p>
        <Address />

        <Social />
      </div>

      <div className="col-12 col-lg-8">
        <Form />
      </div>
    </div>
  );
};

export default Contact;