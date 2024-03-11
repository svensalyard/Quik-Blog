const sequelize = require('../config/connection');
const { User, post } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

const allUsers = await User.bulkCreate(userSeed);

for (const posts of postSeed) {await post.create({...allPosts})}

  process.exit(0);
};

seedDatabase();
