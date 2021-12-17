import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    zIndex: 1000,
    marginTop: 5,
    border: 1,
    borderRadius: 10,
    color: "white",
    size: "small",
    overflow: "hidden",
  },
}));

const ButtonRender = ({ ...rest }) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        size="small"
        className={classes.button}
        {...rest}
      >
        Login
      </Button>
    </div>
  );
};

export default ButtonRender;
