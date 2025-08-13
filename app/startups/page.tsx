"use server";

import Link from "next/link";

export default async function StartupsPage() {
  return (
    <>
      <div className="max-w-xl px-3 mx-auto flex flex-col gap-3">
        <div className="flex flex-row items-center">
          <img
            src="https://iwvfmqhehjsxuzgebbvp.supabase.co/storage/v1/object/public/assets/logo_prometheus_no_shadow.png"
            className="h-20"
            alt="Synopsis Logo"
          />
          <div className="flex flex-col mx-auto">
            <h2 className="underline text-4xl text-center">
              Synopsis Education
            </h2>
            <Link
              href="https://www.synopsiseducation.com.au"
              className="hover:text-blue-600"
              target="_blank"
            >
              www.synopsiseducation.com.au
            </Link>
          </div>
        </div>
        <p>
          Synopsis Education was co-founded by me and my mate Priaav. We&apos;re
          an online-based tutoring centre in NSW, targeting high-school students
          from Year 7-12. We believe tutoring should be accessible and
          student-centric.
        </p>{" "}
        <h3 className="italic text-center">Why choose our centre?</h3>
        <p>
          We really don&apos;t like the status-quo approach cramming notes,
          memorising content and brute-forcing problems until they magically
          &apos;stick&apos; as the prevailing approach at Australian schools.
          Our brains don&apos;t work like computers; their internal model
          operates on cause and effect & intuitive connections.
        </p>
        <p>
          We think it&apos;s stupid to try and abstract over your brain&apos;s
          mental model with brute-force approaches, so that&apos;s the problem
          we&apos;re trying to solve.
        </p>{" "}
      </div>
    </>
  );
}
