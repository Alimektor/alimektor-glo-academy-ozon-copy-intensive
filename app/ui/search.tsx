'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const [search, updateSearch] = useState("");

    const updateFilter = (search: string) => {
        const params = new URLSearchParams(searchParams);
        if (search) {
            params.set('search', search);
        } else {
            params.delete('search');
        }
        router.replace(`${pathName}/?${params.toString()}`);
    }

    useEffect(() => {
        const search = searchParams.get('search');
        if (search) {
            updateSearch(search);
        }
    }, []);

    return (
        <div className='search'>
            <div className='search-wrapper'>
                <input
                    className='search-wrapper_input'
                    type='text'
                    value={search}
                    onChange={(event) => updateSearch(event.target.value)}
                    onKeyDown={(event) => (event.key == "Enter" ? updateFilter(search) : null)}
                />
            </div>
            <div className='search-btn'>
                <button onClick={() => updateFilter(search)}></button>
            </div>
        </div>
    );
}
