"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Loader from '@/components/loader/Loader';

export default function About() {
    const router = useRouter();

    useEffect(() => {
        router.push('/about/who-am-i');
    }, []);

    return <Loader />;
}