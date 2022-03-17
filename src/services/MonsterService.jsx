import axios from "axios";

const Monster_BASE_URL = "http://localhost:8080/monster";

class MonsterService {
  getMonsters() {
    return axios.get(Monster_BASE_URL + "/allmonsters");
  }

  createMonster(monster) {
    return axios.post(Monster_BASE_URL + "/addmonsters", monster);
  }
  deleteMonster(id) {
    return axios.delete(Monster_BASE_URL + "/monsterId/" + id);
  }

  getMonsterByName(creature) {
    return axios.get(Monster_BASE_URL + "/monster/" + creature);
  }

  getMonsterById(id) {
    return axios.get(Monster_BASE_URL + "/monsterId/" + id);
  }

  updateMonster(id, monster) {
    return axios.put(Monster_BASE_URL + "/monsterId/" + id, monster);
  }
}
export default new MonsterService();
