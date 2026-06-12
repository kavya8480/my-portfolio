import { Box, Typography, Chip, Paper } from "@mui/material";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        bgcolor: "#0b0f14",
        color: "#fff",
        px: { xs: 3, md: 10 },
        py: 12,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", width: "100%" }}>
        
        {/* Heading */}
        <Typography
          sx={{
            fontSize: { xs: "3rem", md: "4.5rem" },
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          About <span style={{ color: "#64ffda" }}>Me</span>
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "rgba(255,255,255,0.7)",
            fontSize: "1.1rem",
            maxWidth: "700px",
          }}
        >
          Crafting modern web experiences with code and creativity.
        </Typography>

        {/* Main Card */}
        <Paper
          sx={{
            mt: 6,
            p: { xs: 3, md: 5 },
            bgcolor: "#161d29",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 5,

            "&:hover": {
              boxShadow: "0 20px 50px rgba(100,255,218,0.08)",
            },
          }}
        >
          {/* Left Side */}
          <Box flex={2}>
            <Chip
              label="Full Stack Developer"
              sx={{
                bgcolor: "rgba(100,255,218,0.1)",
                color: "#64ffda",
                mb: 3,
                fontWeight: 600,
              }}
            />

            <Typography
              sx={{
                fontSize: "1.1rem",
                lineHeight: 2,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              I'm <strong>Tapaswini Das</strong>, a Computer Science Engineering
              student and aspiring Full Stack Developer passionate about building
              modern, scalable and user-focused web applications.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                lineHeight: 2,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              My focus is on creating responsive frontend experiences using
              React and developing robust backend systems with Node.js and Java.
              I enjoy transforming ideas into real-world digital products while
              continuously improving my software engineering and problem-solving
              skills.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: "#64ffda",
                fontWeight: 500,
              }}
            >
              Currently focused on Full Stack Development, GATE CSE preparation
              and building impactful projects.
            </Typography>
          </Box>

          {/* Right Side Stats */}
          <Box
            flex={1}
            sx={{
              display: "",
              gap: 2,
            }}
          >
            <Paper sx={statCard}>
              <Typography sx={numberStyle}>10+</Typography>
              <Typography sx={labelStyle}>
                Projects Built
              </Typography>
            </Paper>

            <Paper sx={statCard}>
              <Typography sx={numberStyle}>4th</Typography>
              <Typography sx={labelStyle}>
                Year B.Tech Student
              </Typography>
            </Paper>

            <Paper sx={statCard}>
              <Typography sx={numberStyle}>MERN</Typography>
              <Typography sx={labelStyle}>
                Full Stack Development
              </Typography>
            </Paper>

            <Paper sx={statCard}>
              <Typography sx={numberStyle}>2027</Typography>
              <Typography sx={labelStyle}>
                Graduation Year
              </Typography>
            </Paper>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

/* Styles */

const statCard = {
  p: 3,
  bgcolor: "#0f1724",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.06)",
  transition: "0.3s",

  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: "#64ffda",
  },
};

const numberStyle = {
  color: "#64ffda",
  fontSize: "2rem",
  fontWeight: 800,
};

const labelStyle = {
  color: "rgba(255,255,255,0.7)",
};