import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography component={Link} href="/consultation" color="#fff">
            Consultation
          </Typography>
          <Typography component={Link} href="/health-plans" color="#fff">
            Health Plans
          </Typography>
          <Typography component={Link} href="/medicine" color="#fff">
            Medicine
          </Typography>
          <Typography component={Link} href="/diagnostics" color="#fff">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/ngos" color="#fff">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={4} py={2}>
          <Image src="https://i.ibb.co.com/6F9VLkm/facebook.png" width={30} height={30} alt="facebookIcon" />
          <Image src="https://i.ibb.co.com/6F9VLkm/facebook.png" width={30} height={30} alt="facebookIcon" />
          <Image src="https://i.ibb.co.com/6F9VLkm/facebook.png" width={30} height={30} alt="facebookIcon" />
          <Image src="https://i.ibb.co.com/6F9VLkm/facebook.png" width={30} height={30} alt="facebookIcon" />
        </Stack>
        <Box sx={{border: "1px dashed lightgray"}}></Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          py={2}
        >
          <Typography component="p" color="white">
            &copy; 2024 AH HealthCare. All Rights Reserved
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            A
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
