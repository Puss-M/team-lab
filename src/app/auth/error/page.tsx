import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-black px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Access Denied
        </h1>
        <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
          You do not have permission to access the internal hub.
          <br />
          Please ensure you are a member of the Swift Coding Club organization on GitHub.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Go back home
          </Link>
          <Link
            href="/auth/signin"
             className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            Try Again <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
