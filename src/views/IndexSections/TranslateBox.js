import { useEffect } from "react";
import { Input, Button } from "reactstrap";
const TranslateBox = () => {
  useEffect(() => {}, []);
  const submit = () => {
    const e = document.getElementById("translatebox");
    const x = e.value;
    console.log(x);
  };
  return (
    <>
      <Button onClick={submit} color="primary" type="button">
        Translate
      </Button>
      <Input
        id="translatebox"
        placeholder="Write a large text here ..."
        rows="3"
        type="textarea"
      />
      <div></div>
    </>
  );
};
export default TranslateBox;
