export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold text-white">Accredian</h2>
          <p className="mt-3 text-sm text-gray-400">
            Empowering enterprises with next-gen learning solutions.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
            <li><a href="/login" className="hover:text-white">Login</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">support@accredian.com</p>
          <p className="text-sm mt-1">+91 98765 43210</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        © 2026 Accredian. All rights reserved.
      </div>
    </footer>
  );
}