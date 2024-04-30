// Exersise 39
// Створити сторінку src/pages/contact.jsx Додати на сторінку форму контактів

// import React from "react";

// const Contact = () => {
//     return (
//         <div>
//             <h1 className='bg-red-300 px-4 py-2 mb-8 text-white text-3xl font-bold text-center uppercase'>Наша захоплююча історія</h1>
//             <div className='space-y-12'>
//                 <p className='text-2xl indent-8 font-bold leading-loose'>Густе, шовковисте та блискуче волосся це візитівка кожної жінки. Саме таким вихваляються дівчата з телеекранів та обкладинок журналів.</p>
//                 <p className='text-2xl indent-8 font-bold leading-loose'>Адже саме волосся здатне зачарувати та справити незабутнє враження. Виразні та привабливі вії створять дивовижний погляд та доповнять неймовірний образ.</p>
//                 <p className='text-2xl indent-8 font-bold leading-loose'>Мрієте про розкішне волосся? Хочете мати неперевершений погляд? Наші постійні клієнти легко досягають такого ефекту. Спробуйте і Ви.</p>
//             </div>
//         </div>
//     )
// }

// export default Contact;

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block">Ваше ім'я *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block">Ваше прізвище *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">Ваша електронна адреса *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block">Ваше повідомлення *</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button type="submit" className="bg-red-300 text-white px-4 py-2 rounded-md">Відправити повідомлення</button>
      </form>
      <p className="mt-4">Ми відповімо Вам найближчим часом.</p>
    </div>
  );
};

export default Contact;