import Typewriter from "typewriter-effect";

export default function App() {
  return (
    <div className="w-screnn h-screen flex justify-center items-center bg-black text-white ">
      <h1 className="font-extrabold text-[50px]">
        <Typewriter
          options={{
            strings: ["Your Loyal Friendly Tech Expert is almost here..."],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
}
