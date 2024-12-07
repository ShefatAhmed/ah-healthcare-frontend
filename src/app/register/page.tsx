"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import AHForm from "@/components/Forms/AHForm";
import AHInput from "@/components/Forms/AHInput";

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container
      sx={{
        padding: "50px",
      }}
    >
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
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <AHForm onSubmit={handleRegister}>
              <Grid container spacing={2} my={2}>
                <Grid item md={12}>
                  <AHInput
                    label="Name"
                    fullWidth={true}
                    name="patient.name"
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <AHInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    required={true}
                    name="patient.email"
                  />
                </Grid>
                <Grid item md={6}>
                  <AHInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    required={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <AHInput
                    label="Contact Number"
                    type="tel"
                    fullWidth={true}
                    required={true}
                    name="patient.contactNumber"
                  />
                </Grid>
                <Grid item md={6}>
                  <AHInput
                    label="Address"
                    type="text"
                    fullWidth={true}
                    required={true}
                    name="patient.address"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">login</Link>
              </Typography>
            </AHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
