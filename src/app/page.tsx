import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EAE8E8] dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
      {/* Intro Section */}
      <section id="intro" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-72 h-90 mx-auto mb-8">
              <Image
                src="/laurenz-bilek-cover-pic.png" 
                alt="Laurenz Bilek - Software Developer"
                width={4961}
                height={7061}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-[#548AB7] to-[#548AB7] bg-clip-text text-transparent">
            Laurenz Bilek
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#548AB7] dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            One-liner introduction
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-[#548AB7] hover:bg-[#6FA2CD] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-[#D6D3CD] dark:border-gray-600 hover:border-[#548AB7] px-8 py-3 rounded-lg font-medium transition-colors text-[#548AB7] hover:text-[#548AB7]"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
