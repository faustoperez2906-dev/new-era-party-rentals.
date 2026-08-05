import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        color: "#222",
        background: "#fff",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "#fff",
          borderBottom: "1px solid #eee",
          padding: "18px 6%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>New Era Party Rentals</h2>
          <p style={{ margin: "4px 0 0", fontSize: 13, color: "#777" }}>
            Make your event unforgettable
          </p>
        </div>

        <nav style={{ display: "flex", gap: 25, alignItems: "center" }}>
          <a href="#services" style={linkStyle}>
            Services
          </a>
          <a href="#about" style={linkStyle}>
            About
          </a>
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
          <a href="#book" style={buttonStyle}>
            Book Now
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 6%",
          background:
            "linear-gradient(135deg, #111 0%, #292929 50%, #111 100%)",
          color: "white",
        }}
      >
        <div style={{ maxWidth: 850 }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: 3,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            New Era Party Rentals
          </p>

          <h1
            style={{
              fontSize: "clamp(45px, 7vw, 80px)",
              lineHeight: 1.05,
              margin: "0 0 25px",
            }}
          >
            Your Party.
            <br />
            Your Style.
            <br />
            <span style={{ color: "#f5c542" }}>Your New Era.</span>
          </h1>

          <p
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              color: "#ddd",
              maxWidth: 650,
              margin: "0 auto 35px",
            }}
          >
            Premium party rentals for birthdays, weddings, celebrations,
            corporate events, and unforgettable moments.
          </p>

          <div
            style={{
              display: "flex",
              gap: 15,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#book"
              style={{
                ...buttonStyle,
                background: "#f5c542",
                color: "#111",
                padding: "16px 30px",
                fontSize: 16,
              }}
            >
              Book Your Event
            </a>

            <a
              href="#services"
              style={{
                ...buttonStyle,
                background: "transparent",
                color: "white",
                border: "1px solid white",
                padding: "16px 30px",
                fontSize: 16,
              }}
            >
              View Rentals
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          padding: "90px 6%",
          background: "#f8f8f8",
          textAlign: "center",
        }}
      >
        <p style={eyebrowStyle}>WHAT WE OFFER</p>

        <h2 style={headingStyle}>Party Rentals For Every Occasion</h2>

        <p style={paragraphStyle}>
          Everything you need to create an amazing event, all in one place.
        </p>

        <div
          style={{
            maxWidth: 1100,
            margin: "50px auto 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 25,
          }}
        >
          <ServiceCard
            icon="🎪"
            title="Tents & Canopies"
            text="Create the perfect outdoor space for your guests."
          />

          <ServiceCard
            icon="🪑"
            title="Tables & Chairs"
            text="Comfortable and stylish seating for your celebration."
          />

          <ServiceCard
            icon="✨"
            title="Event Decor"
            text="Beautiful decorations that bring your vision to life."
          />

          <ServiceCard
            icon="🎉"
            title="Party Packages"
            text="Complete rental packages designed to make planning easy."
          />
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "90px 6%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 50,
            alignItems: "center",
          }}
        >
          <div>
            <p style={eyebrowStyle}>WHY NEW ERA?</p>

            <h2 style={headingStyle}>
              We help turn your event into an experience.
            </h2>
          </div>

          <div>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: "#555" }}>
              At New Era Party Rentals, we believe every celebration deserves
              to feel special. From intimate gatherings to large events, we
              provide quality rentals and dependable service to help make your
              event stress-free and memorable.
            </p>

            <p style={{ fontSize: 18, lineHeight: 1.8, color: "#555" }}>
              Tell us what you're planning and we'll help you create the
              perfect setup.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="book"
        style={{
          padding: "90px 6%",
          background: "#111",
          color: "white",
          textAlign: "center",
        }}
      >
        <p style={{ ...eyebrowStyle, color: "#f5c542" }}>
          READY TO PARTY?
        </p>

        <h2
          style={{
            fontSize: "clamp(35px, 5vw, 55px)",
            margin: "10px 0 20px",
          }}
        >
          Let's plan your event.
        </h2>

        <p
          style={{
            maxWidth: 600,
            margin: "0 auto 35px",
            color: "#ccc",
            fontSize: 18,
            lineHeight: 1.6,
          }}
        >
          Contact New Era Party Rentals today to check availability and get
          started.
        </p>

        <a
          href="#contact"
          style={{
            ...buttonStyle,
            background: "#f5c542",
            color: "#111",
            padding: "16px 32px",
            display: "inline-block",
          }}
        >
          Get a Quote
        </a>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "80px 6%",
          textAlign: "center",
        }}
      >
        <p style={eyebrowStyle}>CONTACT US</p>

        <h2 style={headingStyle}>Let's make your event happen.</h2>

        <div
          style={{
            marginTop: 35,
            display: "flex",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <div style={contactBoxStyle}>
            <strong>📞 Phone</strong>
            <p>Add your phone number</p>
          </div>

          <div style={contactBoxStyle}>
            <strong>✉️ Email</strong>
            <p>Add your email address</p>
          </div>

          <div style={contactBoxStyle}>
            <strong>📍 Location</strong>
            <p>Los Angeles, California</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#111",
          color: "#aaa",
          padding: "30px 6%",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} New Era Party Rentals. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 35,
        borderRadius: 12,
        textAlign: "center",
        boxShadow: "0 5px 25px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ fontSize: 45, marginBottom: 20 }}>{icon}</div>

      <h3 style={{ fontSize: 22, marginBottom: 12 }}>{title}</h3>

      <p style={{ color: "#666", lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

const linkStyle = {
  color: "#222",
  textDecoration: "none",
  fontWeight: 600,
};

const buttonStyle = {
  background: "#111",
  color: "#fff",
  textDecoration: "none",
  padding: "12px 20px",
  borderRadius: 6,
  fontWeight: "bold",
};

const eyebrowStyle = {
  fontSize: 13,
  letterSpacing: 3,
  fontWeight: "bold",
  color: "#777",
};

const headingStyle = {
  fontSize: "clamp(32px, 5vw, 50px)",
  lineHeight: 1.15,
  margin: "10px 0 20px",
};

const paragraphStyle = {
  maxWidth: 650,
  margin: "0 auto",
  color: "#666",
  fontSize: 18,
  lineHeight: 1.6,
};

const contactBoxStyle = {
  minWidth: 220,
  padding: 25,
  background: "#f8f8f8",
  borderRadius: 10,
};
