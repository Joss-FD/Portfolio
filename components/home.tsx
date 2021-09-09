
import React from 'react';

export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <div className="ml-4 flex flex-col">
            {children}
        </div>
    )
}
