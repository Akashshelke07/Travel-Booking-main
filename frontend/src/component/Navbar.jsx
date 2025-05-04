import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
 
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor:'#9AA6B2', 
    },
    logo: {
      height: '60px',
      cursor: 'pointer',
    },
    list: {
      listStyle: 'none',
      display: 'flex',
      margin: 0,
      padding: 0,
    },
    listItem: {
      fontSize: '18px',
      color: '#ffffff',
      fontWeight: '3px',
      textTransform: 'capitalize',
      cursor: 'pointer',
      padding: '10px 15px',
      borderRadius: '5px',
      textDecoration: 'none',
    },
  };
  
  return (
    <div style={styles.container}>
      <img
        src="https://yoliday.in/_next/static/media/yoliday-white-logo.0230a691.png" // 
        alt="Logo"
        style={styles.logo}
      />
  
      <ul style={styles.list}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li style={styles.listItem}>Home</li>
        </Link>
        <Link to="/Destination" style={{ textDecoration: 'none' }}>
          <li style={styles.listItem}>Destination</li>
        </Link>
        <Link to="/Login" style={{ textDecoration: 'none' }}>
          <li style={styles.listItem}>Login</li>
        </Link>
        <Link to="/Booking" style={{ textDecoration: 'none' }}>
          <li style={styles.listItem}>Booking</li>
        </Link>
      </ul>
    </div>
  );
  
}

export default Navbar;

