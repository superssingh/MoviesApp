import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: 5,
    border: 1,
    borderRadius: 10,
    color: "white",
    size: "small",
  },

  helperText: {
    background: "rgba(253, 250, 250,0.8)", //"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 5,
    margin: 0,
    input: {
      color: "white",
    },
  },
}));

const Input = ({ ...rest }) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <TextField
          size="small"
          className={classes.input}
          variant="outlined"
          type="text"
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;

// for material ui TextField
// import React, { forwardRef } from "react";
// import TextField from "@material-ui/core/TextField";

// export const Input = forwardRef((props, ref) => {
//   return (
//     <TextField
//       variant="outlined"
//       margin="normal"
//       inputRef={ref}
//       fullWidth
//       {...props}
//     />
//   );
// });
// export default Input;
