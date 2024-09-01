"use client";

import './style.css';

import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import LoaderElement from '@/components/loader/LoaderElement';

import { FaRegFaceSadCry } from "react-icons/fa6";
import { BiHappyBeaming } from "react-icons/bi";

import TextInput from '@/components/form/TextInput';

export default function Contact() {
    const [mailState, setMailState] = useState(null);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true); // Set hydrated to true after the initial render
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        setMailState('loading');
        emailjs.send(
            'service_cdqzmu1',
            'pierrefg-contact',
            Object.fromEntries(formData.entries()), // Convert FormData to plain object
            '1kQQT6t2xy65Q3xp4'
        )
            .then((response) => {
                setMailState('success');
            })
            .catch((err) => {
                setMailState('error');
            });
    };

    if (!hydrated) {
        // Render a loading state or nothing until hydration is complete
        return null;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl w-full flex flex-col gap-6 mx-auto"
        >
            <TextInput label='Name' name='from_name' disabled={!!mailState} />
            <TextInput type='email' name='from_email' label='Email' disabled={!!mailState} />
            <TextInput type='textarea' name='message' label='Message' rows="5" disabled={!!mailState} />
            <div className="flex items-center justify-between">
                {
                    mailState === 'loading' ? (
                        <LoaderElement size={40} />
                    ) : mailState === 'success' ? (
                        <span className='text-green-500'>
                            <BiHappyBeaming className='inline' /> 
                            <> C'est parfait, je vous réponds au plus vite !</>
                        </span>
                    ) : mailState === 'error' ? (
                        <span className='text-red-600'>
                            <FaRegFaceSadCry className='inline' /> 
                            <> Il y a eu un problème avec l'envoi, essayez directement sur mon adresse pierrefg@proton.me !</>
                        </span>
                    ) : (
                        <button
                            type="submit"
                            className="btn-secondary"
                        >
                            Envoyer
                        </button>
                    )
                }
            </div>
        </form>
    );
}
