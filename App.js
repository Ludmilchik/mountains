import Header from './components/header/header';
import About from './components/home/home';
import Frame from './components/frame/frame';
import Container from './components/container/container'; 
import { future } from './data';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
    <Header />
    <About />
    <Frame />
    <Container data={future} />
    <Footer />
    </>
  );
}

export default App;
