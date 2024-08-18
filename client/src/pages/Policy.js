import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>1. We offer a no questions asked 7 days exchange/return policy for products.</p>
          <p>2. Operations team will initiate return collection within 3 working days of request initiation</p>
          <p>3. Replacement would be offered against all returns request. In case, the product is out of stock and cannot be replaced at the time of request, then refund will be issued through payment gateway/credit note.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
