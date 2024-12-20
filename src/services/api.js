// Base URL for the API endpoints
const baseUrl = "https://playground.4geeks.com/contact";

// Specific base URL for agendas
const agendasBaseUrl = `${baseUrl}/agendas`;

// Get agendas
export const getAgendas = () => {
  return fetch(`${agendasBaseUrl}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Error obtaining agendas: ${response.status}`);
      return response.json();
    })
    .catch((error) => console.error(`Error fetching agendas: `, error));
};

// Get single agenda
export const getSingleAgenda = (slug) => {
  return fetch(`${agendasBaseUrl}/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Error obtaining the agenda: ${response.status}`);
      return response.json();
    })
    .catch((error) => console.error(`Error fetching ${slug} agenda: `, error));
};

// Create agenda
export const createAgenda = (slug) => {
  return fetch(`${agendasBaseUrl}/${slug}`, {
    method: "POST",
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Error creating the agenda: ${response.status}`);
      return response.json();
    })
    .catch((error) =>
      console.error(`Error fetching create ${slug} agenda: `, error),
    );
};

// Delete Agenda
export const deleteAgenda = (slug) => {
  return fetch(`${agendasBaseUrl}/${slug}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Error deleting the agenda: ${response.status}`);
      return response.json();
    })
    .catch((error) =>
      console.error(`Error fetching delete ${slug} agenda: `, error),
    );
};

// Get agenda contacts
export const getAgendaContacts = (slug) => {
  return fetch(`${agendasBaseUrl}/${slug}/contacts`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `Error obtaining the agenda contacts: ${response.status}`,
        );
      return response.json();
    })
    .catch((error) =>
      console.error(`Error fetching ${slug} agenda contacts: `, error),
    );
};

// Create agenda contact
export const createAgendaContact = (slug, contactData) => {
  return fetch(`${agendasBaseUrl}/${slug}/contacts`, {
    method: "POST",
    body: JSON.stringify(contactData),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to create contact");
      return response.json();
    })
    .catch((error) =>
      console.error(`Error fetching create contact ${slug} agenda : `, error),
    );
};

// Delete agenda contact
export const deleteAgendaContact = (slug, contactId) => {
  return fetch(`${agendasBaseUrl}/${slug}/contacts/${contactId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to delete contact");
      return response.json();
    })
    .catch((error) =>
      console.error(`Error fetching deleting contact ${slug} agenda : `, error),
    );
};

// Update agenda contact
export const updateAgendaContact = (slug, contactId, contactData) => {
  return fetch(`${agendasBaseUrl}/${slug}/contacts/${contactId}`, {
    method: "PUT",
    body: JSON.stringify(contactData),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to update contact");
      return response.json();
    })
    .catch((error) =>
      console.error(`Error fetching updating contact ${slug} agenda : `, error),
    );
};
