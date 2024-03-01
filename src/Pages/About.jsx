import React from 'react';
import v from "../assets/v.jpeg";
import Aj from "../assets/Aj (2).jpeg";
import a from "../assets/a.jpeg";
import backgroundImage from "../assets/att.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      {/* Title Section */}
      <div className="mb-8 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-lg italic text-black">
          Welcome to our online auction system, where buyers and sellers come together to trade a wide range of items in a transparent and secure environment.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="mb-8 text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Mission And Vision</h2>
        <p className="text-lg font-bold mb-2">Mission Statement:</p>
        <p className="text-lg mb-4 italic text-black">
          Our mission is to provide a user-friendly, efficient, and trustworthy platform for conducting online auctions.
        </p>
        <p className="text-lg font-bold mb-2">Vision Statement:</p>
        <p className="text-lg italic text-black">
          We envision a future where individuals and businesses can easily buy and sell goods through our platform, fostering economic growth and opportunity.
        </p>
      </div>

      {/* Platform Features */}
      <div className="mb-8 text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Platform Features</h2>
        <ul className="list-disc list-inside text-lg text-black italic">
          <li className="mb-2">Secure bidding and payment processing</li>
          <li className="mb-2">Comprehensive item categorization</li>
          <li className="mb-2">Real-time auction tracking and notifications</li>
          <li className="mb-2">User-friendly interface for both buyers and sellers</li>
          <li>Dedicated customer support</li>
        </ul>
      </div>

      {/* Meet Our Team */}
      <div className="mb-12 text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
        <div className="flex justify-center space-x-60">
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={v} alt="Vaishnavi" className="w-32 h-32 object-cover mb-2" />
            <p className='font-semibold text-black text-lg'>Vaishnavi Kumari</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={Aj} alt="Jyoti" className="w-32 h-32 object-cover mb-2" />
            <p className='font-semibold text-black text-lg'>Jyotirmayee Mekhala</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={a} alt="Anshu" className="w-32 h-32 object-cover mb-2" />
            <p className='font-semibold text-black text-lg'>Anshu Kumari</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-12 text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Information</h2>
        <p className="text-lg text-center text-black italic">
          For any questions, feedback, or inquiries, feel free to reach out to us:
        </p>
        <div className="mt-4 space-y-8">
          <div className="flex flex-row space-x-60">
            {/* Team Member 1 */}
            <p className="text-lg font-semibold mb-8">
              Vaishnavi Kumari:
              <br />
              Email: <a href="mailto:aakritivaishu@gmail.com" className="text-black">aakritivaishu@gmail.com</a>
              <br />
              Instagram: <a href="https://www.instagram.com/vaishnavi.8297/" target="_blank" rel="noopener noreferrer" className="text-black">Vaishnavi Kumari</a>
            </p>

            {/* Team Member 2 */}
            <p className="text-lg font-semibold mb-8">
              Jyotirmayee Mekhala:
              <br />
              Email: <a href="mailto:jyoti.sinha2609@gmail.com" className="text-black">jyoti.sinha2609@gmail.com</a>
              <br />
              Instagram: <a href="https://www.instagram.com/jyotii._01/" target="_blank" rel="noopener noreferrer" className="text-black">Jyotirmayee Mekhala</a>
            </p>

            <p className="text-lg font-semibold mb-8">
              Anshu Kumari:
              <br />
              Email: <a href="mailto:akumari.dbg@gmail.com" className="text-black">akumari.dbg@gmail.com</a>
              <br />
              Instagram: <a href="https://www.instagram.com/_anshuu_mishra/" target="_blank" rel="noopener noreferrer" className="text-black">Anshu Kumari</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
