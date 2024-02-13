import React from 'react';
import v from "../assets/v.jpeg";
import Aj from "../assets/Aj (2).jpeg";
import a from "../assets/a.jpeg";


export default function About() {
  return (
    <div className="p-8">
      {/* Title Section */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-lg italic">
          Welcome to our online auction system, where buyers and sellers come together to trade a wide range of items in a transparent and secure environment.
        </p>
      </div>

            {/* Mission and Vision */}
            <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Mission And Vision</h2>
        <p className="text-lg font-bold mb-2">Mission Statement:</p>
        <p className="text-lg mb-4 italic">
          Our mission is to provide a user-friendly, efficient, and trustworthy platform for conducting online auctions.
        </p>
        <p className="text-lg font-bold mb-2">Vision Statement:</p>
        <p className="text-lg italic">
          We envision a future where individuals and businesses can easily buy and sell goods through our platform, fostering economic growth and opportunity.
        </p>
      </div>

      {/* Platform Features */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Platform Features</h2>
        <ul className="list-disc list-inside text-lg italic">
          <li className="mb-2">Secure bidding and payment processing</li>
          <li className="mb-2">Comprehensive item categorization</li>
          <li className="mb-2">Real-time auction tracking and notifications</li>
          <li className="mb-2">User-friendly interface for both buyers and sellers</li>
          <li>Dedicated customer support</li>
        </ul>
      </div>

      {/* Benefits for Users
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Benefits for Users</h2>
        <p className="text-lg">
          Highlight the advantages of using the platform, such as convenience, accessibility, and a wide selection of items.
        </p>
      </div> */}


      {/* Our Team */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
        <div className="flex justify-center space-x-60">
          <div className="flex flex-col items-center bg-white p-4 ronded-lg shadow-md">
            <img src={v} alt="Vaishnavi" className="w-32 h-32 object-cover mb-2" />
            <p className='font-semibold text-lg'>Vaishnavi Kumari</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={Aj} alt="Jyoti" className="w-32 h-32 object-cover mb-2" />
            <p className='font-semibold text-lg'>Jyotirmayee Mekhala</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={a} alt="Anshu" className="w-32 h-32 object-cover mb-2" />
            <p className='font-semibold text-lg'>Anshu Kumari</p>
          </div>
        </div>
      </div>

            {/* Customer Testimonials
            <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Customer Testimonials</h2>
        <p className="text-lg">
          Include testimonials from satisfied users who have had positive experiences with the platform. Testimonials can help build trust and credibility.
        </p>
      </div> */}

      {/* Contact Information */}
      
        <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Information</h2>
  <p className="text-lg text-center italic">
    For any questions, feedback, or inquiries, feel free to reach out to us:
  </p>
  <div className="mt-4 flex justify-center space-x-6">
    <div className="flex flex-col space-y-2">
      {/* Team Member 1 */}
      <p className="text-lg font-semibold">
        Jyotirmayee Mekhala:
        <br />
        Email: <a href="mailto:member1.email@example.com" className="text-blue-500">jyoti.sinha2609@gmail.com</a>
        <br />
        Instagram: <a href="https://www.instagram.com/jyotii._01/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Jyotirmayee Mekhala</a>
      </p>

      {/* Team Member 2 */}
      <p className="text-lg font-semibold">
        Vaishnavi Kumari:
        <br />
        Email: <a href="mailto:member2.email@example.com" className="text-blue-500">aakritivaishu@gmail.com</a>
        <br />
        Instagram: <a href="https://www.instagram.com/vaishnavi.8297/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Vaishnavi Kumari</a>
      </p>

      <p className="text-lg font-semibold">
        Anshu Kumari:
        <br />
        Email: <a href="mailto:member2.email@example.com" className="text-blue-500">akumari.dbg@gmail.com</a>
        <br />
        Instagram: <a href="https://www.instagram.com/_anshuu_mishra/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Anshu Kumari</a>
      </p>

      
    </div>
  </div>
  </div>
      

      {/* Additional Information
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
      </div> */}

      {/* Conclusion
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg">
          Wrap up the page with a final message, thanking visitors for their interest in the platform and inviting them to explore further.
        </p>
      </div> */}

      {/* Design Considerations
      <div>
        <h2 className="text-2xl font-bold mb-4">Design Considerations</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Visual Elements: Use images, icons, and graphics to enhance the page's visual appeal and convey key messages effectively.</li>
          <li className="text-lg mb-2">Brand Consistency: Ensure that the design and tone of the "About" page align with the platform's branding and overall design aesthetic.</li>
          <li className="text-lg">User-Friendly Layout: Organize content in a logical and easy-to-navigate manner, using headings, bullet points, and whitespace to improve readability.</li>
        </ul>
      </div> */}
    </div>
  );
}
