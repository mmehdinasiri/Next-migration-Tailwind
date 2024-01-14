import Link from 'next/link';

export default function Index() {
  return (
    <div title="title">
      <p>{'description'}</p>
      <p>
        <Link href="/about">{'navigateToAbout'}</Link>
      </p>
      <h1 className="text-3xl font-bold underline">test page</h1>
    </div>
  );
}
