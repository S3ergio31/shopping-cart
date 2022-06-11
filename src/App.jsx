import { Container } from '@mui/material';
import Categories from './Categories';
import NavBar from './NavBar';
import PopularProducts from './PopularProducts';
import SearchBar from './SearchBar';

const App = () =>  (
  <>
    <NavBar />
    <Container style={{ paddingTop: '1rem' }}>
      <SearchBar style={{ width: '100%'}}/>
      <Categories />
      <PopularProducts />
    </Container>
  </>
);

export default App;

