import { Box, Typography, TextField, Button, Paper } from "@mui/material";


export default function Contact() {

  return (
    <Box
      id="contact"
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
      <Paper
        sx={{
          p: 6,
          width: "100%",
          maxWidth: "650px",
          bgcolor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 5,
          backdropFilter: "blur(12px)",
        }}
      >
        <Typography sx={{ fontSize: "2.5rem", fontWeight: 800 }}>
          Let’s <span style={{ color: "#64ffda" }}>Connect</span>
        </Typography>

        <Typography sx={{ mt: 1, color: "rgba(255,255,255,0.6)" }}>
          Got an idea or project? Let’s build something amazing.
        </Typography>

        <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            placeholder="Your Name"
            InputProps={{ style: { color: "#fff" } }}
          />

          <TextField
            placeholder="Your Email"
            InputProps={{ style: { color: "#fff" } }}
          />

          <TextField
            placeholder="Your Message"
            multiline
            rows={4}
            InputProps={{ style: { color: "#fff" } }}
          />

         <Button
  component="a"
  href="mailto:yourmail@gmail.com"
  sx={{
    bgcolor: "#64ffda",
    color: "#000",
    borderRadius: "30px",
    py: 1.2,
    fontWeight: 700,
  }}
>
  Send Message
  
</Button>
 
        </Box>
      </Paper>
    </Box>
  );
}