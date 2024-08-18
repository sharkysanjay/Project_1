import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Our core values we live by, and as a company, we work by them too. 
          We are building a platform to ensure that it can help in saving lives.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
