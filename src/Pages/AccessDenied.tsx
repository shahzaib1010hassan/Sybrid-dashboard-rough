import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
import { useNavigate } from "react-router";
import Security from "../assets/icons/Security-amico.svg";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  title: {
    fontWeight: 900,
    marginTop: 200,
    fontSize: 34,
    color: "#BC8D42",
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  control: {
    color: "#BC8D42",
    borderColor: "#BC8D42",
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function AccessDenied() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      >
        <Image
          src={"../../../assets/svg/pagenotfound404.svg"}
          className={classes.mobileImage}
        />
        <div>
          <Title className={classes.title}>Access Denied</Title>
          <Text color="dimmed" size="lg">
            Sorry, you can't access this dashboard with your current role.
          </Text>
          {/*<Button
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
              onClick={() => {
                navigate("/login");
              }}
            >
              Get back to home page
            </Button>*/}
        </div>
        <Image src={Security} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}
