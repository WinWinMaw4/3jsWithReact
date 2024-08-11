import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience";

const App = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-blue-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
        <p className="text-2xl mt-4">Bringing Innovation to Your World</p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded">Get Started</button>
      </section>

      {/* Second Section: Image + 3D Object */}
      <section className="second-section flex flex-col md:flex-row items-center justify-center py-20">
        <div className="image-container md:w-1/6 w-full p-4 h-[300px]">
          <img src="https://i.pinimg.com/736x/25/ca/61/25ca6107e4ded17b8fe6c7533c4dd475.jpg" alt="My Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
        <div className="3d-container md:w-1/2 w-full h-96 p-4">
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
            <OrbitControls enableZoom={false} />
            <Experience />
          </Canvas>
        </div>
      </section>
    </div>
  );
};

export default App;
