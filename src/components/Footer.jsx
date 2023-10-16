export default function Footer() {
  return (
    <div className="footer flex-col">
      <div>
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_144,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1687285683825-e6cf23.jpeg"
          alt="logo"
        />
      </div>
      <div className="footer-topics flex-row">
        <div className="flex-col">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
            <li>UC impacts</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="flex-col">
          <h3>For Customers</h3>
          <ul>
            <li>UC reviews</li>
            <li>Categories near you</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex-col">
          <h3>For Partners</h3>
          <ul>
            <li>Register as a professional</li>
          </ul>
        </div>
        <div className="flex-col">
          <h3>Social Links</h3>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648463870745-38fece.png"
                alt="Apple store"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648463880397-b2cc52.svg"
                alt="Play store"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        © Copyright 2022 Urban Company. All rights reserved.
      </div>
    </div>
  );
}
