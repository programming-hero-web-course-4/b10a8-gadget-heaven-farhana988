import Heading from "./Heading";

function Footer() {
  return (
    <div className="mt-20 pt-10 bg-[#FFFFFF] text-[#09080F]">
      <Heading
        title={"Gadget Heaven"}
        subtitle={"Leading the way in cutting-edge technology and innovation."}
      ></Heading>
      <footer className="footer  grid grid-cols-2 lg:grid-cols-3 pl-20 lg:pl-80 p-10">
        <nav>
          <h6 className="font-bold text-2xl">Services</h6>
          <a className="link link-hover text-[#09080F99] text-lg">Product Support</a>
          <a className="link link-hover text-[#09080F99] text-lg">Order Tracking</a>
          <a className="link link-hover text-[#09080F99] text-lg">Shipping & Delivery</a>
          <a className="link link-hover text-[#09080F99] text-lg">Returns</a>
        </nav>
        <nav>
          <h6 className="font-bold text-2xl">Company</h6>
          <a className="link link-hover text-[#09080F99] text-lg">About Us</a>
          <a className="link link-hover text-[#09080F99] text-lg">Careers</a>
          <a className="link link-hover text-[#09080F99] text-lg">Contact</a>
        </nav>
        <nav>
          <h6 className="font-bold text-2xl">Legal</h6>
          <a className="link link-hover text-[#09080F99] text-lg">Terms of Service</a>
          <a className="link link-hover text-[#09080F99] text-lg">Privacy policy</a>
          <a className="link link-hover text-[#09080F99] text-lg">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
