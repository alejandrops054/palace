import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from "reactstrap";

import CancelAffiliationInfo from "./components/CancelAffiliationInfo";
import CancelAffiliationType from "./components/CancelAffiliationType";
import CancelAffiliationRefund from "./components/CancelAffiliationRefund";

const CancelAffiliation = (props) => {
    const {
        buttonLabel,
        className
      } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div>
        <Button color="danger" onClick={toggle}>
          {buttonLabel}
        </Button>
        <Modal isOpen={modal} toggle={toggle} className={className} size='lg'>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <CancelAffiliationInfo />
            <CancelAffiliationType />
            <CancelAffiliationRefund />
            <Row>
                <Col>
                    <Button>Print Cancel RCI</Button>
                </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default CancelAffiliation;
