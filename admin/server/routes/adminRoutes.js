const express = require('express');
const fs = require('fs').promises;
const router = express.Router();
const multer = require('multer');
const path = require('path');
const postsFilePath = './data/posts.json';
const videosFilePath = './data/videos.json';

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './data/assets');
	},
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + '-' + Date.now() + path.extname(file.originalname)
		);
	},
});

const upload = multer({ storage: storage });

router.post('/upload-image', upload.single('image'), async (req, res) => {
	try {
		res.send(req.file?.filename);
	} catch (error) {
		console.error('Ошибка при загрузке изображения:', error);
		res.status(500).send('Произошла ошибка при загрузке изображения');
	}
});

router.get('/posts', async (req, res) => {
	try {
		const posts = JSON.parse(await fs.readFile(postsFilePath));
		res.json(posts);
	} catch (error) {
		console.error('Ошибка при получении постов:', error);
		res.status(500).send('Произошла ошибка при получении постов');
	}
});

router.post('/add-posts', async (req, res) => {
	try {
		const { title, description, imageLink, timestamp } = req.body;
		const posts = JSON.parse(await fs.readFile(postsFilePath));
		const newPost = {
			id: posts.length + 1,
			title,
			description,
			imageLink,
			timestamp: timestamp || new Date().toISOString().slice(0, 10),
		};
		posts.unshift(newPost);
		await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2));
		res.send('Пост успешно добавлен');
	} catch (error) {
		console.error('Ошибка при добавлении поста:', error);
		res.status(500).send('Произошла ошибка при добавлении поста');
	}
});

router.post('/edit-posts', async (req, res) => {
	try {
		const { id, title, description, imageLink, timestamp } = req.body;
		const posts = JSON.parse(await fs.readFile(postsFilePath));
		const postToEdit = posts.find((post) => post.id === parseInt(id));

		if (!postToEdit) {
			res.status(404).send('Пост не найден');
			return;
		}

		const index = posts.findIndex((post) => post.id === parseInt(id));

		posts[index] = {
			...posts[index],
			title,
			description,
			imageLink,
			timestamp,
		};

		await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2));
		res.send('Пост успешно изменен');
	} catch (error) {
		console.error('Ошибка при изменении поста:', error);
		res.status(500).send('Произошла ошибка при изменении поста');
	}
});

router.delete('/delete-posts/:id', async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		let posts = JSON.parse(await fs.readFile(postsFilePath));
		const postToDelete = posts.find((post) => post.id === id);

		if (postToDelete && postToDelete.imageLink) {
			const imagePath = path.join(
				__dirname,
				'..',
				'data',
				postToDelete.imageLink
			);

			try {
				await fs.access(imagePath);
				await fs.unlink(imagePath);
				console.log('Файл успешно удален');
			} catch (err) {
				console.log('Ошибка при удалении файла:', err);
			}
		}
		posts = posts.filter((post) => post.id !== id);
		posts = posts.map((post, index) => ({ ...post, id: index + 1 }));
		await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2));
		res.send('Пост успешно удален');
	} catch (error) {
		console.error('Ошибка при удалении поста:', error);
		res.status(500).send('Произошла ошибка при удалении поста');
	}
});

router.get('/videos', async (req, res) => {
	try {
		const videos = JSON.parse(await fs.readFile(videosFilePath));
		res.json(videos);
	} catch (error) {
		console.error('Ошибка при получении видео:', error);
		res.status(500).send('Произошла ошибка при получении видео');
	}
});

router.post('/add-videos', async (req, res) => {
	try {
		const { videoLink } = req.body;
		const videos = JSON.parse(await fs.readFile(videosFilePath));
		const newVideo = {
			id: videos.length + 1,
			videoLink,
		};
		videos.push(newVideo);
		await fs.writeFile(videosFilePath, JSON.stringify(videos, null, 2));
		res.send('Видео успешно добавлено');
	} catch (error) {
		console.error('Ошибка при добавлении видео:', error);
		res.status(500).send('Произошла ошибка при добавлении видео');
	}
});

router.post('/edit-videos', async (req, res) => {
	try {
		const { id, videoLink } = req.body;
		const videos = JSON.parse(await fs.readFile(videosFilePath));
		const videoToEdit = videos.find((video) => video.id === parseInt(id));

		if (!videoToEdit) {
			res.status(404).send('Видео не найдено');
			return;
		}
		const index = videos.findIndex((video) => video.id === id);

		videos[index] = {
			...videos[index],
			videoLink,
		};
		await fs.writeFile(videosFilePath, JSON.stringify(videos, null, 2));
		res.send('Видео успешно изменено');
	} catch (error) {
		console.error('Ошибка при изменении видео:', error);
		res.status(500).send('Произошла ошибка при изменении видео');
	}
});

router.delete('/delete-videos/:id', async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		let videos = JSON.parse(await fs.readFile(videosFilePath));
		videos = videos.filter((video) => video.id !== id);
		videos = videos.map((video, index) => ({ ...video, id: index + 1 }));
		await fs.writeFile(videosFilePath, JSON.stringify(videos, null, 2));
		res.send('Видео успешно удалено');
	} catch (error) {
		console.error('Ошибка при удалении видео:', error);
		res.status(500).send('Произошла ошибка при удалении видео');
	}
});

module.exports = router;
