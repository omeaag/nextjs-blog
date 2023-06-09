import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <h1>Home Page</h1>
      <div
        className="SidebarCont"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Sidebar />
        <Sidebar />
        <Sidebar />
      </div>
    </div>
  );
}
