import { Box, Button, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { firebaseInstance } from "_firebase";

interface LoginForm {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const { handleSubmit, register, errors } = useForm<LoginForm>();

  const [networkState, setNetworkState] = useState(0);
  const [createAccount, setCreateAccount] = useState(false);

  function onSubmit(values: LoginForm) {
    setNetworkState(1);
    firebaseInstance
      .auth()
      [
        createAccount
          ? "createUserWithEmailAndPassword"
          : "signInWithEmailAndPassword"
      ](values.email, values.password)
      .then(() => {
        setNetworkState(2);
      })
      .catch(() => {
        setNetworkState(3);
      });
  }

  return (
    <Box
      height={window.innerHeight}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="80%" maxWidth={400}>
        <Paper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" flexDirection="column" p={2}>
              <TextField
                variant="outlined"
                name="email"
                label="Email"
                margin="dense"
                inputRef={register({
                  required: "Email is required",
                })}
                error={networkState === 3 || !!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                variant="outlined"
                name="password"
                label="Password"
                margin="dense"
                type={createAccount ? undefined : "password"}
                inputRef={register({
                  required: "Password is required",
                })}
                error={networkState === 3 || !!errors.password}
                helperText={errors.password?.message}
              />

              <Box height={16} />

              <Button
                variant="contained"
                disableElevation
                type="submit"
                color={networkState === 2 ? "primary" : undefined}
              >
                {createAccount
                  ? networkState === 1
                    ? "CREATING ACCOUNT..."
                    : networkState === 2
                    ? "SUCCESSFUL!"
                    : "CREATE ACCOUNT"
                  : networkState === 1
                  ? "LOGGING IN..."
                  : networkState === 2
                  ? "SUCCESSFUL!"
                  : "LOGIN"}
              </Button>
            </Box>
          </form>
        </Paper>

        <Box textAlign="center" mt={1}>
          <Button size="small" onClick={() => setCreateAccount(!createAccount)}>
            {createAccount ? "login" : "sign up"} here
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
