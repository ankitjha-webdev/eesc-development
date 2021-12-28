import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <Container  fluid style={{padding:0, margin:0}}>
    <div className="App">
      {/* <Header/> */}
      <Footer/>
    </div>
    </Container>
  );
}
export default App;