import React, { useState } from 'react';
//material ui
import CancelIcon from '@material-ui/icons/Cancel';
import Avatar from '@material-ui/core/Avatar';
//hooks
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//files import
import { signup } from '../../redux/actions/Authentication';
import { useStyles } from './Styles';
import defaultImg from '../../assets/defaultpic.png';
const Signup = () => {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	const [ errorMessage, setErrorMessage ] = useState(false);
	const [ imgToSend, setImgToSend ] = useState();
	const [ previewImg, setPreviewImg ] = useState({
		img: null,
		preview: false
	});
	const onSubmit = async (data) => {
		const imageSend = data.picture[0];

		setErrorMessage(false);
		const response = await dispatch(
			signup({ email: data.Email, password: data.password, displayName: data.username, imgsend: imageSend })
		);

		switch (response) {
			case 'auth/email-already-in-use':
				console.log('error tried');
				setErrorMessage(true);

				break;
			case 'signIn':
				alert('account created successfully');
				reset();
				setPreviewImg({ ...previewImg, img: null, preview: false });
				break;
			case 'auth/network-request-failed':
				alert('check your internet connection');
				break;
			default:
				return console.log('no matchs');
		}
	};
	const imgUpload = (evt) => {
		if (evt.target.files.length !== 0) {
			setPreviewImg({ ...previewImg, img: URL.createObjectURL(evt.target.files[0]), preview: true });
		}
	};
	return (
		<div className={classes.root}>
			<br />
			<h5>SIGN UP</h5>
			<div className={classes.formParent}>
				<div className={classes.inputSignup}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label className="me-2">Username </label>
						<br />
						<input
							type="text"
							{...register('username', {
								required: true,
								minLength: 5
							})}
						/>
						<br />
						{errors.username && (
							<span className={classes.errorMsg}>username length must be greater than 5</span>
						)}
						<br />
						<br />
						<label className={classes.labels}>Email </label>
						<br />
						<input
							type="text"
							{...register('Email', {
								required: true,
								pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
							})}
						/>
						<br />

						{errors.Email && <span className={classes.errorMsg}>Enter valid Email</span>}
						<br />
						<br />

						<label className={classes.labels}>Password </label>
						<br />
						<input
							type="Password"
							{...register('password', { required: true, minLength: 6, maxLength: 25 })}
						/>
						<br />
						{errors.password && (
							<span className={classes.errorMsg}>Passowrd length must greater than 6</span>
						)}
						<br />
						<input
							{...register('picture')}
							type="file"
							className={classes.imageUploadInput}
							placeholder="Upload your image"
							onChange={imgUpload}
							accept="image/png, image/gif, image/jpeg"
						/>
						<label htmlFor="files">Select file</label>
						<div className="mt-4">
							{previewImg.preview ? (
								<div>
									<img src={previewImg.img} alt="preview" className={classes.imgPreview} />
									<CancelIcon
										onClick={() => setPreviewImg({ ...previewImg, img: null, preview: false })}
									/>
								</div>
							) : null}
						</div>
						<button type="file">Submit</button>
						<br />
						{errorMessage ? <span style={{ color: 'red' }}>Email already in use</span> : null}
					</form>
					<p href="/" className={classes.ahref} onClick={() => history.push('/')}>
						Already have Account ? Sign-in
					</p>
				</div>
			</div>
		</div>
	);
};
export default Signup;

//  <label className="me-2">Username </label>
// <br />
// <input
// 	type="text"
// 	{...register('username', {
// 		required: true,
// 		minLength: 5
// 	})}
// />
// <br />
// {errors.username && (
// 	<span className={classes.errorMsg}>username length must be greater than 5</span>
// )}
// <br />
