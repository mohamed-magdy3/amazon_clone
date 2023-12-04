import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Marquee from "react-fast-marquee";

const options = [
  {
    scroll: false,
    backdrop: true,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <div className="UnderHeader" >
      <ul data-aos="slide-right"  data-aos-delay="250">
        <li className="all" onClick={toggleShow}>
          <i class="fa-solid fa-bars"></i>
          <span>All</span>
        </li>
        <li className="list-row">Today's Deals</li>
        <li className="list-row">Customer Service</li>
        <li className="list-row">Gift Cards</li>
        <li className="list-row">Registry</li>
        <li className="list-row">Sell</li>
      </ul>
      <Offcanvas show={show} onHide={handleClose} {...props} className="offcanv">
        <Button className="close-btn" onClick={handleClose} variant="danger">
          x
        </Button>
        <div className="offCanvas-header">
          <i class="fa-solid fa-user"></i>
          <span>Hello, Sign In</span>
        </div>
        <Offcanvas.Body>
          <div className="list-offCanvas">
            <div className="list-offcanvas-container">
              <h5 className="list-titles">Digital Content & Devices</h5>
              <div>
                <ul className="row-list">
                  <li>Amazon Music</li>
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ color: "black" }}
                  ></i>
                </ul>
                <ul className="row-list">
                  <li>Kindle E-readers & Books</li>
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ color: "black" }}
                  ></i>
                </ul>
                <ul className="row-list" id="border-bottom">
                  <li>Amazon Appstore</li>
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ color: "black" }}
                  ></i>
                </ul>
              </div>
            </div>
            <div className="list-offcanvas-container">
              <h5 className="list-titles pt-4">Shop By Department</h5>
              <div>
                <ul className="row-list">
                  <li>Electronics</li>
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ color: "black" }}
                  ></i>
                </ul>
                <ul className="row-list">
                  <li>Computers</li>
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ color: "black" }}
                  ></i>
                </ul>
                <ul className="row-list" id="border-bottom">
                  <li>Smart Home</li>
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ color: "black" }}
                  ></i>
                </ul>
              </div>
            </div>
            <div className="list-offcanvas-container">
              <h5 className="list-titles pt-4">Programs & Features</h5>
              <div>
                <ul className="row-list">
                  <li>Gift Cards</li>
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ color: "black" }}
                  ></i>
                </ul>
                <ul className="row-list">
                  <li>Amazon live</li>
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ color: "black" }}
                  ></i>
                </ul>
                <ul className="row-list" id="border-bottom">
                  <li>International Shopping</li>
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ color: "black" }}
                  ></i>
                </ul>
              </div>
            </div>
            <div className="list-offcanvas-container">
              <h5 className="list-titles pt-4">Help & Settings</h5>
              <div>
                <ul className="row-list">
                  <li>Your Account</li>
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ color: "black" }}
                  ></i>
                </ul>
                <ul className="row-list">
                  <li>Customer Service</li>
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ color: "black" }}
                  ></i>
                </ul>
                <ul className="row-list" id="border-bottom">
                  <li>Contact us</li>
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ color: "black" }}
                  ></i>
                </ul>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}
