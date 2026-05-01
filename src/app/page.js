 import Banner from "@/components/Banner";
import Card from "@/components/Card";
import data from "@/data/data.json";

export default function Home() {
  return (
    <>
      <Banner />

      <section className="w-full bg-gray-50 py-10">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Your Friends
          </h2>

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-4 sm:gap-6
          ">
            {data.map((friend) => (
              <Card key={friend.id} friend={friend} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}