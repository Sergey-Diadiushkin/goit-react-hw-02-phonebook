import React from 'react';
import './Section.css'

const Section = ({ title, children }) => (
    <section className='container-1' >
        <h1 className='title'>{title}</h1>
        {children}
    </section>
)

export default Section;