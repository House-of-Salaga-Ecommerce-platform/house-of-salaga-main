import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Home page</h1>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/admin/login">Admin Login</Link></li>
      <li><Link href="/admin/orders">Admin Orders</Link></li>
    </ul>
    </>
    
  );
}
