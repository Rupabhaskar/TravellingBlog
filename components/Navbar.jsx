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
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Travel Blog</h1>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/travel-on-budget">Budget Travel</Link>
        </li>
        <li>
            <Link href="/countries">Countries</Link>
        </li>
      </ul>
    </nav>
  );
}
