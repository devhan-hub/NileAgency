import "./globals.css";
import Header from "@/components/Header";



export const metadata = {
  title: "NileAgency",
  description: "Created by devhan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased  bg-[#1A1A2E] `}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
