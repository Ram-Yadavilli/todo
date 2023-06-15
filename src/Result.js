import { AiFillDelete } from "react-icons/ai";
import "./Result.css";

const Result = (props) => {
  const { detail, cheBtn, delBtn } = props;
  const { id, name, isChecked } = detail;
  const o = () => {
    delBtn(id);
  };
  const au = () => {
    cheBtn(id);
  };

  return (
    <li>
      <input type="checkbox" checked={isChecked} onChange={au} />
      <h1>{name}</h1>
      <AiFillDelete
        onClick={o}
        style={{ height: "30px", width: "30px", marginTop: "25px" }}
      />
    </li>
  );
};

export default Result;
