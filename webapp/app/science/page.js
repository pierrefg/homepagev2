"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Loader from '@/components/loader/Loader';

export default function Science() {
    const router = useRouter();

    useEffect(() => {
        router.push('/science/data-science');
    }, []);

    return <Loader />;
}