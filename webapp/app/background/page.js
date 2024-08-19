"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Loader from '@/components/Loader';

export default function Background() {
    const router = useRouter();

    useEffect(() => {
        router.push('/background/work');
    }, []);

    return <Loader />;
}