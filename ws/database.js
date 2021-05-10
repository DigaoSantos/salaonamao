const mongoose = require('mongoose');
const URI = '';

mongoose.set('useNewSrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
    .connect(URI)
    .then(() => console.log('DB ir up!'))
    .catch(() => console.log(err));