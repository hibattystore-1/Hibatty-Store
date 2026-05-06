JavaScript
export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f7f3ef",
      padding: "40px",
      fontFamily: "serif",
      textAlign: "center"
    }}>
      
      <h1 style={{
        fontSize: "40px",
        letterSpacing: "4px"
      }}>
        HIBATTY STORE
      </h1>

      <p style={{
        color: "#555",
        marginTop: "10px"
      }}>
        Soft Modesty, Timeless Elegance
      </p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "50px"
      }}>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "16px",
          width: "220px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
          <h3>Sage Abaya</h3>
          <p>₹2499</p>
        </div>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "16px",
          width: "220px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
          <h3>Powder Blue Hijab</h3>
          <p>₹499</p>
        </div>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "16px",
          width: "220px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
          <h3>Ivory Jilbab</h3>
          <p>₹2999</p>
        </div>

      </div>

    </div>
  );
}
