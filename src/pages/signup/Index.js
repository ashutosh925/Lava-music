import React, { useState,useLayoutEffect } from 'react';
//material ui
import CancelIcon from '@material-ui/icons/Cancel';
//hooks
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
//files import
import { signup } from '../../redux/actions/Authentication';
import { useStyles } from './Styles';

import AlertMsg from '../../components/Alertmsg';

const Signup = () => {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	const [ errorMessage, setErrorMessage ] = useState(false);
	const [ buttonState, setButtonState ] = useState(false);
	const [ alert, setAlert ] = useState({ success: false, error: false });
	const [imgUploadError,setImgUploadError] = useState(false);
	const isAuth = useSelector((state) => state.auth.isAuthenticated);


	useLayoutEffect(() => {
		if (isAuth) {
			history.push('/lavamusic');
		}
		// dispatch(youtube());
	});

	const [ previewImg, setPreviewImg ] = useState({
		img: null,
		preview: false
	});
	const onSubmit = async (data) => {
		console.log(data?.picture);
		setButtonState(true);
		setErrorMessage(false);
		const response = await dispatch(
			signup({ email: data.Email, password: data.password, displayName: data.username, imgsend:data?.picture[0]})
		);
			dispatch({type:"DEFAULT_PHOTO",payload:data?.picture[0]})
		switch (response) {
			case 'auth/email-already-in-use':
				console.log('error tried');
				setErrorMessage(true);
				setButtonState(false);
				break;
			case 'signIn':
				reset();
				setPreviewImg({ ...previewImg, img: null, preview: false });
				setAlert({ ...alert, success: true });
				setTimeout(() => {
					setAlert({ ...alert, success: false });
				}, 2000);
				setButtonState(false);

				break;
			case 'auth/network-request-failed':
				setAlert({ ...alert, error: true });
				setTimeout(() => {
					setAlert({ ...alert, error: false });
				}, 3000);
				setButtonState(false);

				break;
			default:
				return console.log('no matchs');
		}
		setButtonState(false);
	};

	const imgUpload = (evt) => {
		if (evt?.target?.files[0].type?.includes('video')) {
			console.log('yes it incules');
			setImgUploadError(true)
		} 
			if (evt?.target?.files?.length !== 0) {
				setPreviewImg({ ...previewImg, img: URL.createObjectURL(evt?.target?.files[0]), preview: true });
			}
		
	};
	const removeSelectedImg=()=>{
		reset({picture:undefined})
		setPreviewImg({ ...previewImg, img: null, preview: false })
	}
	return (
		<div className={classes.root}>
			<br />

			{alert.success ? <AlertMsg variant="success" msg="Account Created Successfully" /> : null}
			{alert.error ? <AlertMsg variant="error" msg="Check Your internet connection" /> : null}

			<div className={classes.formParent}>
				<h5>SIGN UP</h5>
				<div className={classes.inputSignup}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label className="me-2">Username </label>
						<br />
						<input
							type="text"
							{...register('username', {
								required: 'Enter username',
								minLength: {
									value: 3,
									message: 'Length must be greater than 3'
								}
							})}
						/>
						<br />
						{errors.username && <span className={classes.errorMsg}>{errors.username.message}</span>}
						<br />
						<br />
						<label className={classes.labels}>Email </label>
						<br />
						<input
							type="text"
							{...register('Email', {
								required: 'Email is Required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: 'Enter Valid Email'
								}
							})}
						/>
						<br />

						{errors.Email && <span className={classes.errorMsg}>{errors.Email.message}</span>}
						<br />
						<br />

						<label className={classes.labels}>Password </label>
						<br />
						<input
							type="Password"
							{...register('password', {
								required: 'Password Required',
								minLength: { value: 5, message: 'Password must be greater than 5' },
								maxLength: { value: 15, message: 'Password must be less than 15' }
							})}
							
						/>
						<br />
						{errors.password && <span className={classes.errorMsg}>{errors.password.message}</span>}
						<br />
						<p>Upload Image</p>
						<input
							{...register('picture')}
							type="file"
							className={classes.imageUploadInput}
							placeholder="Upload your image"
							onChange={imgUpload}
							accept="image/png, image/gif, image/jpeg"
							style={{ margin: '0px !important' }}
						/>
						<p >
							Select file
						</p>
						<div className="mt-4">
						{imgUploadError ? <span style={{color:"red"}}>Upload Images Only</span>:null}
							{previewImg.preview ? (
								<div>
									<img src={previewImg.img} alt="preview" className={classes.imgPreview} />
									<CancelIcon
										onClick={removeSelectedImg}
									/>
								</div>
							) : null}
						</div>
						<button
							disabled={buttonState}
							style={{ background: buttonState ? 'grey' : '#5a585899', width: '150px' }}
						>
							Submit
						</button>
						<br />
						{errorMessage ? <span style={{ color: 'red' }}>Email already in use</span> : null}
					</form>
					<p href="/" className={classes.ahref} onClick={() => history.push('/')}>
						Already have Account ? <span style={{ color: 'red' }}> Sign-in</span>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Signup;
