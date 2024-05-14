const express = require('express');
const app = express();
const adminRoutes = require('./routes/adminRoutes');

// Позволяет принимать JSON данные в POST запросах
app.use(express.json());

// Используем маршруты для администратора
app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}`);
});
