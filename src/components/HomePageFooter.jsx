import Container from "react-bootstrap/Container";

const HomePageFooter = () => {
  return (
    <footer
      data-bs-theme="dark"
      className="bg-body-tertiary text-white text-center py-4"
    >
      <Container>
        <p className="mb-0">
          {" "}
          Copyright &copy; Your Website {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

export default HomePageFooter;
