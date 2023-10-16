const services = [
  {
    name: "Express Cleaning",
    imgUrl:
      "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696949855047-b704d3.jpeg",
  },
  {
    name: "Standard Cleaning",
    imgUrl:
      "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696884995836-970015.jpeg",
  },
  {
    name: "Deep Cleaning",
    imgUrl:
      "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696885085893-9ed348.jpeg",
  },
];

export default function HeroSection() {
  return (
    <div className="hero flex-row">
      <div className="hero-left flex-col">
        <h2>Home services at your doorstep</h2>
        <div className="hero-services">
          <h3>What are you looking for?</h3>
          <div className="flex-row">
            {services.map((service, idx) => {
              return (
                <div key={idx} className="service">
                  <div className="service-img">
                    <img src={service.imgUrl} alt={service.name} />
                  </div>
                  <div>{service.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ratings flex-row">
          <div>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_48,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1693570188661-dba2e7.jpeg"
              alt="star"
            />
            <div>4.8 Service Rating</div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_48,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1693491890812-e86755.jpeg"
              alt="star"
            />
            <div>5000+ Customers</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696837827237-7dae6c.jpeg"
          alt="hero image"
        />
      </div>
    </div>
  );
}
