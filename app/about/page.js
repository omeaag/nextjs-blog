import Link from "next/link";
import Header from "../../components/Header";
import ContentSection from "../../components/ContentSection";

export default function About() {
  return (
    <div className="container">
      <h1>About Page</h1>
      <ContentSection />
      <ContentSection />
      <ContentSection />
    </div>
  );
}
