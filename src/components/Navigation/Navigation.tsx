import { Dashboard, Money } from "@mui/icons-material";
import { Box, Link, List, ListItem } from "@mui/material";
const links = [
  {
    icon: <Dashboard />,
    route: "Home",
  },
  {
    icon: <Money />,
    route: "Expenses",
  },
];
const Navigation = () => {
  return (
    <Box
      component="aside"
      sx={{
        minHeight: "100vh",
        bgcolor: "#DDF4E7",
        borderRight: "1px solid #124170",
        maxWidth: 240,
        left: 0,
        borderRadius: "7px",
      }}
    >
      <List
        component="nav"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "500px",
          justifyContent: "flex-start",
          alignContent: "center",
          gap: "24px",
          padding: 1,
        }}
      >
        {links.map((link) => {
          return (
            <ListItem key={link.route}>
              <Link
                href="#"
                sx={{
                  // p: 1,
                  color: "#124170",
                  textDecoration: "none",
                  "&:hover": { color: "#67C090" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                {link.icon}
                {link.route}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Navigation;
