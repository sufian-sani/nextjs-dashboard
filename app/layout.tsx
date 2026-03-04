import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Header from "@/app/ui/Header"; 
import { AppProvider } from "@/app/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
