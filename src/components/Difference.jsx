const slides = [
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1696528499786-0eda05.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1696528524409-9dc6ce.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1696528519982-3d7e79.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1696539286658-defa45.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1696539291042-38a417.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1696539281417-3edceb.jpeg",
];

export default function Difference() {
  return (
    <div className="difference flex-row">
      {slides.map((slide, idx) => {
        return (
          <div key={idx}>
            <img className="difference-img" src={slide} alt="" />
          </div>
        );
      })}
    </div>
  );
}
