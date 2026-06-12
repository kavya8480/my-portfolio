import { Box, Typography, Paper, Stack, Chip } from "@mui/material";

const skills = [
  {
    title: "Frontend Development",
    items: ["React", "JavaScript", "HTML", "CSS", "MUI", "Tailwind"],
    color: "#64ffda",
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs"],
    color: "#00bcd4",
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL"],
    color: "#a78bfa",
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Postman"],
    color: "#f59e0b",
  },
];

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        bgcolor: "#0b0f14",
        color: "white",
        px: { xs: 3, md: 10 },
        py: 12,
      }}
    >
      {/* HEADER */}
      <Typography sx={{ fontSize: "2.3rem", fontWeight: 900 }}>
        My <span style={{ color: "#64ffda" }}>Skills</span>
      </Typography>

      <Typography sx={{ opacity: 0.6, mb: 6 }}>
        I build modern, scalable and user-focused web applications using full-stack technologies
      </Typography>

      {/* GRID LAYOUT */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
        }}
      >
        {skills.map((skill) => (
          <Paper
            key={skill.title}
            sx={{
              p: 4,
              borderRadius: 4,
              bgcolor: "#111827",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "0.3s",
              position: "relative",
              overflow: "hidden",

              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: `0 10px 30px ${skill.color}20`,
              },

              // glow effect
              "&::before": {
                content: '""',
                position: "absolute",
                top: -60,
                right: -60,
                width: 140,
                height: 140,
                background: skill.color,
                filter: "blur(90px)",
                opacity: 0.12,
              },
            }}
          >
            {/* LEFT LINE */}
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "4px",
                height: "100%",
                bgcolor: skill.color,
              }}
            />

            {/* TITLE */}
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.1rem",
                color: skill.color,
              }}
            >
              {skill.title}
            </Typography>

            {/* SKILL CHIPS */}
            <Stack
              direction="row"
              flexWrap="wrap"
              gap={1}
              mt={2}
            >
              {skill.items.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.05)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.1)",
                    "&:hover": {
                      borderColor: skill.color,
                      color: skill.color,
                    },
                  }}
                />
              ))}
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

