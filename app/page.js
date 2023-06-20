import "./globals.css";

import ContentSection from "../components/ContentSection";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="componentContainer" style={{ display: "flex" }}>
        <div className="contentSection" style={{ marginRight: "5px" }}>
          <ContentSection />
          <ContentSection />
          <ContentSection />
        </div>
        <div
          className="SidebarCont"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
