import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";

// Import Images
import im1 from "src/assets/images/im/im1.png";
import im2 from "src/assets/images/im/im2.png";
import im3 from "src/assets/images/im/im3.png";
import im4 from "src/assets/images/im/im4.png";

// Custom components
const AboutApplication = () => {
  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 4 }}>
      <Typography
        variant="h1"
        fontWeight="900"
        sx={{
          fontSize: "3rem",
          textAlign: "center",
          textTransform: "uppercase",
          color: "primary.main",
          letterSpacing: 3,
          mb: 3,
          fontFamily: "'Jersey M54', sans-serif",
        }}
      >
        About Our Application
      </Typography>
      <Typography variant="body1" fontSize="1.1rem" sx={{ lineHeight: 1.8 }}>
        Our application provides a platform to **enhance creativity** and make 
        content creation seamless. From **text styling** to generating stunning visuals, 
        we empower users to bring their ideas to life. Whether you're a student, 
        professional, or hobbyist, this app caters to all your needs.
      </Typography>
    </Paper>
  );
};

const FeatureCard = ({ title, description, image }) => {
  return (
    <Paper elevation={2} sx={{ borderRadius: 4, p: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          maxHeight: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
      />
      <Typography variant="h5" fontWeight="700" sx={{ textAlign: "center", mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center", lineHeight: 1.6 }}>
        {description}
      </Typography>
    </Paper>
  );
};

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="This is the Dashboard">
      <Box>
        <Grid container spacing={3}>
          {/* About Section */}
          <Grid item xs={12}>
            <AboutApplication />
          </Grid>

          {/* Features Section */}
          <Grid item xs={12}>
            <Typography
              variant="h2"
              fontWeight="800"
              sx={{
                fontSize: "2.5rem",
                textAlign: "center",
                color: "secondary.main",
                textTransform: "uppercase",
                letterSpacing: 2,
                mt: 5,
                fontFamily: "'Jersey M54', sans-serif",
              }}
            >
              Key Features
            </Typography>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6} lg={3}>
              <FeatureCard
                title="Transform Text"
                description="Style your text effortlessly with advanced customization options."
                image={im1}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FeatureCard
                title="Creative Visuals"
                description="Generate eye-catching visuals to enhance your projects."
                image={im2}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FeatureCard
                title="Custom Designs"
                description="Create unique and personalized designs with our tools."
                image={im3}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FeatureCard
                title="Easy Editing"
                description="Edit and modify your creations quickly and efficiently."
                image={im4}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;

// import React from "react";
// import { Grid, Box, Typography } from "@mui/material";
// import im1 from 'src/assets/images/im/im1.png';
// import im2 from 'src/assets/images/im/im2.png';
// import im3 from 'src/assets/images/im/im3.png';
// import im4 from 'src/assets/images/im/im4.png';

// const AboutApplication = () => {
//   return (
//     <Box p={4} textAlign="center">
//       <Typography variant="h4" gutterBottom>
//         Welcome to Transform: Your Text Styler Application
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Transform is your go-to application for effortlessly styling text to match specific domains and author styles.
//         Whether you are writing creative essays, mimicking the style of renowned authors, or designing professional
//         texts, Transform provides a seamless experience to enhance your writing. 
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Simply input your text, select a domain or author, and watch as your text transforms into a masterpiece!
//         Save your transformations, copy them, or share them directly—all from one platform.
//       </Typography>

//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} sm={6} md={3}>
//           <img
//             src={im1} // Adjust the path to your image location
//             alt="Transform Logo"
//             style={{ width: "100%", height: "auto", borderRadius: "8px" }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <img
//             src={im2}  // Adjust the path to your image location
//             alt="Author Writing"
//             style={{ width: "100%", height: "auto", borderRadius: "8px" }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <img
//             src={im3}  // Adjust the path to your image location
//             alt="Creative Text"
//             style={{ width: "100%", height: "auto", borderRadius: "8px" }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <img
//             src={im4} // Adjust the path to your image location
//             alt="Editing Text"
//             style={{ width: "100%", height: "auto", borderRadius: "8px" }}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default AboutApplication;