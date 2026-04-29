 import Banner from "@/components/Banner";
import Card from "@/components/Card";
import data from "@/data/data.json";

export default function Home() {
  return (
    <>
      <Banner />

      <section className="px-6 py-10 bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((friend) => (
            <Card key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </>
  );
}