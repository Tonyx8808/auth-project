import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
    navigate('/login');
  };

  return (
    <div className="relative z-10 p-6 max-w-md mx-auto bg-black bg-opacity-60 rounded-xl border border-cyan-400 mt-20">
      <h2 className="text-2xl font-bold text-cyan-300 mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="firstName" placeholder="First Name" onChange={handleChange} required className="input" />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required className="input" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="input" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="input" />
        <button type="submit" className="btn-cyber">Sign Up</button>
      </form>
    </div>
  );
}
