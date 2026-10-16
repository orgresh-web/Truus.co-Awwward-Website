import './globals.css';

export const metadata = {
    title: 'Truus',
    description: 'Truus creative advertising agency website recreation featuring interactive motion cards, smooth Lenis scrolling, animated stickers, and video showreel.',
    openGraph: {
        title: 'Truus',
        description: 'Truus creative advertising agency website recreation featuring interactive motion cards, smooth Lenis scrolling, animated stickers, and video showreel.',
    },
    icons: {
        icon: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68381362603d6402ee03c00e_favicon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
