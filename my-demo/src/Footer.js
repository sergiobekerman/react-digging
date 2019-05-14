import React from 'react';
import { Container, Row, Col } from "reactstrap";

function Footer() {
  return (
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Cibrax 2019</span>
            </div>
          </div>
        </footer>
  );
}

export default Footer;