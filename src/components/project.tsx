import { useEffect, useRef } from "react";
import { Box, Paper, Typography, Chip, Button } from "@mui/material";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Task Manager App",
      desc: "Full stack task management app with CRUD, filters and authentication.",
      tech: ["React", "Node.js", "MySQL"],
    },
    {
      title: "Toast System",
      desc: "Reusable toast notification system with success/error messages.",
      tech: ["HTML", "CSS", "JS"],
    },
    {
      title: "Portfolio Website",
      desc: "Modern responsive portfolio with smooth UI.",
      tech: ["React", "MUI"],
    },
    {
      title: "Email Validator",
      desc: "Real-time email & password validation system.",
      tech: ["HTML", "JS"],
    },
    {
      title: "Bookmark Manager",
      desc: "Local storage based bookmark saving app.",
      tech: ["HTML", "JS"],
    },
    {
      title: "Notes App",
      desc: "Stack style notes management system.",
      tech: ["HTML", "JS"],
    },
    {
      title: "User Card UI",
      desc: "Responsive user profile card design.",
      tech: ["HTML", "CSS"],
    },
  ];

  // AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: 320,
          behavior: "smooth",
        });

        // loop reset
        if (
          containerRef.current.scrollLeft + containerRef.current.clientWidth >=
          containerRef.current.scrollWidth
        ) {
          containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        bgcolor: "#0b0f14",
        color: "#fff",
        px: { xs: 3, md: 10 },
        py: 12,
      }}
    >
      {/* Heading */}
      <Typography sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: 800 }}>
        My <span style={{ color: "#64ffda" }}>Projects</span>
      </Typography>

      <Typography sx={{ mt: 2, color: "rgba(255,255,255,0.7)" }}>
        Sliding Project Showcase
      </Typography>

      {/* CAROUSEL ROW */}
      <Box
        ref={containerRef}
        sx={{
          mt: 6,
          display: "flex",
          gap: 3,
          overflowX: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {projects.map((project, i) => (
          <Paper
            key={i}
            sx={{
              minWidth: "280px",
              height: "220px",
              p: 3,
              bgcolor: "#161d29",
              borderRadius: 3,
              border: "1px solid rgba(255,255,255,0.08)",
              flexShrink: 0,
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                borderColor: "#64ffda",
              },
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
              {project.title}
            </Typography>

            <Typography
              sx={{ mt: 1, fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}
            >
              {project.desc}
            </Typography>

            <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
              {project.tech.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  size="small"
                  sx={{
                    bgcolor: "rgba(100,255,218,0.1)",
                    color: "#64ffda",
                    fontSize: "0.7rem",
                  }}
                />
              ))}
            </Box>

            <Button
              size="small"
              sx={{
                mt: 2,
                color: "#64ffda",
                textTransform: "none",
              }}
              variant="outlined"
               href="https://github.com/kavya8480/JS_Mini_Projects"
  target="_blank"
  rel="noopener noreferrer"
            >
              Code
            </Button>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}