import { Link } from "react-router-dom";
import Heading from "./Heading";

function Footer() {
  return (
    <div className="mt-20 pt-10 bg-[#FFFFFF] text-[#09080F]">
      <Heading
        title={"Gadget Heaven"}
        subtitle={" Stay ahead with the latest in groundbreaking tech, setting the standard for tomorrow’s gadgets today."}
      ></Heading>
      <footer className="footer  grid grid-cols-2 lg:grid-cols-3 pl-20 lg:pl-80 p-10">
        <nav>
          <h6 className="font-bold text-2xl">Services</h6>
          <Link className="link link-hover text-[#09080F99] text-lg">Product Support</Link>
          <Link className="link link-hover text-[#09080F99] text-lg">Order Tracking</Link>
          <Link className="link link-hover text-[#09080F99] text-lg">Shipping & Delivery</Link>
          <Link className="link link-hover text-[#09080F99] text-lg">Returns</Link>
        </nav>
        <nav>
          <h6 className="font-bold text-2xl">Company</h6>
          <Link className="link link-hover text-[#09080F99] text-lg">About Us</Link>
          <Link className="link link-hover text-[#09080F99] text-lg">Careers</Link>
          <Link className="link link-hover text-[#09080F99] text-lg">Contact</Link>
        </nav>
        <nav>
          <h6 className="font-bold text-2xl">Legal</h6>
          <Link className="link link-hover text-[#09080F99] text-lg">Terms of Service</Link>
          <Link className="link link-hover text-[#09080F99] text-lg">Privacy policy</Link>
          <Link className="link link-hover text-[#09080F99] text-lg">Cookie policy</Link>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
