import Link from "next/link";

export default function Second() {
  return (
    <>
        <p><strong>Second</strong></p>
        <p><Link href="/">Home</Link></p>
        <p><Link href="/second/1">Page 1</Link></p>
        <p><Link href="/second/2">Page 2</Link></p>
        <p><Link href="/second/3">Page 3</Link></p>
    </>
  );
}
