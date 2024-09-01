'use client';

import React, { useState } from 'react';

import { AiOutlineEye, AiOutlineEyeInvisible  } from "react-icons/ai";

export default function ShowMore({ children, textShow="Voir plus", textHide="Voir moins" }) {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    }

    return (
        <>
            <button
                className={`btn btn-secondary ${show ? 'active' : ''}`}
                onClick={ toggle }
            >
                {
                    show ?
                    <><AiOutlineEyeInvisible className='inline'/> {textHide}</>:
                    <><AiOutlineEye className='inline'/> {textShow}</>
                    
                }
            </button>
            <div>
                {show && children}
            </div>
        </>
    );
}