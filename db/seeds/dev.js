
exports.seed = async function(knex) {
  // truncate all existing tables
  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE "channel" CASCADE');
  await knex.raw('TRUNCATE TABLE "video" CASCADE');
  
  await knex('channel').insert([{
    id: 1,
    name:"channel1"

},
{
    id: 2,
    name:"channel2"
  }]);

  await knex('user').insert([{
    id: 1,
    name:"user1",
    email:"user1@test.com",
    channelId: 1

  },
  {
    id: 2,
    name:"user2",
    email:"user2@test.com",
    channelId: 2
},
{
    id: 3,
    name:"user3",
    email:"user3@test.com"
}
]);

return knex('video').insert([{
  id: 1,
  title: "videoByUser1",
  channelId:1
},
{
  id: 2,
  title: "video2ByUser1",
  channelId:2
},
{
  id: 3,
  title: "videoByUser2",
  channelId:2
}
])

};
