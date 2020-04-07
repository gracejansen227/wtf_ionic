import { Sequelize } from 'sequelize-typescript';
import { dbconfig } from '../api/config'; // DB connection parameters
import { Activity } from '../api/models/activity.model'

export const sequelize = new Sequelize({
 database: "wtf_app",
 dialect: "postgres",
 username: "postgres",
//  password: "postgres"
 host: "localhost",
 port: 5432
});

sequelize.authenticate().then(() => {
 console.log("Connected to DataBasee ayyy liomnamaa");
})
.catch((err) => {
 console.log(err);
});

// Force Initialization of the models and wipe all data ///
function initializeDatabase() {
 sequelize
 .sync({ force: true })
 .then(() => {
 console.log('Connection synced')
 return;
 })
 .catch(err => {
 console.log('err');
 });
}

function populateData(){
    const activities = new Activity({ name: 'doing hood rat shit with my friends', imageUrl: 'http;//www.goolsdkfjs.com', participantNum: 2 });
    activities.save()
        .then(() => {
            console.log("Activity entry added");
        })
        .catch((err) => {
            console.log(err);
        })

}
