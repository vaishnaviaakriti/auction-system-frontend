import React from 'react';

export default function About() {
  return (
    <div className="p-8">
      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">About Our Online Auction System</h1>
        <p className="text-lg">
          Welcome to our online auction system, where buyers and sellers come together to trade a wide range of items in a transparent and secure environment.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Mission and Vision</h2>
        <p className="text-lg font-bold mb-2">Mission Statement:</p>
        <p className="text-lg mb-4">
          Our mission is to provide a user-friendly, efficient, and trustworthy platform for conducting online auctions.
        </p>
        <p className="text-lg font-bold mb-2">Vision Statement:</p>
        <p className="text-lg">
          We envision a future where individuals and businesses can easily buy and sell goods through our platform, fostering economic growth and opportunity.
        </p>
      </div>

      {/* Platform Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Platform Features</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Secure bidding and payment processing</li>
          <li className="text-lg mb-2">Comprehensive item categorization</li>
          <li className="text-lg mb-2">Real-time auction tracking and notifications</li>
          <li className="text-lg mb-2">User-friendly interface for both buyers and sellers</li>
          <li className="text-lg">Dedicated customer support</li>
        </ul>
      </div>

      {/* Benefits for Users */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Benefits for Users</h2>
        <p className="text-lg">
          Highlight the advantages of using the platform, such as convenience, accessibility, and a wide selection of items.
        </p>
      </div>

      {/* Our Team */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <p className="text-lg mb-2">Team Introduction:</p>
        <p className="text-lg mb-4">
          Introduce the core team members behind the platform, including founders, developers, and support staff.
        </p>
        <p className="text-lg mb-2">Team Values:</p>
        <p className="text-lg">
          Share the values and principles that guide the team in building and maintaining the platform, such as transparency, integrity, and customer satisfaction.
        </p>
      </div>

      {/* Customer Testimonials */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Customer Testimonials</h2>
        <p className="text-lg">
          Include testimonials from satisfied users who have had positive experiences with the platform. Testimonials can help build trust and credibility.
        </p>
      </div>

      {/* Contact Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="text-lg">
          Provide contact information for users who have questions, feedback, or inquiries. Include email addresses, phone numbers, and links to social media profiles.
        </p>
      </div>

      {/* Additional Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
        <p className="text-lg mb-2">FAQ Section:</p>
        <p className="text-lg mb-4">
          Address common questions and concerns that users may have about the platform, such as registration, bidding process, payment options, and security measures.
        </p>
        <p className="text-lg mb-2">Platform Statistics:</p>
        <p className="text-lg">
          Share relevant statistics and metrics about the platform's performance, such as the number of auctions conducted, total transactions processed, and user satisfaction ratings.
        </p>
      </div>

      {/* Conclusion */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg">
          Wrap up the page with a final message, thanking visitors for their interest in the platform and inviting them to explore further.
        </p>
      </div>

      {/* Design Considerations */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Design Considerations</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Visual Elements: Use images, icons, and graphics to enhance the page's visual appeal and convey key messages effectively.</li>
          <li className="text-lg mb-2">Brand Consistency: Ensure that the design and tone of the "About" page align with the platform's branding and overall design aesthetic.</li>
          <li className="text-lg">User-Friendly Layout: Organize content in a logical and easy-to-navigate manner, using headings, bullet points, and whitespace to improve readability.</li>
        </ul>
      </div>
    </div>
  );
}
