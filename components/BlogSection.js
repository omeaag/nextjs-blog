export default function BlogSection({ count }) {
  return (
    <div
      className="Section"
      style={{
        backgroundColor: "pink",
        marginBottom: "5px",
        marginRight: "5px",
        width: "250px",
        height: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        textAlign: "center",
      }}
    >
      <p>Hi there is a section {count}</p>
    </div>
  );
}
