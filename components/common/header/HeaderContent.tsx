import React from 'react';

interface HeaderContentProps {
    children: React.ReactNode;
    className?: string;
    overlayDark?: number;
    bgContent?: React.ReactNode;
}

export default function HeaderContent({ children, className, overlayDark, bgContent }: HeaderContentProps) {
    return (
        <div className={className} data-overlay-dark={overlayDark}>
            {bgContent}
            <div className="container relative z-7">
                {children}
            </div>
        </div>
    );
}
