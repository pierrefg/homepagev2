"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Loader from '@/components/Loader';

export default function Art() {
    const router = useRouter();

    useEffect(() => {
        router.push('/art/graphics');
    }, []);

    return <Loader />;
}