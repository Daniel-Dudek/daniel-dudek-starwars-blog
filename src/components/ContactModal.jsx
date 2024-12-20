import { Button, Modal, Form } from "react-bootstrap";

const ContactModal = ({
  showModal,
  handleClose,
  contactData,
  setContactData,
  handleUpdateContact,
}) => {
  const handleSaveChanges = () => {
    console.log(contactData.id);
    if (contactData.id) {
      handleUpdateContact(contactData.id);
    }
  };
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;
