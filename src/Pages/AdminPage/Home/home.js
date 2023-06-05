import React from "react";
import Box from "../../../Components/Box/Box";
import contents from "../../../Components/Box/content";
import "./AdminHome.css";



const AdminHome = () => {
  return (
    <div>
      <div className="home-grid">
        
        {contents.map(content => (
          <Box 
            className="box"
            key={content.id}
            name={content.name}
          />
       ))}
        
        
      </div>
    </div>
  );
};

export default AdminHome;
