import './globals.css';
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: 'My portfolio site',
  description: 'Welcome to my portfolio site! Explore my projects and learn more about me.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}