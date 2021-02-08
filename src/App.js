import "./App.css";
import {
  Header,
  Banner,
  Feature,
  Feature_2,
  Feature_3,
  Feature_4,
  Footer,
} from "./components";
function App() {
  return (
    <div className='App'>
      {/* Header */}
      <Header />
      <Banner />
      {/* Banner with Image */}
      {/* Feature 1  */}
      <Feature />
      <Feature_2 />
      <Feature_3 />
      <Feature_4 />
      <Footer />
      {/* Feature 2 */}
      {/* Feature 3 */}
      {/* Footer */}
    </div>
  );
}

export default App;
