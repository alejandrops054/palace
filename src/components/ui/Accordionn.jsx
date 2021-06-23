import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Accordionn = (props) => {
  const Component =props.component;
  const title = props.title || "";
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button
        data-bs-toggle="collapse"
        className="accordion-button collapsed card mt-1 pr-5 pb-1"
        color="dark"
        onClick={toggle}
        style={{ padding:'1.5rem 1rem', height:'68px' }}
        aria-expanded="true"
        aria-controls="collapseOne"
      ><h5 className='accordion-header text-left '>{title}</h5></Button>
      <Collapse isOpen={isOpen} className="accordion-body">
        <Card >
          <CardBody>
            <Component/>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Accordionn;