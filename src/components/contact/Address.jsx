import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Location</span>Tampere, Finland.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">email</span>{" "}
        <a href="mailto:joel.kallio@gmail.com">joel.kallio@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative" >
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">phone</span>{" "}
        <a href="Tel: +358505548516">+358505548516</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
