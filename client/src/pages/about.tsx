import { Image, Text, Container, ThemeIcon, Title, SimpleGrid, createStyles } from '@mantine/core';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 50,
  },

  item: {
    display: 'flex',
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },

  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    letterSpacing: 0.5,
  },

  title: {
    lineHeight: 1,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: 'center',
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },
}));

interface FeatureImage {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

export default function About() {
  const { classes } = useStyles();

  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>About TMF</Text>

      <Title className={classes.title} order={2}>
         Track My Funds is<span className={classes.highlight}>not</span> just a money manager
      </Title>

      <Container size={660} p={0}>
        <Text color="dimmed" className={classes.description}>
            At Track My Funds, we believe that managing your finances should be simple and stress-free. That's why we've designed our app with ease of use in mind. Whether you're a seasoned finance expert or just starting out, you'll find everything you need to take control of your finances and reach your financial goals.
        </Text>
      </Container>

      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
        style={{ marginTop: 30 }}
      >
        <div className={classes.item}>
            <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
                <AccessAlarmIcon />
            </ThemeIcon>

            <div>
                <Text weight={700} size="lg" className={classes.itemTitle}>
                Feature 1
                </Text>
                <Text color="dimmed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl aliquet, nec lacinia nunc aliquam.
                </Text>
            </div>
        </div>
        <div className={classes.item}>
            <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
                <AccountBalanceWalletIcon />
            </ThemeIcon>

            <div>
                <Text weight={700} size="lg" className={classes.itemTitle}>
                Feature 2
                </Text>
                <Text color="dimmed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl aliquet, nec lacinia nunc aliquam.
                </Text>
            </div>
        </div>
        <div className={classes.item}>
            <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
                <CreditCardIcon />
            </ThemeIcon>

            <div>
                <Text weight={700} size="lg" className={classes.itemTitle}>
                Feature 3
                </Text>
                <Text color="dimmed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl aliquet, nec lacinia nunc aliquam.
                </Text>
            </div>
        </div>
      </SimpleGrid>
    </Container>
  );
}