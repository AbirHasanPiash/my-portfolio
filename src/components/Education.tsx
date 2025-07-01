import React from "react";

export default function Education() {
  return (
    <section className="bg-gray-900 mt-20 w-full flex items-center justify-center">
      <div className="w-full max-w-6xl text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12">
          Education
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch gap-6 px-4 md:px-8">
          {/* Card */}
          <div className="flex-1 bg-gray-800 rounded-2xl shadow-md border border-gray-700 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-2">
              BRAC University, Dhaka
            </h3>
            <p className="text-gray-400 text-lg mb-3">
              Bachelor of Science in Computer Science and Engineering
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between text-gray-300 text-sm md:text-base">
              <span>📅 Fall 2022 – Present</span>
              <span>
                🎓 CGPA: <span className="font-semibold text-white">3.87</span>
              </span>
            </div>
          </div>

          {/* Add more cards here if needed */}
        </div>
      </div>
    </section>
  );
}
