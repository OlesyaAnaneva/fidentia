import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const AdminPanel = ({ type }) => {
	const [items, setItems] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState(null);
	const [videoLink, setVideoLink] = useState('');
	const [timestamp, setTimestamp] = useState('');
	const [selectedItemId, setSelectedItemId] = useState(null);
	const [editing, setEditing] = useState(false);
	const [editTitle, setEditTitle] = useState('');
	const [editDescription, setEditDescription] = useState('');
	const [editTimestamp, setEditTimestamp] = useState('');
	const [editVideoLink, setEditVideoLink] = useState('');

	useEffect(() => {
		fetchData();
	}, [type]);

	const fetchData = async () => {
		try {
			const response = await axios.get(`/admin/${type}`);
			setItems(response.data);
		} catch (error) {
			console.error('Ошибка при получении данных:', error);
		}
	};

	const addItem = async () => {
		try {
			let data = { title, description, timestamp };

			if (type === 'posts') {
				const formData = new FormData();
				formData.append('image', image);
				const imageResponse = await axios.post('/admin/upload-image', formData);
				data.imageLink = `/assets/${imageResponse.data}`;
			} else if (type === 'videos') {
				data.videoLink = videoLink;
			}

			await axios.post(`/admin/add-${type}`, data);
			alert(`${type === 'posts' ? 'Пост' : 'Видео'} успешно добавлен`);
			resetState();
			fetchData();
		} catch (error) {
			console.error('Ошибка при добавлении элемента:', error);
			alert(
				`Произошла ошибка при добавлении ${
					type === 'posts' ? 'поста' : 'видео'
				}`
			);
		}
	};

	const updateItem = async () => {
		try {
			let data = {
				id: selectedItemId,
				title:
					editTitle === ''
						? items.find((item) => item.id === selectedItemId).title
						: editTitle,
				description:
					editDescription === ''
						? items.find((item) => item.id === selectedItemId).description
						: editDescription,
				timestamp:
					editTimestamp === ''
						? items.find((item) => item.id === selectedItemId).timestamp
						: editTimestamp,
			};

			if (type === 'posts') {
				const formData = new FormData();
				if (image) {
					formData.append('image', image);
					const imageResponse = await axios.post(
						'/admin/upload-image',
						formData
					);
					data.imageLink = `/assets/${imageResponse.data}`;
				} else {
					const selectedItem = items.find((item) => item.id === selectedItemId);
					data.imageLink = selectedItem.imageLink;
				}
			} else if (type === 'videos') {
				const selectedItem = items.find(
					(item) => item.id === selectedItemId
				).videoLink;
				data.videoLink = selectedItem || editVideoLink;
			}

			await axios.post(`/admin/edit-${type}`, data);
			alert(`${type === 'posts' ? 'Пост' : 'Видео'} успешно изменено`);
			resetState();
			fetchData();
		} catch (error) {
			console.error('Ошибка при изменении элемента:', error);
			alert(
				`Произошла ошибка при изменении ${type === 'posts' ? 'поста' : 'видео'}`
			);
		}
	};

	const deleteItem = async (id, imageLink) => {
		try {
			await axios.delete(`/admin/delete-${type}/${id}`, {
				data: { imageLink },
			});
			alert(`${type === 'posts' ? 'Пост' : 'Видео'} успешно удалено`);
			fetchData();
		} catch (error) {
			console.error('Ошибка при удалении элемента:', error);
			alert(
				`Произошла ошибка при удалении ${type === 'posts' ? 'поста' : 'видео'}`
			);
		}
	};

	const selectItem = (itemId) => {
		const selectedItem = items.find((item) => item.id === itemId);
		setEditTitle(selectedItem.title);
		setEditDescription(selectedItem.description);
		setSelectedItemId(itemId);
		setEditing(true);
	};

	const resetState = () => {
		setTitle('');
		setDescription('');
		setImage(null);
		setVideoLink('');
		setSelectedItemId(null);
		setEditTitle('');
		setEditDescription('');
		setEditing(false);
	};

	const handleAddItemClick = () => {
		addItem();
	};

	const handleDeleteItemClick = (id, imageLink) => {
		deleteItem(id, imageLink);
	};

	return (
		<div className='admin-container'>
			<h2 className='admin-container-title'>
				{type === 'posts' ? 'Посты' : 'Видео'}
			</h2>
			<ul className='admin-content-ul'>
				{items.map((item) => (
					<li className='admin-content-li' key={item.id}>
						{type === 'posts' && (
							<div className='admin-content-title'>
								<p className='admin-content-p1'>Заголовок:</p>
								<p className='admin-content-p'>{item.title}</p>
							</div>
						)}
						<div className='admin-content-description'>
							<p className='admin-content-p1'>Описание:</p>
							<p className='admin-content-p'>{item.description}</p>
						</div>
						<div className='admin-content-link'>
							<p className='admin-content-p1'>
								Ссылка на {type === 'posts' ? 'пост' : 'видео'}
							</p>
							<p className='admin-content-p'>
								{type === 'posts' ? (
									`${item.imageLink}`
								) : (
									<a href={item.videoLink}>{item.videoLink}</a>
								)}
							</p>
						</div>
						<div className='admin-content-timestamp'>
							<p className='admin-content-p1'>
								Дата публикации {type === 'posts' ? 'поста' : 'видео'}
							</p>
							<p className='admin-content-p'>{item.timestamp}</p>
						</div>
						<button
							className='admin-content-edit-button'
							onClick={() => selectItem(item.id)}>
							Изменить {type === 'posts' ? 'пост' : 'видео'}
						</button>
						<button
							className='admin-content-delete-button'
							onClick={() => handleDeleteItemClick(item.id, item.imageLink)}>
							Удалить {type === 'posts' ? 'пост' : 'видео'}
						</button>
						{editing && selectedItemId === item.id && (
							<div className='admin-content-edit-container'>
								<h3 className='admin-content-edit-container-title'>
									Изменить {type === 'posts' ? 'пост' : 'видео'}
								</h3>
								{type === 'posts' && (
									<input
										type='text'
										value={editTitle === '' ? item.title : editTitle}
										onChange={(e) => setEditTitle(e.target.value)}
										placeholder='Заголовок'
										className='admin-content-edit-container-input'
									/>
								)}
								<textarea
									value={
										editDescription === '' ? item.description : editDescription
									}
									onChange={(e) => setEditDescription(e.target.value)}
									placeholder='Описание'
									className='admin-content-edit-container-textarea'></textarea>
								{type === 'posts' && (
									<input
										type='file'
										onChange={(e) => setImage(e.target.files[0])}
										accept='image/*'
										className='admin-content-edit-container-input2'
									/>
								)}
								{type === 'videos' && (
									<input
										type='text'
										value={videoLink === '' ? item.videoLink : videoLink}
										onChange={(e) => setVideoLink(e.target.value)}
										placeholder='Ссылка на видео'
										className='admin-content-add-container-input2'
									/>
								)}
								<input
									type='date'
									value={editTimestamp === '' ? item.timestamp : editTimestamp}
									onChange={(e) => setEditTimestamp(e.target.value)}
									placeholder='Дата публикации'
									className='admin-content-edit-container-input'
								/>
								<button
									className='admin-content-edit-container-button-save'
									onClick={() => updateItem(item.id)}>
									Сохранить
								</button>
								<button
									className='admin-content-edit-container-return-button'
									onClick={resetState}>
									Отмена
								</button>
							</div>
						)}
					</li>
				))}
			</ul>
			<h3>Добавить {type === 'posts' ? 'пост' : 'видео'}</h3>
			{type === 'posts' && (
				<input
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder='Заголовок'
					className='admin-content-add-container-title'
				/>
			)}
			<textarea
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder='Описание'
				className='admin-content-add-container-textarea'></textarea>
			{type === 'posts' && (
				<input
					type='file'
					onChange={(e) => setImage(e.target.files[0])}
					accept='image/*'
					className='admin-content-add-container-input'
				/>
			)}
			{type === 'videos' && (
				<input
					type='text'
					value={videoLink}
					onChange={(e) => setVideoLink(e.target.value)}
					placeholder='Ссылка на видео'
					className='admin-content-add-container-input2'
				/>
			)}
			<input
				type='date'
				value={timestamp}
				onChange={(e) => setTimestamp(e.target.value)}
				placeholder='Дата публикации'
				className='admin-content-edit-container-input'
			/>
			<button
				onClick={handleAddItemClick}
				className='admin-content-add-container-add-button'>
				Добавить {type === 'posts' ? 'пост' : 'видео'}
			</button>
		</div>
	);
};

export default AdminPanel;
