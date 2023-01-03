import {IPerson} from '../redux/models/IPerson';

function extractId(item: IPerson) {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.url.match(idRegExp)[1];
}

export const transformPerson = (person: IPerson): PersonProps => {
  return {
    id: extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
    height: person.height,
    mass: person.mass,
    skinColor: person.skin_color,
  };
};
