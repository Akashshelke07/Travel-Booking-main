import React, { useState } from 'react';

function Destination() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
      padding: "20px",
      backgroundColor: "#f4f4f9",
    },
    card: {
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      backgroundColor: "#fff",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    img: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
    body: {
      padding: "15px",
      textAlign: "center",
    },
    title: {
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#333",
    },
    list: {
      display: "flex",
      justifyContent: "center",
      padding: "0",
      margin: "0",
      listStyle: "none",
      gap: "15px",
    },
    listItem: {
      fontSize: "16px",
      color: "#555",
      fontWeight: "500",
    },
  };

  const destinations = [
    { img: "https://static.toiimg.com/photo/63282406.cms", title: "Taj Mahal", details: ["₹5000", "1 day", "Agra"] },
    { img: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1661186647/top-10-tourist-attractions-in-india-harmandir-sahib/top-10-tourist-attractions-in-india-harmandir-sahib-1120x732.jpg", title: "Harmandir Sahib", details: ["₹1500", "1 day", "Amritsar"] },
    { img: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1661186675/top-10-tourist-attractions-in-indiaa-gateway-of-india/top-10-tourist-attractions-in-indiaa-gateway-of-india-1120x732.jpg", title: "Gateway of India", details: ["₹1200", "1 day", "Mumbai"] },
    { img: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1661186654/top-10-tourist-attractions-in-india-manikarnika-ghat/top-10-tourist-attractions-in-india-manikarnika-ghat-1120x732.jpg", title: "Manikarnika Ghat", details: ["₹800", "1 day", "Varanasi"] },
    { img: "https://static.investindia.gov.in/s3fs-public/2023-06/1.jpg", title: "Unveiling India", details: ["₹5000", "1 day", "India"] },
    { img: "https://www.usnews.com/object/image/00000163-8d5b-d398-ad7f-8dfff5760000/3-eiffel-tower-getty.jpg?update-time=1527086483519&size=responsive640", title: "Eiffel Tower", details: ["₹15000", "1 day", "Paris"] },
    { img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d6/a1/6b/buckingham-palace.jpg?w=800&h=500&s=1", title: "Buckingham Palace", details: ["₹12000", "1 day", "London"] },
    { img: "https://static.independent.co.uk/2024/08/30/14/newFile-1.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp", title: "Sacré-Cœur", details: ["₹8000", "1 day", "Paris"] },
    { img: "https://i.pinimg.com/originals/82/1f/dd/821fdd831e2b1aea8a77a1c47114d419.jpg", title: "Sydney Opera House", details: ["₹15000", "1 day", "Sydney"] },
    { img: "https://th.bing.com/th/id/OIP.h8n-oldwOQb3qUu9gfsASAHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: "Colosseum", details: ["₹5000", "1 day", "Rome"] },
    { img: "https://th.bing.com/th/id/OIP.XkqF431xd5SUUIa1YzJoaAHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: "Coonoor", details: ["₹5000", "1 day", "Tamil Nadu"] },
    { img: "https://th.bing.com/th/id/OIP.wIRKfP8CSNoGuIFh9FpfnAHaE8?w=285&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: "Great Wall of China", details: ["₹12000", "1 day", "Beijing"] },
    { img: "https://th.bing.com/th/id/OIP.GrWEF4alrc4QSjkqd6I9dgHaD3?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: "Machu Picchu", details: ["₹10000", "1 day", "Peru"] },
    { img: "https://th.bing.com/th/id/OIP.M1KNz9aDY4K2G7pTF3wR3wHaEK?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: "Neuschwanstein Castle", details: ["₹14000", "1 day", "Germany"] },
    { img: "https://th.bing.com/th/id/OIP.5WZhaZl4kztYhGaJnumP9gHaE9?w=277&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: "Bali", details: ["₹14000", "1 day", "Indonesia"] },
  ];

  return (
    <div style={styles.container}>
      {destinations.map((destination, index) => (
        <div
          key={index}
          style={{
            ...styles.card,
            transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img src={destination.img} style={styles.img} alt={destination.title} />
          <div style={styles.body}>
            <h4 style={styles.title}>{destination.title}</h4>
            <ul style={styles.list}>
              {destination.details.map((detail, i) => (
                <li key={i} style={styles.listItem}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Destination;
