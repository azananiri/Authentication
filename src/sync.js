/* Sync models with database */

const sequelize = require('./db');
require('./models/userModels');

sequelize.sync({force: true})
.then(() => {
    console.log('Database synchronized successfully.');
})
.catch((error) => {
    console.error('Unable to synchronize the models:', error.message);
});