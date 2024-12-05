import Button from "../../UI/Button/Button";

const ButtonCom = ({ text, onclick, color }) => {
  return (
    <div>
      <Button color={color} onClick={onclick}>
        {text}
      </Button>
    </div>
  );
};

export default ButtonCom;
