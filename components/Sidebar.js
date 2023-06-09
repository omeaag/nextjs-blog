import BlogSection from "./BlogSection";
export default function Sidebar() {
  return (
    <div
      className="Sidebar"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <BlogSection />
      <BlogSection />
      <BlogSection />
      <BlogSection />
    </div>
  );
}
