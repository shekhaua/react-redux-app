import faker from 'faker';

class Faker {
  fakeAsync(path, delay = 1000, error = '') {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = faker.fake("{{" + path + "}}");

        if (!error) {
          resolve({ data });
        } else {
          reject(error);
        }
      }, delay);
    });
  }
}

export default Faker;
