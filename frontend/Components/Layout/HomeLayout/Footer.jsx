export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        
        {/* Left side */}
        <p className="mb-2 md:mb-0">
          © 2026 Verdant Student Portal. Calm by design.
        </p>

        {/* Right side */}
        <p>
          Built for school project · React · Spring Boot ready
        </p>

      </div>
    </footer>
  );
}