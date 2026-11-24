
export default function Loading() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <div>
        <div
          style={{
            width: "55px",
            height: "55px",
            border: "5px solid #EAF1FF",
            borderTop: "5px solid #1769FF",
            borderRadius: "50%",
            margin: "0 auto 25px",
            animation: "pizzo-spin 1s linear infinite",
          }}
        />

        <h2 style={{ color: "#071B46" }}>PIZZO FX</h2>

        <p style={{ color: "#64748B" }}>
          Preparing your market education experience...
        </p>

        <style>{`
          @keyframes pizzo-spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </main>
  );
}
