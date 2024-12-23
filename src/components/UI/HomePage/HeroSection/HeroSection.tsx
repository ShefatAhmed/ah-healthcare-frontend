import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import arrow from "@/assets/svgs/arrow.svg";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src="https://i.ibb.co.com/YfQxZJY/grid.png" width={100} height={100} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          color="primary.main"
          variant="h3"
          component="h1"
          fontWeight={600}
        >
          Preventive Care
        </Typography>
        <Typography
          sx={{
            my: 4,
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, quaerat
          quibusdam, cupiditate sunt modi similique quia provident eveniet unde
          ex illo a id sed qui.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make Appointment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box sx={{ position: "absolute", left: "200px", top: "-30px" }}>
          <Image src="https://i.ibb.co.com/743hTnp/arrow.png" width={100} height={100} alt="arrow" />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box mt={4}>
            <Image
              src="https://i.ibb.co.com/TtJH2Fy/doctor1.png"
              width={240}
              height={380}
              alt="doctor1"
            />
          </Box>
          <Box>
            <Image
              src="https://i.ibb.co.com/7C4ZVht/doctor2.png"
              width={240}
              height={350}
              alt="doctor2"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "150px",
          }}
        >
          <Image
            src="https://i.ibb.co.com/X4JYTj3/doctor3.png"
            width={240}
            height={240}
            alt="doctor3"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: 0,
            zIndex: -1,
          }}
        >
          <Image
            src="https://i.ibb.co.com/WggJBK3/Stetoscope.png"
            width={180}
            height={180}
            alt="stethoscope"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
