import logo from "../assets/logo.svg"

const Sidebar = () => {
    const services = [
      "All Services",
      "Buying New Property",
      "Help with Loan",
      "Help with Interior",
      "Help with Legal",
      "Packers & Movers",
      "Resale/Rent Help",
      "Builders",
      "Associate Partner",
      "Interior Designers",
      "Lawyers",
      "Brokers",
      "Packers & Movers Partners",
      "Refer & Earn",
      "Contact",
    ];
  
    return (
      <div style={sidebarStyle}>

        <ul style={listStyle}>
            <li><img src={logo} alt="logo" className="w-28 h-20" /></li>
          {services.map((service, index) => (
            <li key={index} style={listItemStyle}>
              {service}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const sidebarStyle = {
    width: "250px",
    backgroundColor: "#f0f0f0",
    padding: "15px",
    borderRadius: "5px",
  };
  
  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };
  
  const listItemStyle = {
    padding: "10px 0",
    borderBottom: "1px solid #ccc",
    cursor: "pointer",
  };
  
  export default Sidebar;