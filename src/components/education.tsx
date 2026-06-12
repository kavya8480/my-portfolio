import { Box, Typography, Paper } from "@mui/material";

export default function Education() {
  const educationData = [
    {
      year: "2023 - 2027",
      title: "B.Tech in Computer Science & Engineering",
      institute: "Hi-Tech Institute of Technology",
      description:
        "Currently pursuing my Bachelor's degree with a focus on Full Stack Development, Software Engineering, Database Systems, and Data Structures & Algorithms.",
    },
    {
      year: "2020 - 2022",
      title: "Higher Secondary Education (Science)",
      institute: "Fakir Mohan Higher Secondary School",
      description:
        "Completed higher secondary education with a Science background, strengthening my analytical and problem-solving abilities.",
    },
    {
      year: "2020",
      title: "Secondary Education",
      institute: "Pragyan Bharati Shikshya Kendra",
      description:
        "Built a strong academic foundation and developed an early interest in technology and logical thinking.",
    },
  ];

  return (
    <Box
      id="education"
      sx={{
        minHeight: "100vh",
        bgcolor: "#0b0f14",
        color: "#fff",
        px: { xs: 3, md: 10 },
        py: 12,
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 700,
          mb: 1,
          color:'skyblue'
        }}
      >
        Education Journey
      </Typography>

      <Typography
        sx={{
          color: "rgba(255,255,255,0.65)",
          mb: 6,
          maxWidth: "650px",
        }}
      >
        Building a strong foundation in technology, problem solving and
        software engineering through continuous learning and academic excellence.
      </Typography>

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          maxWidth: "1000px",
        }}
      >
        {educationData.map((item) => (
          <Paper
            key={item.title}
            sx={{
              p: 4,
              bgcolor: "#1b2431",
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              gap: 4,
              alignItems: "flex-start",
              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-6px)",
                borderColor: "#64ffda",
                boxShadow: "0 15px 40px rgba(100,255,218,0.12)",
              },
            }}
          >
            {/* Year Badge */}
            <Box
              sx={{
                minWidth: "130px",
                bgcolor: "rgba(100,255,218,0.12)",
                color: "#64ffda",
                borderRadius: "12px",
                px: 2,
                py: 1,
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              {item.year}
            </Box>

            {/* Content */}
            <Box>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "#64ffda",
                  fontWeight: 500,
                }}
              >
                {item.institute}
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.8,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}