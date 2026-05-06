export default function App() {
  const products = [
    {
      name: "Sage Abaya",
      price: "₹2499",
      image:
        "https://images.unsplash.com/photo-1583391733981-849c1f2c4e6d",
    },
    {
      name: "Powder Blue Hijab",
      price: "₹499",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
    {
      name: "Ivory Jilbab",
      price: "₹2999",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  ];

  return (
    <div
      style={{
        background: "#f7f3ef",
        minHeight: "100vh",
        fontFamily: "serif",
        color: "#2d2d2d",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px 50px",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            letterSpacing: "6px",
            marginBottom: "10px",
          }}
        >
          HIBATTY STORE
        </h1>

        <p
          style={{
            color: "#7a7a7a",
            fontSize: "18px",
          }}
        >
          Soft Modesty • Timeless Elegance
        </p>
      </div>

      {/* Products */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          padding: "20px 30px 80px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              width: "280px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "340px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  marginBottom: "8px",
                  fontSize: "24px",
                }}
              >
                {product.name}
              </h3>

              <p
                style={{
                  color: "#8a8a8a",
                  marginBottom: "18px",
                }}
              >
                {product.price}
              </p>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  borderRadius: "30px",
                  background: "#1f1f1f",
                  color: "white",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
