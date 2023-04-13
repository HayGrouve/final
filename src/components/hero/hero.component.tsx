import Image from "next/image";

export default function Hero() {
  return (
    <div className="  bg-gray-900">
      <div className="relative isolate h-screen overflow-hidden">
        <Image
          src="/hero-football.svg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover 2xl:object-[0-150px]"
          width={1000}
          height={1000}
        />
        <div className="absolute -z-10 h-full w-full bg-black opacity-50"></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Sport predict is changing the betting game forever
            </h1>
            <p className="mt-6 text-xl font-semibold leading-8 text-gray-200">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#CEO"
                className="rounded-md bg-blue-700 px-3.5 py-2.5 text-xl font-semibold text-white shadow-xl hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 motion-safe:animate-pulse"
              >
                Hear our CEO&apos;s mind
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
