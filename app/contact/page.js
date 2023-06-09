import Link from "next/link";
import Sidebar from "../../components/Sidebar";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Here is contact page of our blog site</p>
      <Link href="/">Home Page</Link>
      <Sidebar />
    </div>
  );
}
