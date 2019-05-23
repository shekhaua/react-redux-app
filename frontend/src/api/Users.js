import faker from 'frontend/src/api/Faker';
import Faker from './Faker';

class UserService extends Faker {

  getCurrentUser() {
    return this.fakeAsync('image.avatar', 2000).then((resp) => {
      return {
        avatar: resp.data,
        ...faker.helpers.userCard()
      }
    });
  }
}

export default new UserService();
