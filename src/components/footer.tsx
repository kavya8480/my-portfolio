import { Box, Typography, Stack, IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#070a10",
        color: "#fff",
        py: 6,
        px: 3,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Main container */}
      <Box
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          textAlign: "center",
        }}
      >

        {/* Name */}
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: 800,
            letterSpacing: "1px",
          }}
        >
          Tapaswini Das
        </Typography>

        {/* Role */}
        <Typography
          sx={{
            mt: 1,
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.95rem",
          }}
        >
          Full Stack Developer • React • Node.js • Java
        </Typography>

        {/* Divider glow line */}
        <Box
          sx={{
            width: "120px",
            height: "2px",
            bgcolor: "#64ffda",
            mx: "auto",
            mt: 3,
            boxShadow: "0 0 15px #64ffda",
          }}
        />

        {/* Links */}
        <Stack
          direction="row"
          justifyContent="center"
          spacing={4}
          mt={4}
        >
          <Link href="#home" underline="none" sx={{ color: "#fff", opacity: 0.7, "&:hover": { color: "#64ffda" } }}>
            Home
          </Link>

          <Link href="#projects" underline="none" sx={{ color: "#fff", opacity: 0.7, "&:hover": { color: "#64ffda" } }}>
            Projects
          </Link>

          <Link href="#contact" underline="none" sx={{ color: "#fff", opacity: 0.7, "&:hover": { color: "#64ffda" } }}>
            Contact
          </Link>
        </Stack>

        {/* Social icons */}
        <Stack direction="row" justifyContent="center" spacing={2} mt={4}>
          <IconButton
            href="https://github.com/kavya8480"
            target="_blank"
            sx={{
              color: "#64ffda",
              border: "1px solid rgba(100,255,218,0.3)",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 0 15px rgba(100,255,218,0.3)",
              },
            }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            href=""
            target="_blank"
            sx={{
              color: "#64ffda",
              border: "1px solid rgba(100,255,218,0.3)",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 0 15px rgba(100,255,218,0.3)",
              },
            }}
          >
            < AccountCircleIcon/>
          </IconButton>
        </Stack>

        {/* Copyright */}
        <Typography
          sx={{
            mt: 5,
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          © {new Date().getFullYear()} Built with React & Material UI
        </Typography>

      </Box>
    </Box>
  );
}