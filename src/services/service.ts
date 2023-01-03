import {transformPerson} from '../utils/utils';
import axios from 'axios';

export default class swapiService {
  apiBase: string = 'https://swapi.dev/api';

  async getResource(url: string) {
    try {
      const res = await axios.get(`${this.apiBase}${url}`);

      if (res.status !== 200) {
        throw new Error(`Could not fetch ${this.apiBase}${url}`);
      }
      return res.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async getAllPeople() {
    const res = await this.getResource('/people/');
    return res.results.map(transformPerson);
  }

  async getPerson(id: string) {
    const res = await this.getResource(`/people/${id}`);
    return transformPerson(res);
  }
}
