// import "../styles/globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export const metadata = {
//   title: "Travel Blog",
//   description: "Explore the world with tips, guides, and budget travel advice.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50 text-gray-900">
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


// authan
// import "../styles/globals.css";
// import Navbar from '@/components/Navbar';
// import { SessionProvider } from 'next-auth/react';

// export const metadata = {
//   title: 'Travel Blog',
//   description: 'Explore travel destinations and tips',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <SessionProvider>
//           <Navbar />
//           <main className="p-4">{children}</main>
//         </SessionProvider>
//       </body>
//     </html>
//   );
// }


import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import { Providers } from './providers'; // adjust path if needed


export const metadata = {
  title: 'Travel Blog',
  description: 'Explore, travel, and save!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}




// import Navbar from '@/components/Navbar';
// import { SessionProviderWrapper } from '@/components/SessionProviderWrapper';
// import "../styles/globals.css";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <SessionProviderWrapper>
//           <Navbar />
//           {children}
//         </SessionProviderWrapper>
//       </body>
//     </html>
//   );
// }
