import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const data = JSON.parse(await readContacts());
  if (!data.length) return console.log('DB is empty');
  data.length -= 1;
  try {
    await writeContacts(data);
    console.log('From DB removed one last contact!');
  } catch (err) {
    console.error(err);
  }
};

removeLastContact();
