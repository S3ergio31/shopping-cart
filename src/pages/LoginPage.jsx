import MainLayout from "layouts/MainLayout";
import { useContext, useEffect, useState } from "react";
import { Grid, FormGroup, Box, styled, Typography, Divider } from "@mui/material";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Error from "components/Error";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCrud from "hooks/useCrud";
import { UserContext } from "context/UserProvider";
import { CartContext } from "context/CartProvider";

const HiddenGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: "none",
  },
  [theme.breakpoints.up('md')]: {
    display: "initial",
  },
}));

const LoginPage = () => {
  const { login, loading, user, error } = useContext(UserContext);
  const [ selectedProduct, setSelectedProduct ] = useState();

  const { find } = useCrud('products');

  const { toggle } = useContext(CartContext);
  
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const product = searchParams.get('product');

  const [data, setData] = useState({
    email: 'user@test.com',
    password: 'password'
  });

  const loginBtnLabel = loading ? "Signing in..." : "Login";

  useEffect(() => {
    product && find(product).then((data) => {
      setSelectedProduct(data);
    });
  }, []);

  useEffect(() => {
    if(user){
        selectedProduct && toggle(selectedProduct);
        navigate('/');
    }
  }, [user, selectedProduct]);

  const handleChangeData = ({target}) => setData(data => ({
    ...data,
    [target.name]: target.value
  }));

  return (
    <MainLayout>
      <Grid container justifyContent="center" alignItems="center">
        <HiddenGrid item xs={12} md={6}>
          <Box sx={{
            backgroundColor: 'white',
            borderRadius: "50%",
            display: "fex",
            justifyContent: "center",
            alignItems: "center",
            width: "400px",
            mx: "auto"
          }}>
            <ShoppingCartIcon 
              color="primary" 
              sx={{
                m: 10,
                fontSize: 250,
              }}
            />
          </Box>
        </HiddenGrid>
        <Grid item xs={12} md={6} >
          <Box sx={{ 
            backgroundColor: 'white',
            p: 2,
            borderRadius: "1%"
           }}>
            <Typography variant="h3" component="h1" color="primary">
              Log in
            </Typography>
            <Divider sx={{ mt:1, mb: 3 }}/>
            <Error error={error} />
            <FormGroup>
                <TextField 
                    onChange={handleChangeData} 
                    name="email" 
                    value={data.email} 
                    label="Email" 
                    type="email"
                    sx={{ pb: 2 , mt: 2}}
                />
                <TextField 
                    onChange={handleChangeData} 
                    name="password" 
                    value={data.password}
                    label="Password" 
                    type="password"
                    sx={{ pb: 2 }}
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
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default LoginPage;
