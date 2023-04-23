import AccountCard, { AccountCardProps } from "./components/AccountCard";

interface Props {
  accountCardProps: AccountCardProps;
}

export default function LoginPage({ accountCardProps }: Props) {
  return (
    <div>
      <AccountCard {...accountCardProps} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      accountCardProps: {
        heading: "Welcome Back!",
        subheading: "Log in with",
        bottomText: "Don't have an account?",
      },
    },
  };
}
