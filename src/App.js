/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
const Heading = tw.h1`text-blue-500 text-2xl p-2`;
const BigHeading = tw(Heading)`text-4xl`;
const Container = tw.div`max-w-4xl mx-auto p-5 mt-5`;
function App() {
  return (
    <Container>
      <BigHeading>My big heading</BigHeading>
    </Container>
  );
}
export default App;
