export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <p className="mt-2 text-sm">Transforming Data into Intelligent Solutions</p>
        </div>
      </footer>
    )
  }