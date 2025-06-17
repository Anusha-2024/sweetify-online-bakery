const products = [
  {
    id: 1,
    name: 'Black Forest Cake',
    price: 599.00,
    image: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_800,h_1200/https://www.savingdessert.com/wp-content/uploads/2019/08/Black-Forest-Cake-Recipe-2-800x1200.jpg',
    description: 'Chocolate layers with cherries & whipped cream.'
  },
  {
    id: 2,
    name: 'Red Velvet Cake',
    price: 699.00,
    image: 'https://www.modernhoney.com/wp-content/uploads/2017/12/Red-Velvet-Cake-9.jpg',
    description: 'Moist red sponge with cream cheese frosting.'
  },
  {
    id: 3,
    name: 'Vanilla Bean Cake',
    price: 499.00,
    image: 'https://i.pinimg.com/originals/d1/17/36/d117363da6d85b7becfa93eff33128c0.jpg',
    description: 'Classic vanilla cake made with real vanilla beans.'
  },
  {
    id: 4,
    name: 'Chocolate Truffle Cake',
    price: 749.00,
    image: 'https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/04March/Chocolate-Cake-800x800.jpg',
    description: 'Rich chocolate cake with layers of truffle filling.'
  },
  {
    id: 5,
    name: 'Blueberry Cheesecake',
    price: 849.00,
    image: 'https://th.bing.com/th/id/R.4eff5666b77d3eff4a1c03decec85d38?rik=9jsO9EZbcSxeVQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-4vD0kKPjAGc%2fThs-uATCP8I%2fAAAAAAAAADg%2fzLU_LcrvZLY%2fs1600%2fNY_Blueberry_Cheesecake_800.jpg&ehk=xOn34Ya9J%2bjA%2bRYPWYFzrHzD2VfW%2bGqvXsTOWeSn8jQ%3d&risl=&pid=ImgRaw&r=0',
    description: 'Smooth cheesecake topped with fresh blueberries.'
  },
  {
    id: 6,
    name: 'Strawberry Shortcake',
    price: 679.00,
    image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Best-Strawberry-Shortcake_EXPS_NDIYD19_37452_E04_15_1b.jpg',
    description: 'Tender cake layered with strawberries and cream.'
  },
  {
    id: 7,
    name: 'Lemon Zest Cake',
    price: 579.00,
    image: 'https://i1.wp.com/intheplayroom.co.uk/wp-content/uploads/2015/06/Zesty-lemon-cake_landscape_1.jpg',
    description: 'Bright and tangy lemon-infused sponge cake.'
  },
  {
    id: 8,
    name: 'Coconut Cream Cake',
    price: 649.00,
    image: 'https://th.bing.com/th/id/OIP.vWKrZ-88IYpf9LoCmo0YbgHaHa?rs=1&pid=ImgDetMain',
    description: 'Fluffy coconut sponge with creamy coconut frosting.'
  },
  {
    id: 9,
    name: 'Chocolate Fudge Cake',
    price: 749.00,
    image: 'https://th.bing.com/th/id/OIP.X1b1IInUQXnDYUcQn-uY6QHaHa?rs=1&pid=ImgDetMain',
    description: 'Decadent chocolate fudge cake with ganache.'
  },
  {
    id: 10,
    name: 'Pineapple Upside-Down Cake',
    price: 599.00,
    image: 'https://i.pinimg.com/originals/c5/39/be/c539be300927aa55c0e67a16afba4b35.jpg',
    description: 'Classic pineapple-topped caramel cake.'
  },
  {
    id: 11,
    name: 'Carrot Cake',
    price: 599.00,
    image: 'https://preppykitchen.com/wp-content/uploads/2020/04/carrot-cake-Recipe-new.jpg',
    description: 'Moist carrot cake with cream cheese icing.'
  },
  {
    id: 12,
    name: 'Coffee Cake',
    price: 529.00,
    image: 'https://th.bing.com/th/id/OIP.nAZ-VGTLYpzu7opjgtjGsAHaHa?rs=1&pid=ImgDetMain',
    description: 'Cinnamon crumb coffee cake perfect for breakfast.'
  },
  {
    id: 13,
    name: 'Almond Cake',
    price: 639.00,
    image: 'https://th.bing.com/th/id/OIP.f0NOUEt8rygAJgPtRHfgHAHaHa?rs=1&pid=ImgDetMain',
    description: 'Soft almond sponge topped with slivered almonds.'
  },
  {
    id: 14,
    name: 'Pumpkin Cake',
    price: 599.00,
    image: 'https://www.itsalwaysautumn.com/wp-content/uploads/2023/09/pumpkin-cake-square-600x600.jpg',
    description: 'Spiced pumpkin cake with a creamy glaze.'
  },
  {
    id: 15,
    name: 'German Chocolate Cake',
    price: 779.00,
    image: 'https://th.bing.com/th/id/OIP.Clz-eM2s5huSYe9BB3f-sgHaHa?rs=1&pid=ImgDetMain',
    description: 'Coconut-pecan filling between layers of chocolate cake.'
  },
  {
    id: 16,
    name: 'Chocolate Mousse Cake',
    price: 819.00,
    image: 'https://simplyhomecooked.com/wp-content/uploads/2022/08/chocolate-mousse-cake-3.jpg',
    description: 'Light chocolate mousse between chocolate layers.'
  },
  {
    id: 17,
    name: 'Butter Cake',
    price: 499.00,
    image: 'https://anmcupcakes.com/wp-content/uploads/2023/06/DSC07198-1080x941.jpg',
    description: 'Classic rich and buttery cake.'
  },
  {
    id: 18,
    name: 'Tres Leches Cake',
    price: 729.00,
    image: 'https://www.lemonblossoms.com/wp-content/uploads/2023/03/Tres-Leches-Cake-S2.jpg',
    description: 'Soft sponge soaked in three kinds of milk.'
  },
  {
    id: 19,
    name: 'Molten Lava Cake',
    price: 749.00,
    image: 'https://www.foodnetwork.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg',
    description: 'Chocolate cake with a gooey molten center.'
  },
  {
    id: 20,
    name: 'Angel Food Cake',
    price: 529.00,
    image: 'https://handletheheat.com/wp-content/uploads/2022/06/angel-food-cake-recipe-SQUARE.jpg',
    description: 'Light and fluffy low-fat cake.'
  },
  {
    id: 21,
    name: 'Orange Cream Cake',
    price: 579.00,
    image: 'https://www.aberdeenskitchen.com/wp-content/uploads/2020/07/Orange-Cake-with-Zesty-Cream-Cheese-Frosting-FI-1.jpg',
    description: 'Citrusy sponge with orange frosting.'
  },
  {
    id: 22,
    name: 'Peanut Butter Cake',
    price: 679.00,
    image: 'https://foodbythegram.com/wp-content/uploads/2020/07/IMG_0403-2-scaled.jpg',
    description: 'Peanut butter cake with chocolate glaze.'
  },
  {
    id: 23,
    name: 'Marble Cake',
    price: 609.00,
    image: 'https://sugargeekshow.com/wp-content/uploads/2020/02/marble-cake-recipe-featured.jpg',
    description: 'Vanilla and chocolate swirled sponge.'
  },
  {
    id: 24,
    name: 'Banana Cake',
    price: 569.00,
    image: 'https://www.modernhoney.com/wp-content/uploads/2017/10/Jeffs-BEST-Banana-Cake-Recipe-8.jpg',
    description: 'Moist banana sponge with light frosting.'
  },
  {
    id: 25,
    name: 'Cinnamon Roll Cake',
    price: 599.00,
    image: 'https://livforcake.com/wp-content/uploads/2019/09/cinnamon-roll-cake-thumb1.jpg',
    description: 'Cinnamon swirl with glaze topping.'
  },
  {
    id: 26,
    name: 'Choco-Cherry Cake',
    price: 689.00,
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Cherry-Chocolate-Cake_EXPS_TOHcom2323_22231_P2_MD_03_21_9b.jpg',
    description: 'Chocolate cherry delight with whipped cream.'
  },
  {
    id: 27,
    name: 'Mint Chocolate Cake',
    price: 659.00,
    image: 'https://i.pinimg.com/originals/5d/4b/1e/5d4b1ec9e4d0e84147c182b4dfd43634.jpg',
    description: 'Minty freshness in rich chocolate sponge.'
  },
  {
    id: 28,
    name: 'Hazelnut Cake',
    price: 729.00,
    image: 'https://cdn.momsdish.com/wp-content/uploads/2018/09/1427003299_14-scaled.jpg',
    description: 'Toasted hazelnut sponge with cream filling.'
  },
  {
    id: 29,
    name: 'Funfetti Cake',
    price: 539.00,
    image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/funfetti_cake_49993_16x9.jpg',
    description: 'Colorful sprinkles in vanilla cake.'
  },
  {
    id: 30,
    name: 'Date Walnut Cake',
    price: 599.00,
    image: 'https://i.pinimg.com/originals/b2/9b/9b/b29b9b79d9530abf5eadaaa3762e20d2.jpg',
    description: 'Sweet dates and crunchy walnuts.'
  },
  {
    id: 31,
    name: 'Spice Cake',
    price: 579.00,
    image: 'https://th.bing.com/th/id/OIP.1t6EhSKXy4Cjd9wtraI34wHaHa?rs=1&pid=ImgDetMain',
    description: 'Warm spiced cake with old-fashioned flavor.'
  },
  {
    id: 32,
    name: 'Cranberry Orange Cake',
    price: 639.00,
    image: 'https://livforcake.com/wp-content/uploads/2018/01/cranberry-orange-cake-8.jpg',
    description: 'Tart cranberries and citrus notes.'
  },
  {
    id: 33,
    name: 'Raspberry Almond Cake',
    price: 749.00,
    image: 'https://th.bing.com/th/id/OIP.w8U8_ZVa8c1nPgF9fZcMhgHaIe?w=1200&h=1373&rs=1&pid=ImgDetMain',
    description: 'Nutty almond and sweet raspberry jam.'
  },
  {
    id: 34,
    name: 'Brownie Cake',
    price: 629.00,
    image: 'https://th.bing.com/th/id/OIP.ZOvQ_FUDPvIdTLfCve224QHaHa?rs=1&pid=ImgDetMain',
    description: 'Fudgy brownie in cake form.'
  },
  {
    id: 35,
    name: 'Zebra Cake',
    price: 599.00,
    image: 'https://cdn.momsdish.com/wp-content/uploads/2018/09/1421998058_3.jpg',
    description: 'Chocolate-vanilla striped cake.'
  },
  {
    id: 36,
    name: 'Ricotta Pound Cake',
    price: 549.00,
    image: 'https://th.bing.com/th/id/OIP.Y_cfCwUO0NGQY2QLI4lJ0QHaF6?rs=1&pid=ImgDetMain',
    description: 'Creamy pound cake with ricotta.'
  },
  {
    id: 37,
    name: 'Churro Cake',
    price: 639.00,
    image: 'https://img.taste.com.au/8_mcACZ9/w643-h428-cfill-q90/taste/2021/07/caramel-churro-cake-172759-1.jpg',
    description: 'Cinnamon sugar inspired churro cake.'
  },
  {
    id: 38,
    name: 'Peach Cobbler Cake',
    price: 659.00,
    image: 'https://i.pinimg.com/originals/f1/66/cb/f166cb50d3dd5b87c3cdfe83360a686e.jpg',
    description: 'Peachy layers with streusel topping.'
  },
  {
    id: 39,
    name: 'Matcha Green Tea Cake',
    price: 679.00,
    image: 'https://coupleeatsfood.com/wp-content/uploads/2017/05/Green-Tea-Cake-White-Chocolate-Buttercream.jpg',
    description: 'Earthy matcha sponge with white cream.'
  },
  {
    id: 40,
    name: 'S’mores Cake',
    price: 799.00,
    image: 'https://i1.wp.com/www.janespatisserie.com/wp-content/uploads/2016/10/IMG_3824.jpg',
    description: 'Marshmallow, chocolate, and graham combo.'
  },
  {
    id: 41,
    name: 'Turtle Cake',
    price: 859.00,
    image: 'https://i.pinimg.com/originals/83/9f/2d/839f2d2a2e6100eaac9a170bdbe42f8d.jpg',
    description: 'Caramel, pecans, and chocolate layers.'
  },
  {
    id: 42,
    name: 'Lime Coconut Cake',
    price: 679.00,
    image: 'https://tatyanaseverydayfood.com/wp-content/uploads/2014/06/Coconut-Lime-Cake.jpg',
    description: 'Tropical lime and coconut flavors.'
  },
  {
    id: 43,
    name: 'Irish Cream Cake',
    price: 829.00,
    image: 'https://i0.wp.com/xokatierosario.com/wp-content/uploads/2021/03/Irish_Cream_Cake_xokatierosario.com_Image9.jpg?resize=1607%2C1205&ssl=1',
    description: 'Soft cake infused with Irish cream.'
  },
  {
    id: 44,
    name: 'Fig Walnut Cake',
    price: 729.00,
    image: 'https://www.italianspoon.com.au/wp-content/uploads/2021/07/906-1024x683.jpg',
    description: 'Figs and walnuts in a rustic cake.'
  },
  {
    id: 45,
    name: 'Maple Walnut Cake',
    price: 699.00,
    image: 'https://irepo.primecp.com/2016/05/281735/Maple-Walnut-Cake-_ExtraLarge800_ID-1667416.jpg?v=1667416',
    description: 'Maple syrup and toasted walnuts.'
  },
  {
    id: 46,
    name: 'Espresso Chocolate Cake',
    price: 789.00,
    image: 'https://iambaker.net/wp-content/uploads/2017/01/xespressocake4-650x532.jpg',
    description: 'Dark chocolate sponge with espresso glaze.'
  },
  {
    id: 47,
    name: 'Cranberry Spice Cake',
    price: 619.00,
    image: 'https://thisdelicioushouse.com/wp-content/uploads/2022/08/Cranberry-Orange-Cake-13-1024x683.jpg',
    description: 'Warm spiced cake with tart cranberries.'
  },
  {
    id: 48,
    name: 'Cherry Almond Cake',
    price: 699.00,
    image: 'https://assets-eu-01.kc-usercontent.com/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/252dc5fe-c137-4fa7-beba-9316188f8802/1-Cherry-and-Almond-Cake-WEB.jpg',
    description: 'Sweet cherries and nutty almonds.'
  },
  {
    id: 49,
    name: 'Plum Cake',
    price: 609.00,
    image: 'https://recipes.timesofindia.com/photo/55937814.cms',
    description: 'Classic holiday plum cake.'
  },
  {
    id: 50,
    name: 'Honey Cake',
    price: 569.00,
    image: 'https://sugarpursuit.com/wp-content/uploads/2022/05/Honey-cake-thumbnail-768x768.jpg',
    description: 'Moist honey cake perfect with tea.'
  }
];

export default products;
