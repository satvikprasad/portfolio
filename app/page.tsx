"use server";

export default async function Home() {
  return (
    <>
      <div className="max-w-xl px-3 mx-auto flex flex-col gap-3">
        <h2 className="underline text-4xl text-center">About Me</h2>
        <p className="text-justify">
          Hey, I&apos;m Satvik. Honestly, I&apos;m still just a kid (18 years
          old) so I&apos;m just starting to figure out the kind of person I want
          to be, and the things that make me the most fulfilled.
        </p>
        <p>
          I could probably write many, many paragraphs on the type of person I
          perceive myself to be, but I&apos;ll let you infer who I am through
          what I do, not what I say.
        </p>
      </div>
      <div className="max-w-xl px-3 pt-12 mx-auto flex flex-col gap-3">
        <h2 className="underline italic text-2xl text-center">
          What I&apos;m reading right now
        </h2>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="mx-auto max-h-30 w-30">
              <img
                src="https://m.media-amazon.com/images/I/61UyS0rJc2L._UF1000,1000_QL80_.jpg"
                className="mx-auto rounded-xl max-h-full"
                alt="War and Peace Logo"
              />
            </div>
            <p className="text-center">War and Peace</p>
            <p className="text-base text-center">Leo Tolstoy</p>
          </div>
          <div className="mx-auto my-auto">
            <h4 className="text-center">Reflections</h4>
            <p className="text-xl">
              <span className="font-bold">Damn.</span> This is a hard book to
              read.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
