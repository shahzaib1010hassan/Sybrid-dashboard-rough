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
import Pagenotfound404 from "../../../assets/icons/pagenotfound404.svg";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  title: {
    fontWeight: 900,
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

export default function PageNotFound() {
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
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
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
        <Image src={Pagenotfound404} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}
