import { Box, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#070a10",
        color: "#fff",
        px: 3,
      }}
    >
      <Box sx={{ textAlign: "center", maxWidth: "850px" }}>

        {/* Glow Line */}
        <Box
          sx={{
            width: "100px",
            height: "2px",
            bgcolor: "#64ffda",
            margin: "0 auto",
            mb: 2,
            boxShadow: "0 0 10px #64ffda",
          }}
        />

        {/* Role */}
        <Typography
          sx={{
            letterSpacing: "5px",
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          FULL STACK DEVELOPER
        </Typography>

        {/* Name */}
        <Typography
          sx={{
            fontSize: { xs: "2.8rem", md: "5rem" },
            fontWeight: 700,
            lineHeight: 1.1,
            mt: 2,
          }}
        >
          Tapaswini <span style={{ color: "#64ffda" }}>Das</span>
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            mt: 3,
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8,
          }}
        >
          I design and build modern, scalable web applications using React, Node.js & Java.
          Focused on clean UI, performance and real-world problem solving.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            href="#projects"
            sx={{
              bgcolor: "#fff",
              color: "#000",
              px: 4,
              py: 1.2,
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 700,
              boxShadow: "0 0 20px rgba(100,255,218,0.3)",
              
              "&:hover": { bgcolor: "#52e0c4" },
            }}
          >
            Explore Work
          </Button>

          <Button
            href="mailto:yourmail@gmail.com"
            sx={{
              bgcolor:"#fff",
              color: "#000",
              border: "1px solid rgba(255,255,255,0.2)",
              px: 4,
              py: 1.2,
              borderRadius: "30px",
              textTransform: "none",
              fontWeight:700,
              boxShadow: "0 0 20px rgba(100,255,218,0.3)",
                 "&:hover": { bgcolor: "#52e0c4" },
              
            }}
          >
            Hire Me
          </Button>
        </Box>
      </Box>
    </Box>
  );
}