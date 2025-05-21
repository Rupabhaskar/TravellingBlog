// "use client";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
//       <h1 className="text-xl font-bold">Travel Blog</h1>
//       <ul className="flex gap-4">
//         <li><Link href="/">Home</Link></li>
//         <li><Link href="/travel-on-budget">Budget Travel</Link></li>
//       </ul>
//     </nav>
//   );
// }
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
//       <h1 className="text-xl font-bold">Travel Blog</h1>
//       <ul className="flex gap-4">
//         <li>
//           <Link href="/">Home</Link>
//         </li>
//         <li>
//           <Link href="/blogs">Blogs</Link>
//         </li>
//         <li>
//           <Link href="/travel-on-budget">Budget Travel</Link>
//         </li>
//         <li>
//             <Link href="/countries">Countries</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }


// authantiaction

// 'use client';

// import Link from 'next/link';
// import AuthButton from './AuthButton';

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
//       <Link href="/" className="text-xl font-bold text-blue-600">Travel Blog</Link>
//       <div className="flex gap-6 items-center">
//         <Link href="/blogs" className="text-gray-700 hover:text-blue-600">Blogs</Link>
//         <Link href="/countries" className="text-gray-700 hover:text-blue-600">Countries</Link>
//         <AuthButton /> {/* 👈 Login/Logout button here */}
//       </div>
//     </nav>
//   );
// }

'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Travel Blog</h1>

      {status === 'loading' ? (
        <p>Loading...</p>
      ) : session ? (
        <div className="flex items-center gap-4">
          <a href="/blogs">Blogs</a>
          <a href="/budget">Budget Travel</a>
          <a href="/countries">Countries</a>
          <button
            onClick={() => signOut()}
            className="bg-red-600 px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn('github')}
          className="bg-blue-600 px-3 py-1 rounded"
        >
          Login
        </button>
      )}
    </nav>
  );
}
