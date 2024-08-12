export function Footer() {
  return (
    <footer className="p-4 py-20 bg-gray-100 text-center text-gray-700 text-lg">
      <p className="mb-4">
        Created & Maintained by{" "}
        <a href="https://github.com/mkawi" className="text-red-500 underline">
          Hamoudi
        </a>
        , the platform for organising tech events and hackathons!
      </p>
      <p>
        <a href="/about#contact" className="text-gray-500 underline">
          Get in touch
        </a>{" "}
        –{" "}
        <a href="https://github.com/mkawi" className="text-gray-500 underline">
          Open source on GitHub
        </a>
      </p>
    </footer>
  )
}
