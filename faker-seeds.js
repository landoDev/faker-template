const faker = require('faker');        <-------- install and import faker
const createFakerAccount = () => ({        
  username: faker.internet.userName(),
  password: faker.commerce.color(),      <--------Seed object that I want created
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName()
});
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      const fakeUsers = [];        <-----------------array for fake objects
      const desiredFakeUsers = 50;   <----------------how many objects I want created
      for (let i = 0; i < desiredFakeUsers; i++) {
        fakeUsers.push(createFakerAccount());     <--for loop that is looping 50 times and pushing a fake user to my array each time
      }
      return knex('users').insert(fakeUsers);
    });
};
