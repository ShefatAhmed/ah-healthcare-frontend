"use client";
import { getUserInfo } from "@/services/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const userInfo = getUserInfo();
  console.log(userInfo);
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          A
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>
        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        {userInfo?.userId ? (
          <Button color="error">Logout</Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
