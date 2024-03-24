import Nav from "@/components/nav";
import Event from "@/components/events";
import Footer from "@/components/footer";

export default function Events() {
  return (
    <>
      <Nav currentPath={"/events"} />
      <Event />
      <Footer />
    </>
  );
}
