import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
  Grid,
} from "@mui/material";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Age: ${age}, File: ${file?.name || "No File"}`);
    // Reset the form values after submission
    setName("");
    setAge("");
    setFile(null);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 5,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", color: "#1976d2" }}
      >
        Healthcare Dashboard
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        {/* Name Field */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 3 }}
        />

        {/* Age Dropdown */}
        <TextField
          select
          label="Age"
          variant="outlined"
          fullWidth
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
          sx={{ mb: 3 }}
        >
          <MenuItem value="">Select Age</MenuItem>
          {[...Array(43)].map((_, i) => (
            <MenuItem key={i} value={18 + i}>
              {18 + i}
            </MenuItem>
          ))}
        </TextField>

        {/* File Upload */}
        <TextField
          type="file"
          fullWidth
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setFile(e.target.files[0])}
          sx={{ mb: 3 }}
        />

        {/* Submit Button */}
        <Grid container justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              width: "100%",
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
          >
            Submit
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};

export default Form;
