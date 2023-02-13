import MainLayout from "layouts/MainLayout";
import { useEffect, useState } from "react";
import useAuth from "hooks/useAuth";
import { Grid, Input, FormGroup, Button } from "@mui/material";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Error from "components/Error";

const LoginPage = () => {
  const { login, loading, user, error } = useAuth();
  const [data, setData] = useState({
    email: 'user@test.com',
    password: 'password'
  });
  const loginBtnLabel = loading ? "Signing in..." : "Login";

  const handleChangeData = ({target}) => setData(data => ({
    ...data,
    [target.name]: target.value
  }));

  return (
    <MainLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          { JSON.stringify(user) }
        </Grid>
        <Grid item xs={12} md={6}>
            <Error error={error} />
            <FormGroup>
                <TextField 
                    onChange={handleChangeData} 
                    name="email" 
                    value={data.email} 
                    label="Email" 
                    type="email"
                />
                <TextField 
                    onChange={handleChangeData} 
                    name="password" 
                    value={data.password}
                    label="Password" 
                    type="password"
                />
                <LoadingButton
                    disabled={!data.email || !data.password}
                    loading={loading} 
                    variant="contained" 
                    onClick={() => login(data)}
                >
                    { loginBtnLabel }
                </LoadingButton>
            </FormGroup>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default LoginPage;
