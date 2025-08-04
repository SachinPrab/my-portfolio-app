import './globals.css';

export const metadata = {
  title: 'My portfolio site',
  description: 'Welcome to my portfolio site! Explore my projects and learn more about me.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}