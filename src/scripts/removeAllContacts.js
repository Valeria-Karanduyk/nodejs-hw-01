import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('DB is clear!');
  } catch (err) {
    console.error(err);
  }
};

removeAllContacts();
