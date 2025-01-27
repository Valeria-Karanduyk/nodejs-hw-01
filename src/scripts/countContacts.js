import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  return JSON.parse(await readContacts()).length;
};

console.log(await countContacts());
