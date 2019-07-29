exports.seed = function(knex, Promise) {
  
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    return knex('categories').del()
  })
  .then(function () {
    return knex('auctions').del()
  })
  .then(function () {
    return knex('bids').del()
  })
  .then(function () {
    return knex('notifications').del()
  }) 
  .then(function () {
    return Promise.all([
      //set the auto increment id to 1
      knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE notifications_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE auctions_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE categories_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE bids_id_seq RESTART WITH 1'),

    // Inserts seed entries
    knex('categories').insert({name: 'Food'}),
    knex('categories').insert({name: 'Beauty'}),
    knex('categories').insert({name: 'Home stuff'}),

    // knex('notifications').insert({auction_id: 1, message: 'auction-end'}),
    // knex('notifications').insert({auction_id: 1, message: 'winning-auction'}),

    knex('auctions').insert({category_id: 1, name: 'snickers ice cream', description: 'lots of chocolate and tasty', min_bid: '100', end_time: Date.now() + 400000, image: 'https://i.imgur.com/EZjcSmV.jpg', user_id: 1}),
    knex('auctions').insert({category_id: 1, name: 'oreo ice cream', description: 'creamy and tasty', min_bid: '300', end_time: Date.now() + 800000, image: 'https://i.imgur.com/vDhRudd.jpg', user_id: 2}),
    knex('auctions').insert({category_id: 2, name: 'Small Corgi', description: 'This corgi is a very good corgi. Guaranteed to make you happy. Just feed 3 times a day and walk as needed. The goodest corgi you can find in the world. You will love this corgi for sure.', min_bid: '200', end_time: Date.now() + 10000, image: 'https://i.imgur.com/aXS6DOU.jpg', user_id: 2}),
    knex('auctions').insert({category_id: 3, name: 'Husky', description: 'This corgi is a very good corgi. Guaranteed to make you happy. Just feed 3 times a day and walk as needed. The goodest corgi you can find in the world. You will love this corgi for sure.', min_bid: '200', end_time: Date.now() + 1500000, image: 'https://i.imgur.com/sNZ0V4q.jpg', user_id: 2}),


    knex('users').insert({first_name: 'Anna', last_name:'Tykhomyrova', email: 'anna@gmail.com', password:'pass123', balance:'1000' }),
    knex('users').insert({first_name: 'Asuka', last_name:'Kuwahara', email: 'asuka@gmail.com', password:'pass123', balance:'20000' }),
    knex('users').insert({first_name: 'Yifei', last_name:'Zhou', email: 'yifei@gmail.com', password:'pass123', balance:'1000' }),

    knex('bids').insert({user_id: 3, auction_id: 2, amount: 305}),
    knex('bids').insert({user_id: 3, auction_id: 2, amount: 500}),
    knex('bids').insert({user_id: 1, auction_id: 2, amount: 400}),
    knex('bids').insert({user_id: 1, auction_id: 2, amount: 500}),
    knex('bids').insert({user_id: 2, auction_id: 2, amount: 500}),
    knex('bids').insert({user_id: 2, auction_id: 2, amount: 450}),
    knex('bids').insert({user_id: 3, auction_id: 2, amount: 450}),

    knex('bids').insert({user_id: 2, auction_id: 1, amount: 450}),
    knex('bids').insert({user_id: 1, auction_id: 1, amount: 450}),
    knex('bids').insert({user_id: 3, auction_id: 1, amount: 250}),
    knex('bids').insert({user_id: 2, auction_id: 1, amount: 250}),
    knex('bids').insert({user_id: 3, auction_id: 1, amount: 150}),
    knex('bids').insert({user_id: 1, auction_id: 1, amount: 150}),
    knex('bids').insert({user_id: 1, auction_id: 3, amount: 350})
    ]);
  })
}
