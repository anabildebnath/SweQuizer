// "use client";
// // Import TypewriterEffect component from correct path
// import { TypewriterEffect } from "../components/ui/typewriter-effect";


// Define an array of words for the typewriter effect
// const words = [
//   { text: "Currently on beta mode," },
//   { text: "still working on this feature," },
//   { text: "will be updated soon." }
// ];

export default function Beta() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        overflow:"hidden"
      }}
    >
      {/* Pass the array of words as props to the TypewriterEffect component */}
      {/* <TypewriterEffect words={words} /> */}
      <h1 style={{ color: "black" }}>
        Currently on beta mode, still working on this feature, soon will be
        updated.
      </h1>
    </div>
  );
}
