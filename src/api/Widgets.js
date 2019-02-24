import Faker from "./Faker";

class WidgetsService extends Faker {

  getTotalViews () {
    return this.fakeAsync('random.number', 2000).then((resp) => {
      return {
        totalViews: resp.data
      }
    });
  }

  getTotalVisits() {
    return this.fakeAsync('random.number', 1000).then((resp) => {
      return {
        totalVisits: resp.data
      }
    });
  }

  getUniqueVisits() {
    return this.fakeAsync('random.number', 700).then((resp) => {
      return {
        uniqueVisits: resp.data
      }
    });
  }
}

export default new WidgetsService();