/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
const Heading = tw.h1`text-blue-500 text-2xl p-2`;
const MaybeBigHeading = styled(Heading)(({ big }) => [
  big && tw`text-4xl`
]);
const Container = tw.div`max-w-4xl mx-auto p-5 mt-5`;
function App() {
  return (
    <Container>
      <MaybeBigHeading>My custom heading</MaybeBigHeading>
      <MaybeBigHeading big>My big heading</MaybeBigHeading>{" "}
    </Container>
  );
}
export default App;
