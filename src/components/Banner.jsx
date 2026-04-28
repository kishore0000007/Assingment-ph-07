"use client";

export default function Banner() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center py-16 px-4 bg-gray-50">
      
       
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Friends to keep close in your life
      </h1>

      
      <p className="text-gray-500 max-w-xl mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture 
        the relationships that matter most.
      </p>

       
      <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
        + Add a Friend
      </button>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-full max-w-4xl">

        <div className="bg-white shadow-sm rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">10</h2>
          <p className="text-sm text-gray-500">Total Friends</p>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">3</h2>
          <p className="text-sm text-gray-500">On Track</p>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">6</h2>
          <p className="text-sm text-gray-500">Need Attention</p>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">12</h2>
          <p className="text-sm text-gray-500">Interactions This Month</p>
        </div>

      </div>
    </section>
  );
}