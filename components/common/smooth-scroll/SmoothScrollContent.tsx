import React from 'react';

interface SmoothScrollContentProps {
    children: React.ReactNode;
}

export default function SmoothScrollContent({ children }: SmoothScrollContentProps) {
    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
        </div>
    );
}
