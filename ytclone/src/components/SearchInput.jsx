import { useEffect, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import youtube from "../api/youtube";

const SearchInput = ({ onSearch }) => {
  // console.log("Value of props", props);
  const [searchTerm, setSearchTerm] = useState("srk songs");
  const [submitOrNot, setSubmitOrNot] = useState(false);

  const submitHandler = () => {
    // console.log("searchItem", searchTerm);
    onSearch(searchTerm);
    // setSubmitOrNot(!submitOrNot);
  };

  return (
    <div>
      <InputGroup className="mt-3 mb-3">
        <Form.Control
          placeholder="Search.."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <Button variant="primary" type="button" onClick={submitHandler}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchInput;

