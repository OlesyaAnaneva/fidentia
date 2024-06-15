const express = require('express');
const path = require('path');
const app = express();
const adminRoutes = require('./routes/adminRoutes');

app.use(express.json());

app.use('/admin', adminRoutes);

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}`);
});
