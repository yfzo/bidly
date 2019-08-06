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
    knex('categories').insert({id: 1, name: 'Home'}),
    knex('categories').insert({id: 2, name: 'Games'}),
    knex('categories').insert({id: 3, name: 'Sporting Goods'}),
    knex('categories').insert({id: 4, name: 'Collectibles'}),
    knex('categories').insert({id: 5, name: 'Electronics'}),
    knex('categories').insert({id: 6, name: 'Fashion'}),
    knex('categories').insert({id: 7, name: 'Beauty'}),
    knex('categories').insert({id: 8, name: 'Toys'}),
    knex('categories').insert({id: 9, name: 'Food'}),
    knex('categories').insert({id: 10, name: 'Auto Parts'}),

    // knex('notifications').insert({auction_id: 1, message: 'auction-end'}),
    // knex('notifications').insert({auction_id: 1, message: 'winning-auction'}),

    knex('auctions').insert({id: 5, category_id: 1, name: 'Hemp Canvas Butterfly Chair', description: 'This is a wonderful alternative to the leather butterfly chair. The hemp cover breathes in a way that keeps you cool in the summer and warm during the winter. With extra strong fibers, you can rest assure that this chair will make you very comfortable.', min_bid: '5', end_time: Date.now() + 2700000, image: 'https://cuerodesign.com/wp-content/uploads/2018/06/Hemp-Canvas-Butterfly-Chair.jpg', user_id: 1}),
    knex('auctions').insert({id: 6, category_id: 1, name: 'Adjustable Height Standing Desk', description: 'Go from sitting to standing seamlessly with this contemporary, yet functional adjustable height desk.', min_bid: '10', end_time: Date.now() + 800000, image: 'https://www.finefurnituresandiego.com/images/P/ODP10444-48D908_silo.jpg', user_id: 2}),
    knex('auctions').insert({id: 7, category_id: 2, name: 'Switch Zelda Breathe Of the Wild', description: 'Nintendo Switch Zelda game. With case', min_bid: '6', end_time: Date.now() + 240000, image: 'https://i.ebayimg.com/00/s/MTYwMFgxMjAx/z/GOQAAOSw0VZdQN1X/$_59.JPG', user_id: 2}),
    knex('auctions').insert({id: 8, category_id: 2, name: 'Pokémon: Let\'s Go, Eevee! (New)', description: 'Brand new in box Let’s go Eevee with brand new Pokeball. Mew in ball never activated. Received two for gift. For Nintendo switch.', min_bid: '7', end_time: Date.now() - 10000, image: 'https://static-ca.ebgames.ca/images/products/739446/3max.jpg', user_id: 2}),
    knex('auctions').insert({id: 9, category_id: 2, name: 'Power Stone and Power Stone 2', description: 'For Sega and Dreamcast. Practically new. Happy to bundle a bonus game if bids reach a certain amount.', min_bid: '4', end_time: Date.now() - 1500000, image: 'https://i.redd.it/f3v44ow21q111.jpg', user_id: 2}),
    knex('auctions').insert({id: 10, category_id: 2, name: 'The Walking Dead Board Game: The Best Defense', description: 'Selling it as moving out/downsizing. Open box but never been used/played. Brand new condition.', min_bid: '2', end_time: Date.now() - 1500000, image: 'https://i.ebayimg.com/00/s/NjAwWDgwMA==/z/bREAAOSwe6FdPxCu/$_59.JPG', user_id: 2}),
    knex('auctions').insert({id: 11, category_id: 2, name: 'Gold Nintendo 64 With N64RGB Kit', description: 'Used condition. Cleaned system and controller(inside/outside). Tested. Content: 1 N64 system (cartridge slot compatible with Japanese and US games)', min_bid: '8', end_time: Date.now() - 1500000, image: 'https://cdn.shopify.com/s/files/1/0162/0510/products/2017-11-12_10_20_56_1024x1024.jpg?v=1511142829', user_id: 1}),
    knex('auctions').insert({id: 12, category_id: 2, name: 'Board Games', description: 'Yahtzee, Scrabble and Simpson Monopoly. Come with all pieces.', min_bid: '1', end_time: Date.now() + 1500000, image: 'https://i.ebayimg.com/00/s/NjAwWDgwMA==/z/0nYAAOSw4ThdP0YF/$_59.JPG', user_id: 1}),
    knex('auctions').insert({id: 13, category_id: 2, name: 'PlayStation VR Headset', description: 'Used ps4 vr headset with 2 motion controllers, ps4 camera, then 3 ps4 be games, StarWars Battlefront, Resident Evil Biohazard, PlayStation Vr Demo disc', min_bid: '30', end_time: Date.now() - 1500000, image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/136646-vr-review-sony-playstation-vr-review-image1-egh5xylqkf.jpg', user_id: 1}),
    knex('auctions').insert({id: 14, category_id: 3, name: 'Kawhi Autographed NBA Basketball', description: 'This basketball has been hand signed by 2019 NBA ALL STAR and Toronto Raptors Superstar small forward Kawhi Leonard. This item has been authenticated by professional autograph authentication services.', min_bid: '18', end_time: Date.now() + 1500000, image: 'https://images.bonanzastatic.com/afu/images/6082/cd9f/4e07_7737978084/kl_7.JPG', user_id: 1}),
    knex('auctions').insert({id: 15, category_id: 3, name: 'Sky Pattern Skateboard', description: 'Fashionable four wheels skateboard, perfect vehicle and entertainment tool. Shock resistance enhanced PP deck, can bear 150kg.', min_bid: '5', end_time: Date.now() + 1500000, image: 'https://ae01.alicdn.com/kf/HTB11uMJLXXXXXXuaXXXq6xXFXXXk/Outlife-CL-94-3D-Printing-Blue-Starry-Sky-Pattern-Skateboard-Complete-22-inch-Vintage-Cruiser-Skate.jpg', user_id: 1}),


    knex('users').insert({id: 1, first_name: 'Anna', last_name:'Tykhomyrova', email: 'anna@gmail.com', password:'pass123', balance:'200' }),
    knex('users').insert({id: 2, first_name: 'Asuka', last_name:'Kuwahara', email: 'asuka@gmail.com', password:'pass123', balance:'234' }),
    knex('users').insert({id: 3, first_name: 'Yifei', last_name:'Zhou', email: 'yifei@gmail.com', password:'pass123', balance:'200' }),

    // knex('bids').insert({user_id: 3, auction_id: 2, amount: 305}),
    // knex('bids').insert({user_id: 3, auction_id: 2, amount: 500}),
    // knex('bids').insert({user_id: 1, auction_id: 2, amount: 400}),
    // knex('bids').insert({user_id: 1, auction_id: 2, amount: 500}),
    // knex('bids').insert({user_id: 2, auction_id: 2, amount: 500}),
    // knex('bids').insert({user_id: 2, auction_id: 2, amount: 450}),
    // knex('bids').insert({user_id: 3, auction_id: 2, amount: 450}),

    // knex('bids').insert({user_id: 2, auction_id: 1, amount: 450}),
    // knex('bids').insert({user_id: 1, auction_id: 1, amount: 450}),
    // knex('bids').insert({user_id: 3, auction_id: 1, amount: 250}),
    // knex('bids').insert({user_id: 2, auction_id: 1, amount: 250}),
    // knex('bids').insert({user_id: 3, auction_id: 1, amount: 150}),
    // knex('bids').insert({user_id: 1, auction_id: 1, amount: 150}),
    // knex('bids').insert({user_id: 1, auction_id: 3, amount: 350}),
    // Anna's bids
    knex('bids').insert({user_id: 1, auction_id: 8, amount: 9}),
    knex('bids').insert({user_id: 1, auction_id: 6, amount: 11}),
    knex('bids').insert({user_id: 1, auction_id: 10, amount: 5}),
    knex('bids').insert({user_id: 1, auction_id: 10, amount: 9}),
    // knex('bids').insert({user_id: 1, auction_id: 9, amount: 7}),
    //Yifei's bids, 5 has ended
    knex('bids').insert({user_id: 3, auction_id: 5, amount: 7}),
    knex('bids').insert({user_id: 3, auction_id: 5, amount: 7}),
    knex('bids').insert({user_id: 3, auction_id: 6, amount: 14}),
    knex('bids').insert({user_id: 3, auction_id: 7, amount: 7}),
    knex('bids').insert({user_id: 3, auction_id: 8, amount: 7}),
    // knex('bids').insert({user_id: 3, auction_id: 9, amount: 13}),
    knex('bids').insert({user_id: 3, auction_id: 10, amount: 7}),
    knex('bids').insert({user_id: 3, auction_id: 5, amount: 9}),
    knex('bids').insert({user_id: 3, auction_id: 5, amount: 9}),
    knex('bids').insert({user_id: 3, auction_id: 5, amount: 9}),
    knex('bids').insert({user_id: 3, auction_id: 5, amount: 13}),
    knex('bids').insert({user_id: 3, auction_id: 5, amount: 15}),
    knex('bids').insert({user_id: 3, auction_id: 5, amount: 14}),
    knex('bids').insert({user_id: 3, auction_id: 5, amount: 10}),
    knex('bids').insert({user_id: 3, auction_id: 5, amount: 10}),
    // Yifei's bids on Anna's ongoing auction
    knex('bids').insert({user_id: 3, auction_id: 15, amount: 8}),
    knex('bids').insert({user_id: 3, auction_id: 15, amount: 8}),
    knex('bids').insert({user_id: 3, auction_id: 15, amount: 9}),
    knex('bids').insert({user_id: 3, auction_id: 15, amount: 10}),
    // Anna will bid on auction 7 (Zelda) $11
    knex('bids').insert({user_id: 3, auction_id: 7, amount: 10}),
    knex('bids').insert({user_id: 3, auction_id: 7, amount: 10}),
    knex('bids').insert({user_id: 3, auction_id: 7, amount: 7}),
    knex('bids').insert({user_id: 3, auction_id: 7, amount: 7}),
    knex('bids').insert({user_id: 3, auction_id: 7, amount: 7}),
    knex('bids').insert({user_id: 3, auction_id: 7, amount: 8}),
    knex('bids').insert({user_id: 3, auction_id: 7, amount: 8}),
    knex('bids').insert({user_id: 3, auction_id: 7, amount: 8}),
    knex('bids').insert({user_id: 3, auction_id: 7, amount: 9}),
    knex('bids').insert({user_id: 3, auction_id: 7, amount: 9}),
    knex('bids').insert({user_id: 3, auction_id: 7, amount: 12}),
    knex('bids').insert({user_id: 3, auction_id: 7, amount: 13}),
    ]);
  })
}
