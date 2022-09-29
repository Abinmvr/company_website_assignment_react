import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

axios.interceptors.request.use((request:any)=>{
    const token:any =localStorage.getItem('token');
	request.headers.authorization=token;
	return request;
});
axios.interceptors.response.use((response:any)=>{
	return response;
});

ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
document.getElementById('root')
)