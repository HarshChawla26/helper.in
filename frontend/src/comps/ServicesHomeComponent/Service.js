import React from "react";
import "./service.css";
import Card from "./Components/Card";
export default function Service() {
  return (
    <div id="service">
      <div className="sectionheading">
        <h2>Our Services </h2>
      </div>

      <section>
        {/* Card Wrapper */}
        <div className="src-cards-4">
          <Card
            classs={"serc-img-01"}
            imgsrc={
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1678721781429-69c225.jpeg"
            }
          />
          <Card
            classs={"serc-img-02"}
            imgsrc={
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1678463313266-174e91.jpeg"
            }
          />
          <Card
            classs={"serc-img-03"}
            imgsrc={
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1678721769247-44fa76.jpeg"
            }
          />
          <Card
            classs={"serc-img-04"}
            imgsrc={
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1678463309015-2b92d2.jpeg"
            }
          />
        </div>
      </section>
    </div>
  );
}
