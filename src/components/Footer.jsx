export default function Footer() {
  return (
    <footer className="container mx-auto border-t border-gray-800 dark:border-gray-200">
      <div className="px-4 py-3 text-center">
        <h3 className="max-w-sm mx-auto font-medium text-sm tracking-tight text-white dark:text-gray-950">
          Designed and Developed by Rades Pratama. Built with{" "}
          <span className="text-green-500 dark:text-sky-500">Next.js</span> &{" "}
          <span className="text-green-500 dark:text-sky-500">
            Tailwind CSS.
          </span>{" "}
          Hosted on{" "}
          <span className="text-green-500 dark:text-sky-500">Vercel.</span>
        </h3>
      </div>
    </footer>
  );
}
