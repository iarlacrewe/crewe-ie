import Image from "next/image";
import { Libre_Bodoni } from 'next/font/google';

const libreBodoni = Libre_Bodoni({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className={`max-w-[500px] w-[90%] mx-auto bg-white text-[#333] ${libreBodoni.className}`}>
        <div className="mb-16 animate-fade-in-up">
          <div className="w-1/2 aspect-square relative greyscale-hover">
            <Image
              src="/profile.jpg?height=300&width=300"
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <h1 className="text-2xl font-bold mt-4 animate-fade-in-up delay-100">Iarla Crewe</h1>
          <h2 className="text-xl mt-2 animate-fade-in-up delay-200">Cofounder, COO</h2>
        </div>

        <div className="mb-16 animate-fade-in-up delay-300">
          <h3 className="text-xl font-semibold mb-5">Work</h3>
          <div className="w-full">
            <div className="work-card-container">
              <a href="https://pyra.fi/" className="relative flex items-center p-4 w-full work-card">
                <div className="w-12 h-12 greyscale-hover relative flex-shrink-0">
                  <Image
                    src="/pyra-logo.svg"
                    alt="Pyra"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="ml-5 work-card-text">
                  <span className="block">Pyra</span>
                  <span className="block text-sm opacity-85">Hold assets, earn yield, <span className="whitespace-nowrap">spend cash</span></span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up delay-400">
          <h3 className="text-xl font-semibold mb-5">Contact me</h3>
          <div className="flex flex-wrap justify-between contact-container">
            {[{ text: "Email", href: "mailto:iarla@pyra.fi" },
            { text: "X / Twitter", href: "https://x.com/iarlacrewe" },
            { text: "LinkedIn", href: "https://www.linkedin.com/in/iarla-crewe/" },
            { text: "GitHub", href: "https://github.com/iarla-crewe" }
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.href}
                className="block relative w-[23%] animate-fade-in-up contact-item"
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                <div className="flex items-center p-4 w-full h-full contact-card hover:shadow-md">
                  <span className="work-card-text">{contact.text}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

