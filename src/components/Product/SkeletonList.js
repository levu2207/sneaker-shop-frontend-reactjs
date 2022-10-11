import React from "react";
import { Card, Placeholder } from "react-bootstrap";
import placeholderImage from "../../Assets/image/placeholder_image.png";

const SkeletonList = ({ length }) => {
  return (
    <div className="row">
      {Array.from(new Array(length)).map((card, index) => (
        <div key={index} className="col-10 col-md-4 col-lg-3">
          <Card className="border-0 mt-3">
            <Card.Body>
              <Placeholder className="text-center mb-2" as={Card.Text} animation="glow">
                <Placeholder xs={6} bg="secondary" />
              </Placeholder>
              <Placeholder className="text-center" as={Card.Text} animation="glow">
                <Placeholder xs={7} size="lg" bg="secondary" />
              </Placeholder>
              <Placeholder animation="glow">
                <Card.Img className="my-3 opacity-50" variant="mid" src={placeholderImage} />
              </Placeholder>
              <Placeholder className="text-center mb-2" as={Card.Text} animation="glow">
                <Placeholder xs={4} bg="secondary" /> <Placeholder xs={4} bg="secondary" />
              </Placeholder>
              <Placeholder animation="glow">
                <Placeholder.Button className="me-2" variant="secondary" xs={2} />
              </Placeholder>
              <Placeholder animation="glow">
                <Placeholder.Button variant="secondary" xs={9} />
              </Placeholder>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default SkeletonList;
