import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const data = JSON.parse(await readContacts());
  for (let index = 0; index < number; index++) {
    data.push(createFakeContact());
  }
  try {
    await writeContacts(data);
    console.log(`DB Updated! Added ${number} contact(s)!`);
  } catch (err) {
    console.error(err);
  }
};

generateContacts(5);
