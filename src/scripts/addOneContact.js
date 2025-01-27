import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const addOneContact = async () => {
  const data = JSON.parse(await readContacts());
  data.push(createFakeContact());
  try {
    await writeContacts(data);
    console.log('To DB Added one contact!');
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
