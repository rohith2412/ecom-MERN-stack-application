import Navbar from "../components/Navbar";
import image1 from "../components/assets/Remains/all-1.jpg";
import image2 from "../components/assets/Remains/all-2.jpg";
import image3 from "../components/assets/Remains/all-3.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="border-t-2 border-b-2 border-gray-300 py-4">
        <li className="flex gap-32 justify-center text-xl">
          <ul className="font-Ga_Maamli">Velvet Threads</ul>
          <ul className="font-Spicy_Rice">Urban Loom</ul>
          <ul className="font-Pacifico">EcoStitch</ul>
          <ul className="font-Sansita_Swashed">ModeCraft</ul>
        </li>
      </div>

      <div className="flex justify-center">
        <div className=" m-20 mr-0">
          <img className="w-[400px] h-[700px] " src={image1}></img>
          <p className="font-space_mono text-amber-400 text-5xl hover:font-bold">VIEW MORE..</p>
        </div>
        <div className="flex flex-col m-5 space-y-4 gap-0">
          <img className="w-70 h-120 my-0 mr-0 " src={image2}></img>
          <img className="w-100 h-auto mt-0 object-cover" src={image3}></img>
        </div>
      </div>

    </div>
  );
};

export default Home;
