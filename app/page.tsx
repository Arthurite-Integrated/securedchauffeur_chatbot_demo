import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Secured Chauffeur Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 font-medium border-b-2 border-gray-900 pb-1">
                HOME
              </Link>
              <Link href="/shop" className="text-gray-600 hover:text-gray-900 font-medium">
                SHOP
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium">
                ABOUT US
              </Link>
            </nav>

            {/* Shopping Bag */}
            <div className="flex items-center">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <ShoppingBag className="h-5 w-5 mr-1" />
                <span className="text-sm font-medium">SHOPPING BAG (0)</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.webp"
            alt="Luxury hotel concierge bell and lobby"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Personalized
            <br />
            Service
          </h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-none">
            EXPLORE OUR FLEET
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <Image
                src="/images/building.png"
                alt="Secured Chauffeur building"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About Secured
                <br />
                Chauffeur
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We provide premium chauffeur services with a focus on safety, reliability, and exceptional customer
                experience. Our professional drivers and luxury fleet ensure you travel in comfort and style.
              </p>
              <Button
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-none"
              >
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience luxury transportation tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Image
                  src="/images/airport-transfer.png"
                  alt="Airport Transfer"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Airport Transfer</h3>
                <p className="text-gray-600">Reliable and punctual airport transportation services</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Image
                  src="/images/corporate-travel.png"
                  alt="Corporate Travel"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Travel</h3>
                <p className="text-gray-600">Professional transportation for business executives</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Image
                  src="/images/special-events.png"
                  alt="Special Events"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Special Events</h3>
                <p className="text-gray-600">Elegant transportation for weddings and special occasions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/images/logo-white.png"
                alt="Secured Chauffeur Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 max-w-md">
                Premium chauffeur services providing safe, reliable, and luxurious transportation solutions for all your
                travel needs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Airport Transfer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Corporate Travel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Special Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    City Tours
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@securedchauffeur.com</li>
                <li>24/7 Customer Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Secured Chauffeur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
