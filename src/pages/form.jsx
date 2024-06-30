import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, [e.target.lastname]: e.target.value, [e.target.email]: e.target.email });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/xgvweerr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Thank you for your message!');
      setFormData({ firstname: '', lastname:'', email: '', message: '' });
    } else {
      setStatus('Oops! There was an error.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='grid gap-5 p-10'>
        <div className='grid grid-cols-2'>
        <label>

        <input
          type="text"
          name="firstname"
          value={formData.firstname || ''}
          onChange={handleChange}
          placeholder='First Name'
          className='p-2'
          required
          
        />
        </label>

        <label>
       
       <input
         type="text"
         name="lastname"
         value={formData.lastname || ''}
         onChange={handleChange}
         placeholder='Last Name'
         className='p-2'
         required
       />
     </label>

        </div>

        <div>
            <label>
                <input type="text" name='email' value={formData.email || ''} onChange={handleChange} placeholder='Your email address' className='p-2' />
            </label>
        </div>
        <div>
        <label>
        
        <textarea
          name="message"
          value={formData.message || ''}
          onChange={handleChange}
          placeholder='Message'
          rows="4" cols="50"
          className='p-2'
          required
        />
      </label>

        </div>

        <div>
        <button type="submit" className='bg-buttonColor p-4 rounded-md w-20'>Send</button>
        </div>
      


      {status && <div className='bg-neutral-400 p-5'>
        <h2 className='font-bold'>{status}</h2>
        </div>}
    </form>
  );
};

export default ContactForm;
