const slides = [
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1696528470917-2dbf5a.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1696528488085-e545b2.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1696528496475-07fde1.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1696539276895-a7e37c.jpeg",
];

export default function Reviews() {
  return (
    <div className="flex-col" style={{ marginTop: "2rem" }}>
      <h2>Customer Reviews</h2>
      <div className="difference flex-row">
        {slides.map((slide, idx) => {
          return (
            <div key={idx}>
              <img className="difference-img" src={slide} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
