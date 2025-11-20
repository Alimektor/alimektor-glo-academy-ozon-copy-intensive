import Link from "next/link";

export default async function ID({ params } : Readonly<{ params: { id: string } }>) {
  const { id } = await params;
  return (
    <>
        <p>ID: {id}</p>
        <Link href="/second">Second</Link>
    </>
  );
}
