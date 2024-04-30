// Exersise 39
// Створити сторінку src/pages/about.jsx Виконати сторінку як лендінг
import React from "react";

const AboutPage = () => {
    return (
        <div>
            <h1 className='bg-red-300 px-4 py-2 mb-8 text-white text-3xl font-bold text-center uppercase'>Наша захоплююча історія</h1>
            <div className='space-y-12'>
                <p className='text-2xl indent-8 font-bold leading-loose'>Густе, шовковисте та блискуче волосся це візитівка кожної жінки. Саме таким вихваляються дівчата з телеекранів та обкладинок журналів.</p>
                <p className='text-2xl indent-8 font-bold leading-loose'>Адже саме волосся здатне зачарувати та справити незабутнє враження. Виразні та привабливі вії створять дивовижний погляд та доповнять неймовірний образ.</p>
                <p className='text-2xl indent-8 font-bold leading-loose'>Мрієте про розкішне волосся? Хочете мати неперевершений погляд? Наші постійні клієнти легко досягають такого ефекту. Спробуйте і Ви.</p>
            </div>
        </div>
    )
}

export default AboutPage;


// import "./about.scss";

// export default function About() {
//     return (
//         <>
//             <h1 className="head">Hello SASS</h1>
//             <div className="wrapper">
//                 <header className="wrapper__btns">
//                     <button className="btn1">Blue Button</button>
//                     <button className="btn2">Red Button</button>
//                     <button className="btn3">Green Button</button>
//                 </header>
//             </div>
//         </>
//     )
// }