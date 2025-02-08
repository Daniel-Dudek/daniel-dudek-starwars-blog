import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

const HomePageContent = () => {
  const navigate = useNavigate();

  const handleButtonNavigate = () => {
    navigate("/star-wars");
  };

  return (
    <>
      <div className="bg-light rounded-3 mx-5 my-4">
        <Container className="py-5 text-start">
          <h1>A Warm Welcome!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            earum maiores eveniet corrupti qui! At voluptatum, animi illo atque
            quisquam odio amet tenetur pariatur! Temporibus omnis aliquam
            voluptate recusandae maxime.
          </p>
          <Button
            className="fw-bold"
            variant="primary"
            onClick={handleButtonNavigate}
          >
            See Star Wars!
          </Button>
        </Container>
      </div>
    </>
  );
};

export default HomePageContent;
