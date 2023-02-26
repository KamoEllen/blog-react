import React, { useState } from 'react';
import Axios from 'axios';
import config from '../config';

const SignUp = () => {
const [formData, setFormData] = useState({
name: '',
email: '',
password: '',
password_confirmation: '',
});

const [errors, setErrors] = useState({});

const handleInputChange = ({ target }) => {
setFormData({
...formData,
[target.name]: target.value,
});
};

const handleSubmit = (event) => {
event.preventDefault();
const { name, email, password } = formData;
const data = { name, email, password, password_confirmation: formData.password_confirmation };
const rules = {
name: 'required|string',
email: 'required|email',
password: 'required|string|min:6|confirmed',
};
const messages = {
required: 'The {{ field }} is required.',
'password.confirmed': 'The password confirmation does not match.',
};
validateAll(data, rules, messages)
.then(() => {
Axios.post(${config.apiUrl}/auth/register, data)
.then(response => console.log(response))
.catch(({ errors }) => setErrors(formatErrors(errors)));
})
.catch(({ errors }) => setErrors(formatErrors(errors)));
};

const formatErrors = (errors) => {
return errors.reduce((acc, { field, message }) => {
acc[field] = message;
return acc;
}, {});
};

return (
<div className="mh-fullscreen bg-img center-vh p-20" style={{ backgroundImage: 'url(https://example.com/background-image.jpg)' }}>
<div className="card card-shadowed p-50 w-400 mb-0" style={{ maxWidth: '100%' }}>
<h5 className="text-uppercase text-center">Register</h5>
<br />
<br />
<form className="form-type-material" onSubmit={handleSubmit}>
<div className="form-group">
<input type="text" className="form-control" name="name" placeholder="Username" onChange={handleInputChange} />
{errors['name'] && <small className="text-danger">{errors['name']}</small>}
</div>
<div className="form-group">
<input type="text" className="form-control" name="email" placeholder="Email address" onChange={handleInputChange} />
{errors['email'] && <small className="text-danger">{errors['email']}</small>}
</div>
<div className="form-group">
<input type="password" className="form-control" name="password" placeholder="Password" onChange={handleInputChange} />
{errors['password'] && <small className="text-danger">{errors['password']}</small>}
</div>
<div className="form-group">
<input type="password" className="form-control" name="password_confirmation" placeholder="Password (confirm)" onChange={handleInputChange} />
</div>
<br />
<button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
</form>
<hr className="w-30" />
<p className="text-center text-muted fs-13 mt">Some additional text here.</p>
</div>
</div>
);
};

export default SignUp;



