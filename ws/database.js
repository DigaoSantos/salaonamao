const mongoose = require('mongoose');
const URI = 'mongodb+srv://salaoUser:7gQtXQKA5VrUW6z4@clusterdev.908ez.mongodb.net/salao-na-mao?retryWrites=true&w=majority';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
    .connect(URI)
    .then(() => console.log('DB is up!'))
    .catch(() => console.log(err)); 


    