import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/admin/posts' element={<AdminPanel type='posts' />} />
				<Route path='/admin/videos' element={<AdminPanel type='videos' />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
