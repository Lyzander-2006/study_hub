const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: StudyHub api is active });
});

if (process.env.NODE_ENV != 'production') {
    const PORT = process.env.PORT || 3000;
    
    app.listen(PORT, () => console.log(`Running at port: ${PORT}`));
}

module.exports = app;