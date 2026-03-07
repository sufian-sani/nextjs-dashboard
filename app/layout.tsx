import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Header from "@/app/ui/Header"; 
import ReduxProvider from "@/app/redux-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
