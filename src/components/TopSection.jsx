export default function TopSection() {
  return (
    <div className="topbar">
      <header>
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_144,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1687285683825-e6cf23.jpeg"
          alt="logo"
        />
        <div>
          New York &nbsp;&nbsp;&nbsp;
          <input
            type="search"
            name="Search"
            id="search"
            placeholder="Search for services"
          />
        </div>
        <button>Login</button>
      </header>
    </div>
  );
}
