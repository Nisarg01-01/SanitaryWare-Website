import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Pages/CSS/Feedback.css";

function Feedback() {

	const user = JSON.parse(localStorage.getItem("user"));
	const [info, setInfo] = useState({
		name: '',
		email: '',
		message: '',
		phone: '',
		uploadedFiles: [],
		buttonText: 'Submit',
		uploadPhotosButtonText: 'Upload files',
	});
	const { name, email, message, phone, uploadedFiles, buttonText, uploadPhotosButtonText } = info;
	const { REACT_APP_CLOUD_NAME, REACT_APP_UPLOAD_SECRET } = process.env;

	const handleSubmit = e => {
		e.preventDefault();

		setInfo({ ...info, buttonText: '...sending' });

		axios({
			method: 'POST',
			url: 'http://localhost:8080/api/feedback',
			data: { name, email, message, phone },
		})
			.then(res => {
				if (res.data.success)
					toast('🦄 Thanks for your feedback!', {
						position: 'top-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				setInfo({
					...info,
					name: '',
					phone: '',
					email: '',
					message: '',
					buttonText: 'Submited',
					uploadPhotosButtonText: 'Uploaded',
				});
			})
			.catch(err => {
				if (err.response.data.error) toast.error('Failed, try again!');
			});
	};

	const handleChange = name => e => {
		setInfo({ ...info, [name]: e.target.value });
	};

	const uploadWidget = () => {
		window.cloudinary.openUploadWidget(
			{
				cloud_name: REACT_APP_CLOUD_NAME,
				upload_preset: REACT_APP_UPLOAD_SECRET,
				tags: ['images'],
			},
			function (error, result) {
				if (error) console.log(error);
				setInfo({ ...info, uploadPhotosButtonText: 'Uploaded' });
			}
		);
	};

	return (
		<div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mnqrlldq" method="POST" className="contact-inputs">
            <input
              type="text"
              name="username"
			  value={user.name}
              placeholder="Your Name"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
			  value={user.Email}
              required
              autoComplete="off"
            />
            <textarea
              name="feedback"
              id=""
              cols="30"
              rows="10"
              placeholder="Feedback"
              required
              autoComplete="off"
            ></textarea>
            <button type="submit" className="feedbacksubmit">
              Send
            </button>
          </form>
        </div>
      </div>
	);
}

export default Feedback;