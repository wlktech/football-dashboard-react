import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="fixedBottom">
      <div className="row">
        <div className="col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-12 footer-border-purple py-3 footer-border">
          <div className="d-flex justify-content-around align-items-center text-center py-2">
            <p className="text-white">မောင်း 1</p>
            <p>|</p>
            <p className="text-white">လောင်းငွေ</p>

            <input type="text" className="form-control w-25 bg-white" />
            <button className="btn btn-success mt-2">လောင်းမည်</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
