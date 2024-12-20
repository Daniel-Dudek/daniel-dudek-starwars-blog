import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Container, Form, ListGroup, Spinner } from "react-bootstrap";
import {
  createAgendaContact,
  deleteAgendaContact,
  getAgendaContacts,
  updateAgendaContact,
} from "../services/api";
import HomePageHeader from "../components/HomePageHeader";
import HomePageFooter from "../components/HomePageFooter";
import ContactModal from "../components/ContactModal";

const ContactAgendasPage = () => {
  const { slug } = useParams();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [currentContact, setCurrentContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Function to fetch and update the contact list
  const getContactList = () => {
    getAgendaContacts(slug)
      .then((data) => {
        setContacts(data.contacts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching contacts", error);
        setLoading(false);
      });
  };

  // This useEffect function will be executed only once, when the component is finally loaded for the first time.
  useEffect(() => {
    getContactList();
  }, [slug]);

  const handleAddContact = () => {
    const { name, phone, email, address } = contactData;
    if (
      name.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === "" ||
      address.trim() === ""
    )
      return;

    createAgendaContact(slug, contactData)
      .then(() => {
        setContactData({ name: "", phone: "", email: "", address: "" });
        getContactList();
      })
      .catch((error) => console.error("Error adding contact:", error));
  };

  const handleDeleteContact = (contactId) => {
    deleteAgendaContact(slug, contactId)
      .then(() => {
        getContactList();
      })
      .catch((error) => console.error("Error deleting contact:", error));
  };

  const handleUpdateContact = (contactId) => {
    updateAgendaContact(slug, contactId, contactData)
      .then(() => {
        getContactList();
        setShowModal(false);
      })
      .catch((error) => console.error("Error updating contact:", error));
  };

  const handleEditClick = (contact) => {
    setContactData({
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      address: contact.address,
      id: contact.id,
    });
    setShowModal(true);
  };

  if (loading) {
    return (
      <>
        <HomePageHeader />
        <Container className="mt-4 text-center">
          <Spinner animation="border" />
          <p>Loading contacts...</p>
        </Container>
        <HomePageFooter />
      </>
    );
  }

  return (
    <>
      <HomePageHeader />
      <Container className="mt-4" style={{ maxWidth: "600px" }}>
        <h1 className="text-center">Contacts of {slug}</h1>
        <Form.Control
          className="my-2"
          type="text"
          name="name"
          placeholder="Name"
          value={contactData.name}
          onChange={(e) =>
            setContactData({ ...contactData, name: e.target.value })
          }
        />
        <Form.Control
          className="my-2"
          type="text"
          name="phone"
          placeholder="Phone"
          value={contactData.phone}
          onChange={(e) =>
            setContactData({ ...contactData, phone: e.target.value })
          }
        />
        <Form.Control
          className="my-2"
          type="email"
          name="email"
          placeholder="Email"
          value={contactData.email}
          onChange={(e) =>
            setContactData({ ...contactData, email: e.target.value })
          }
        />
        <Form.Control
          className="my-2"
          type="text"
          name="address"
          placeholder="Address"
          value={contactData.address}
          onChange={(e) =>
            setContactData({ ...contactData, address: e.target.value })
          }
        />
        <Button onClick={handleAddContact}>Add Contact</Button>
        <ListGroup className="my-4">
          {contacts.map((contact) => (
            <ListGroup.Item
              key={contact.id}
              onMouseEnter={() => setCurrentContact(contact.id)}
              onMouseLeave={() => setCurrentContact(null)}
              style={{ position: "relative" }}
            >
              <div>
                <strong>{contact.name}</strong>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
                <p>{contact.address}</p>
                {currentContact === contact.id && (
                  <div
                    className="position-absolute top-0 end-0 p-2"
                    style={{ zIndex: 10 }}
                  >
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleEditClick(contact)}
                      className="me-2"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteContact(contact.id)}
                      className="me-2"
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
      <ContactModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        contactData={contactData}
        setContactData={setContactData}
        handleUpdateContact={handleUpdateContact}
      />
      <HomePageFooter />
    </>
  );
};
export default ContactAgendasPage;
