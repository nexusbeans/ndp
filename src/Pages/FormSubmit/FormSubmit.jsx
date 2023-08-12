import React, { useEffect } from "react";
import "./FormSubmit.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function FormSubmit() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace('https://ndpfoundation.com/');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Header />
      <main className="formMainsubmit default_layout">
        <section>
          <div className="thankyouForm ">
            <h2>Thankyou for Submitting Your Response</h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FormSubmit;
