import { saveContact } from "../services/contactService.js";
import { getAllContactsService } from '../services/contactService.js';

export const handleContact = async (req, res) => {

  try {
    const saved = await saveContact(req.body);
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    console.error("Contact Save Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



export const getAllContacts = async (req, res) => {
  try {
    const contacts = await getAllContactsService();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
