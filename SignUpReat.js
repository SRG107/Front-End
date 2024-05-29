import React, { useState } from 'react';

function SignUp() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    newsletter: false,
  });

  const handleChange = (e) => {
    if (e.target.name === 'newsletter') {
      setFormState({...formState, newsletter: e.target.checked });
    } else {
      setFormState({...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.password!== formState.confirmPassword) {
      console.log('Passwords do not match');
    } else {
      console.log('Successfully signed up');
      if (formState.newsletter) {
        console.log('Thanks for signing up for our newsletter');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formState.confirmPassword}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="newsletter"
          checked={formState.newsletter}
          onChange={handleChange}
        />
        Sign up for our newsletter
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;