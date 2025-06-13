import './global.css';
import { ReactNode } from 'react';

export const metadata = {
  title: "Serabutin",
  icons: {
    icon: '/logo.png'
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
