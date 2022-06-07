import Link from "next/link";

export default function CustomError({ title }) {
  return (
    <article className="flex flex-col items-center justify-center min-h-screen">
      <section>
        <h1 className="font-bold text-4xl tracking-tight">Oops!, {title} 🗿</h1>
        <div className="flex items-center mt-3 text-base tracking-tight space-x-2">
          <p className="text-gray-600 select-none">Rades Pratama |</p>
          <Link href="/">
            <a className="hover:underline">Back to home</a>
          </Link>
        </div>
      </section>
    </article>
  );
}
