/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
const Heading = tw.h1`text-blue-500 text-2xl p-2`;
const Container = tw.div`max-w-4xl mx-auto p-5 mt-5`;
function App() {
  return (
    <Container>
      <Heading>My custom heading</Heading>
    </Container>
  );
}
export default App;

