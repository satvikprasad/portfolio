"use server";

import Link from "next/link";

export default async function DevelopmentPage() {
  return (
    <>
      <div className="mx-3 md:mx-48 flex flex-col gap-3">
          <h2 className="text-center text-4xl underline">
              What I'm Working On
        </h2>
        <div className="flex flex-col gap-12 md:gap-0 md:grid md:grid-cols-2 md:space-x-12">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <h4 className="text-center text-4xl">Synopsis HQ</h4>
              <Link
                className="text-slate-500 text-xl text-center hover:text-blue-700"
                href="https://hq.synopsiseducation.com.au"
                target="_blank"
              >
                hq.synopsiseducation.com.au
              </Link>
          </div>
          <p className="text-2xl text-justify">
              An everything portal for Synopsis Education designed by me :0.
          </p>
            <p className="text-2xl text-justify">
              Frontend written in Next.js + Tailwind (Typescript). Backend stack
              is Express.js + Supabase w/ Zapier Integrations.
            </p>

            <p>Cool problems we solved:</p>

            <ul className="list-disc ml-6">
              <li>
                Rendering PDFs to images on-demand to prevent unwanted downloads
                and shares + an LRU cache to improve lookup speeds.
              </li>
              <li>Stripe integration for our no-hassle payment system.</li>
              <li>
                Claude Sonnet 4 + A custom python-pptx MCP server for rapid
                booklet ideation.
              </li>
              <li>CRON Zoom meeting scheduling.</li>
              <li>AWS + Supabase file sync (RClone)</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <h4 className="text-center text-4xl">Peggiator</h4>
              <Link
                className="text-slate-500 text-xl text-center hover:text-blue-700"
                href="https://www.peggiator.com"
                target="_blank"
              >
                peggiator.com
              </Link>
            </div>
            <p className="text-2xl text-justify">
              A music visualiser for the web designed for 3D workspaces and
              extensibility (currently WIP).{" "}
            </p>

            <p className="text-2xl text-justify">
              Written using WebGL + Electron (and a bit of React for the
              sidebar) with a WASM core (transpiled from Zig).
            </p>

            <p>Cool problems I solved:</p>

            <ul className="list-disc ml-6">
              <li>
                Custom 'listener' utility written in Swift using the
                ScreenCaptureKit on MacOS to allow desktop realtime system audio
                recording.
              </li>
              <li>
                Used AudioWorklets to capture raw buffer data from web
                AudioElements when operating on the web.
              </li>
              <li>Custom FFT implementation in Zig (for fun).</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
