"use client";

import { Navbar, Footer, Card } from "flowbite-react";
import { Alert, Button } from "flowbite-react";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Alert */}
      <Alert color="info">Welcome to Foodalist, 33333 explore the best food options around!</Alert>

      {/* Navbar */}
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Foodalist
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About Us</Navbar.Link>
          <Navbar.Link href="/services">Services</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* Hero Section */}
      <div className="bg-gray-100 text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Foodalist</h1>
        <p className="mb-6 text-lg">Discover the best food options near you!</p>
        <Button size="lg" color="purple">Get Started</Button>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card imgSrc="https://via.placeholder.com/150" className="text-center">
            <h5 className="text-2xl font-bold">Food Delivery</h5>
            <p>We deliver the best food to your doorstep!</p>
          </Card>
          <Card imgSrc="https://via.placeholder.com/150" className="text-center">
            <h5 className="text-2xl font-bold">Healthy Recipes</h5>
            <p>Explore hundreds of healthy and delicious recipes!</p>
          </Card>
          <Card imgSrc="https://via.placeholder.com/150" className="text-center">
            <h5 className="text-2xl font-bold">Meal Planning</h5>
            <p>Plan your meals for the week with expert advice!</p>
          </Card>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="text-center">
            <p>"Foodalist helped me discover amazing local food!"</p>
            <h5 className="mt-4 font-bold">- John Doe</h5>
          </Card>
          <Card className="text-center">
            <p>"The meal planning tool is a lifesaver for my family!"</p>
            <h5 className="mt-4 font-bold">- Jane Smith</h5>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <Footer container>
        <div className="w-full text-center">
          <Footer.Copyright href="#" by="Foodalist™" year={2024} />
          <Footer.LinkGroup>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Terms of Service</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </Footer>
    </div>
  );
}
