export default class swapiService {
  apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    try {
      const res = await fetch(`${this.apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Could not fetch ${this.apiBase}${url}`);
      }
      return res.json();
    } catch (err) {
      throw new Error(err.name);
    }
  }
  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this.transformPerson);
  }
  async getPerson(id) {
    const res = await this.getResource(`/people/${id}`);
    return this.transformPerson(res);
  }
  extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }
  transformPerson = person => {
    return {
      id: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      height: person.height,
      mass: person.mass,
      hairColor: person.hair_color,
      skinColor: person.skin_color,
    };
  };
}
