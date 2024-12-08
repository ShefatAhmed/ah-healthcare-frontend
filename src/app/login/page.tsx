"use client";
import assets from "@/assets";
import AHForm from "@/components/Forms/AHForm";
import AHInput from "@/components/Forms/AHInput";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login AH HealthCare
              </Typography>
            </Box>
            <Box>
              <AHForm
                onSubmit={handleLogin}
                resolver={zodResolver(validationSchema)}
                defaultValues={{
                  email: "",
                  password: "",
                }}
              >
                <Grid container spacing={2} my={2}>
                  <Grid item md={6}>
                    <AHInput
                      name="email"
                      label="Email"
                      type="email"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <AHInput
                      name="password"
                      label="Password"
                      type="password"
                      fullWidth={true}
                    />
                  </Grid>
                </Grid>
                <Typography
                  mb={1}
                  textAlign="end"
                  component="p"
                  fontWeight={300}
                >
                  Forgot Password?
                </Typography>
                <Button
                  sx={{
                    margin: "10px 0px",
                  }}
                  fullWidth={true}
                  type="submit"
                >
                  Login
                </Button>
                <Typography component="p" fontWeight={300}>
                  Don&apos;t have an account?{" "}
                  <Link href="/register">Create an account</Link>
                </Typography>
              </AHForm>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
