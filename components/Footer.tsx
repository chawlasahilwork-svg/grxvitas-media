export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 md:grid-cols-3">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-black text-white">
              Grxvitas<span className="text-gray-500">.Media</span>
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-gray-400">
              Luxury AI advertising agency creating cinematic
              commercials, premium product films and next-generation
              brand visuals for ambitious businesses.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Navigation
            </h3>

            <div className="space-y-4">

              <a
                href="#services"
                className="block text-gray-400 transition hover:text-white"
              >
                Services
              </a>

              <a
                href="#portfolio"
                className="block text-gray-400 transition hover:text-white"
              >
                Portfolio
              </a>

              <a
                href="#process"
                className="block text-gray-400 transition hover:text-white"
              >
                Process
              </a>

              <a
                href="#reviews"
                className="block text-gray-400 transition hover:text-white"
              >
                Reviews
              </a>

              <a
                href="#contact"
                className="block text-gray-400 transition hover:text-white"
              >
                Contact
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Get In Touch
            </h3>

            <a
              href="mailto:chawlasahilwork@gmail.com"
              className="block text-gray-400 transition hover:text-white"
            >
              chawlasahilwork@gmail.com
            </a>

            <a
              href="https://instagram.com/grxvitas.media"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-gray-400 transition hover:text-white"
            >
              @grxvitas.media
            </a>

            <p className="mt-4 text-gray-500">
              Worldwide Remote
            </p>

          </div>

        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-white/10"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-sm text-gray-500">
            © 2026 Grxvitas.Media. All Rights Reserved.
          </p>

          <div className="flex gap-8">

            <a
              href="https://instagram.com/grxvitas.media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white"
            >
              YouTube
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}