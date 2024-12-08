// import React from "react";
// import Image from "next/image";

// function Footer() {
//   return (
//     <>
//       {/* Footer Container */}
//       <div className="bg-gradient-to-b from-black to-blue-900 text-white p-6">
//         <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between sm:space-x-6">
//           {/* Logo Section */}
//           <div className="flex flex-col items-center sm:items-start sm:w-1/3 justify-center">
//             <Image
//               src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733112796/vqjifbdhv8am24uitmmt.png"
//               alt="Logo"
//               width={120}
//               height={140}
//               className="rounded-lg mb-4"
//             />
//           </div>

//           {/* Contact Section */}
//           <div className="flex flex-col items-center sm:items-start sm:w-1/3 sm:text-left border-t border-white sm:border-t-0 sm:border-l sm:border-r sm:px-6 py-4 sm:py-0 justify-center">
//             <h2 className="font-bold text-lg sm:text-xl mb-2">Contact Us</h2>
//             <p className="flex items-center text-base sm:text-lg">
//               <span className="mr-2">📞</span> 7990553041
//               <span className="ml-2">Arthur Murray</span>
//             </p>
//             <p className="flex items-center text-base sm:text-lg">
//               <span className="mr-2">📞</span> 7205131346
//               <span className="ml-2">Harley Joan</span>
//             </p>
//             <p className="flex items-center text-base sm:text-lg">
//               <span className="mr-2">📧</span>
//               <a href="mailto:nitrkl.ecell@gmail.com" className="underline">
//                 nitrkl.ecell@gmail.com
//               </a>
//             </p>
//           </div>

//           {/* Navigation Section */}
//           <div className="flex flex-col items-center sm:items-start sm:w-1/3 sm:text-left py-4 sm:py-0 justify-center">
//             <p className="text-2xl sm:text-xl font-bold mb-1">About Us</p>
//             <p className="text-xl sm:text-lg font-bold mb-1">Events</p>
//             <p className="text-xl sm:text-lg font-bold mb-1">Speakers</p>
//             <p className="text-xl sm:text-lg font-bold mb-1">Sponsors</p>
//             <p className="text-xl sm:text-lg font-bold">Our Partners</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="bg-black text-center text-sm text-white py-2">
//         Made with 🩵 by WEBWIZ
//       </div>
//     </>
//   );
// }

// export default Footer;



// import React from "react";
// import Image from "next/image";

// function Footer() {
//   return (
//     <>
//       {/* Footer Container */}
//       <div className="bg-gradient-to-b from-black to-blue-600 text-white p-6">
//         <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between sm:space-x-6">
//           {/* Logo Section */}
//           <div className="flex flex-col items-center sm:items-start sm:w-1/3">
//             <Image
//               src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733112796/vqjifbdhv8am24uitmmt.png"
//               alt="Logo"
//               width={80}
//               height={80}
//               className="rounded-lg mb-4"
//             />
//             <h1 className="text-xl sm:text-2xl font-bold">E-Cell NIT Rourkela</h1>
//           </div>

//           {/* Contact Section */}
//           <div className="flex flex-col items-center sm:items-start sm:w-1/3 text-center sm:text-left border-t border-white sm:border-t-0 sm:border-l sm:border-r sm:px-6 py-4 sm:py-0">
//             <h2 className="font-bold text-lg sm:text-xl mb-2">Contact Us</h2>
//             <p className="flex items-center text-base sm:text-lg">
//               <span className="mr-2">📞</span> 7990553041
//               <span className="ml-2">Arthur Murray</span>
//             </p>
//             <p className="flex items-center text-base sm:text-lg">
//               <span className="mr-2">📞</span> 7205131346
//               <span className="ml-2">Harley Joan</span>
//             </p>
//             <p className="flex items-center text-base sm:text-lg">
//               <span className="mr-2">📧</span>
//               <a href="mailto:nitrkl.ecell@gmail.com" className="underline">
//                 nitrkl.ecell@gmail.com
//               </a>
//             </p>
//           </div>

//           {/* Navigation Section */}
//           <div className="flex flex-col items-center sm:items-start sm:w-1/3 text-center sm:text-left py-4 sm:py-0">
//             <p className="text-base sm:text-lg font-bold mb-1">About Us</p>
//             <p className="text-base sm:text-lg font-bold mb-1">Events</p>
//             <p className="text-base sm:text-lg font-bold mb-1">Speakers</p>
//             <p className="text-base sm:text-lg font-bold mb-1">Sponsors</p>
//             <p className="text-base sm:text-lg font-bold">Our Partners</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="bg-black text-center text-sm text-white py-2">
//         Made with 🩵 by WEBWIZ
//       </div>
//     </>
//   );
// }

// export default Footer;



import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
      {/* Footer Container */}
      <div className="bg-gradient-to-b from-black to-blue-900 text-white p-6">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center sm:text-left">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center sm:items-center sm:w-1/3">
            <Image
              src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733112796/vqjifbdhv8am24uitmmt.png"
              alt="Logo"
              width={120}
              height={140}
              className="rounded-lg mb-4"
            />
            {/* <h1 className="text-xl sm:text-2xl font-bold">E-Cell NIT Rourkela</h1> */}
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center justify-center sm:w-1/3 sm:border-l sm:border-r sm:px-6 py-4 sm:py-0">
            <h2 className="font-bold text-lg sm:text-xl mb-2">Contact Us</h2>
            <p className="flex items-center text-base sm:text-lg">
              <span className="mr-2">📞</span> 7990553041
              <span className="ml-2">Arthur Murray</span>
            </p>
            <p className="flex items-center text-base sm:text-lg">
              <span className="mr-2">📞</span> 7205131346
              <span className="ml-2">Harley Joan</span>
            </p>
            <p className="flex items-center text-base sm:text-lg">
              <span className="mr-2">📧</span>
              <a href="mailto:nitrkl.ecell@gmail.com" className="underline">
                nitrkl.ecell@gmail.com
              </a>
            </p>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col items-center justify-center sm:w-1/3">
            <p className="text-2xl sm:text-xl font-bold mb-1">About Us</p>
            <p className="text-xl sm:text-lg font-bold mb-1">Events</p>
            <p className="text-xl sm:text-lg font-bold mb-1">Speakers</p>
            <p className="text-xl sm:text-lg font-bold mb-1">Sponsors</p>
            <p className="text-xl sm:text-lg font-bold">Our Partners</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black  text-center text-lg text-white py-2">
        Made with 🩵 by WEBWIZ
      </div>
    </>
  );
}

export default Footer;
