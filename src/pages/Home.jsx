import Videos from "../components/Videos";

export default function Home() {
  return (
    <>
      <Videos sectionName="Arrays" />
      <Videos sectionName="Sort" />
      <Videos sectionName="String" />
      <Videos sectionName="Recursion" />
      <Videos
        sectionName="BIT Manipulation"
       style={{
          display: "flex",
          justifyContent: "flex-start",
          justifyItems: "flex-start"
        }} 
      />
      <Videos sectionName="Linked List" />
    </>
  );
}
