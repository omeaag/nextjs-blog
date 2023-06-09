import BlogSection from "./BlogSection";

export default function Sidebar() {
  return (
    <div
      className="Sidebar"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BlogSection count={1} />
      <BlogSection count={2} />
      <BlogSection count={3} />
    </div>
  );
}
