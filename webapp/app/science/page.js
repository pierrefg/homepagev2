"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Loader from '@/components/Loader';

export default function Science() {
    const router = useRouter();

    useEffect(() => {
        router.push('/science/research');
    }, []);

    return <Loader />;
}