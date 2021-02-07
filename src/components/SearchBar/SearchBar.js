import { SearchContainer } from "./SearchBar.element";
import Form from "react-bootstrap/Form";

const SearchBar = () => {
  return (
    <SearchContainer>
      <Form.Group>
        <Form.Control size='lg' type='text' placeholder='Input Your Search' />
      </Form.Group>
    </SearchContainer>
  );
};

export default SearchBar;
