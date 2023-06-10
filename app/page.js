import ContentSection from "../components/ContentSection";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <ContentSection />
      <ContentSection />
      <ContentSection />
      <div
        className="SidebarCont"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Sidebar />
      </div>
    </div>
  );
}
