import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, ListGroup, Spinner } from "react-bootstrap";
import { createAgenda, deleteAgenda, getAgendas } from "../services/api";
import HomePageHeader from "../components/HomePageHeader";
import HomePageFooter from "../components/HomePageFooter";

const AgendasPage = () => {
  const [agendas, setAgendas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentAgenda, setCurrentAgenda] = useState(null);
  const navigate = useNavigate(); // hook useNavigate - react router

  useEffect(() => {
    handleGetAgendas();
  }, []);

  const handleGetAgendas = () => {
    getAgendas()
      .then((data) => {
        setAgendas(data.agendas);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching agendas", error);
        setLoading(false);
      });
  };

  const handleCreateAgenda = () => {
    const newAgendaName = prompt("Enter the new agenda name:");
    if (newAgendaName) {
      createAgenda(newAgendaName)
        .then(() => {
          handleGetAgendas();
        })
        .catch((error) => console.error("Error creating agenda", error));
    }
  };

  const handleDeleteAgenda = (agendaName) => {
    deleteAgenda(agendaName)
      .then(() => {
        handleGetAgendas();
      })
      .catch((error) => console.error("Error deleting agenda", error));
  };

  const handleSeeAgenda = (slug) => {
    navigate(`/agendas/${slug}/contacts`);
  };

  if (loading) {
    return (
      <>
        <HomePageHeader />
        <Container className="mt-4 text-center">
          <Spinner animation="border" />
          <p>Loading agendas...</p>
        </Container>
        <HomePageFooter />
      </>
    );
  }

  return (
    <>
      <HomePageHeader />
      <Container>
        <h1>Agendas</h1>
        <Button onClick={handleCreateAgenda}>Create Agenda</Button>
        <ListGroup className="my-4">
          {agendas.map((agenda) => (
            <ListGroup.Item
              key={agenda.slug}
              onMouseEnter={() => setCurrentAgenda(agenda.slug)}
              onMouseLeave={() => setCurrentAgenda(null)}
              className="d-flex justify-content-between align-items-center"
            >
              <span>{agenda.slug}</span>
              {currentAgenda === agenda.slug && (
                <div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleSeeAgenda(agenda.slug)}
                    className="me-2"
                  >
                    See
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteAgenda(agenda.slug)}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
      <HomePageFooter />
    </>
  );
};

export default AgendasPage;
