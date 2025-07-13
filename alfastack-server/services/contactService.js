import Contact from "../models/contact.js";


export const saveContact = async (data) => {
  const contact = new Contact(data);
  return await contact.save();
};

export const getAllContactsService = async () => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  return contacts;
};
