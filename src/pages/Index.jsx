import { Paw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <Paw className="mx-auto w-24 h-24 text-blue-500 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Welcome to Paw Prints</h1>
        <p className="text-xl text-gray-600 mb-8">Discover the world of pets and animal care</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Index;
