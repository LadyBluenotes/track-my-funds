import { createStyles, Container, Group, Anchor } from '@mantine/core';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colors.gray[1],
    position: 'static',
    bottom: 0,
    left: 0,
    right: 0,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 100,
    padding: [theme.spacing.md, theme.spacing.xl], 
  }
}));

export default function Footer() {
  const { classes } = useStyles();

  const links = [
    { link:'/about', label: 'About' },
    { link:'/contact', label: 'Contact' },
    { link:'/register', label: 'Register' },
    { link:'/privacy', label: 'Privacy' },
  ]

  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image src="/smallLogo.jpg" alt="logo" width={100} height={85} />
        <Group>{items}</Group>
      </Container>
    </div>
  );
}