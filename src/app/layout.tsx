import Image from "next/image";
import Link from "next/link";
// import "./globals.css";
import "./output.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-lg">
        <div className="flex items-center">
          <div className=" md:block hidden pr-4 ">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              className="mx-auto rounded-lg"
              alt={"logo"}
            />
          </div>
          <div className=" md:pl-0 pl-12 md:flex md:items-center pr-4">
            <Link href={"/"}>
              <h1 className="text-3xl font-bold text-red-600 pr-4">
                miumiu&apos;s Blog
              </h1>
            </Link>
            <p className=" text-slate-300">
              {" "}
              안녕하세요? 제 블로그에 오신걸 환영해요.
            </p>
          </div>
        </div>
      </div>
    </header>
  );

  const footer = (
    <header>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Developed by Jinyoung using NextJs 13!</h3>
      </div>
    </header>
  );

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
