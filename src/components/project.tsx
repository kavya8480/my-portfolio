import { Box, Paper, Typography, Chip, Button } from "@mui/material";

export default function Projects() {
  const projects = [
    { title: "Task Manager App", desc: "Full stack task management app with CRUD, filters and authentication.", tech: ["React", "Node.js", "MySQL"] },
    { title: "Toast System", desc: "Reusable toast notification system with success/error messages.", tech: ["HTML", "CSS", "JS"] },
    { title: "Portfolio Website", desc: "Modern responsive portfolio with smooth UI.", tech: ["React", "MUI"] },
    { title: "Email Validator", desc: "Real-time email & password validation system.", tech: ["HTML", "JS"] },
    { title: "Bookmark Manager", desc: "Local storage based bookmark saving app.", tech: ["HTML", "JS"] },
    { title: "Notes App", desc: "Stack style notes management system.", tech: ["HTML", "JS"] },
    { title: "User Card UI", desc: "Responsive user profile card design.", tech: ["HTML", "CSS"] },
  ];

  const loopProjects = [...projects, ...projects];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0b0f14",
        color: "#fff",
        px: { xs: 3, md: 10 },
        py: 12,
        overflow: "hidden",
      }}
    >
      <Typography sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: 800 }}>
        My <span style={{ color: "#64ffda" }}>Projects</span>
      </Typography>

      <Typography sx={{ mt: 2, color: "rgba(255,255,255,0.7)" }}>
        Featured Projects & Creations
      </Typography>

      {/* CAROUSEL WRAPPER */}
      <Box
  sx={{
    mt: 6,
    overflow: "hidden",
    position: "relative",
  }}
>
  {/* TRACK */}
  <Box
    sx={{
      display: "flex",
      width: "max-content",
      gap: 3,
      animation: "scroll 20s linear infinite",
      "&:hover": {
        animationPlayState: "paused",
      },

      "@keyframes scroll": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-1000px)" },
      },
    }}
  >
    {loopProjects.map((project, i) => (
      <Paper
        key={i}
        sx={{
          width: "320px",
          height: "270px",
          p: 3,
          bgcolor: "#161d29",
          borderRadius: 4,
          border: "1px solid rgba(255,255,255,0.08)",
          flexShrink: 0,

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",

          transition: "all 0.35s ease",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",

          "&:hover": {
            transform: "translateY(-10px) scale(1.03)",
            borderColor: "#64ffda",
            boxShadow: "0 20px 50px rgba(100,255,218,0.15)",
          },
        }}
      >
        <Typography sx={{ fontWeight: 800, fontSize: "1.1rem" }}>
          {project.title}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.7)",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.desc}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {project.tech.map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              sx={{
                bgcolor: "rgba(100,255,218,0.08)",
                color: "#64ffda",
                fontSize: "0.7rem",
                border: "1px solid rgba(100,255,218,0.2)",
              }}
            />
          ))}
        </Box>

        <Button
          size="small"
          variant="outlined"
          href="https://github.com/kavya8480/JS_Mini_Projects"
          target="_blank"
          sx={{
            color: "#64ffda",
            borderColor: "#64ffda",
            textTransform: "none",
            borderRadius: "20px",
          }}
        >
          View Code
        </Button>
      </Paper>
    ))}
  </Box>
</Box>
    </Box>
  );
}