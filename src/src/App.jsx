JavaScript
export default function App() {
  return (
    <div style={{
      fontFamily: 'serif',
      background: '#f7f3ef',
      minHeight: '100vh',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1>HIBATTY STORE</h1>

      <h2>Soft Modesty, Timeless Elegance</h2>

      <p>
        Explore modest fashion for everyday and bridal wear.
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginTop: '40px'
      }}>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          width: '200px'
        }}>
          <h3>Sage Abaya</h3>
          <p>₹2499</p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          width: '200px'
        }}>
          <h3>Powder Blue Hijab</h3>
          <p>₹499</p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          width: '200px'
        }}>
          <h3>Ivory Jilbab</h3>
          <p>₹2999</p>
        </div>

      </div>
    </div>
  )
}
