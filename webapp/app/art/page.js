"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Loader from '@/components/loader/Loader';

export default function Art() {
    const router = useRouter();

    useEffect(() => {
        router.push('/art/graphics');
    }, []);

    return <Loader />;
}