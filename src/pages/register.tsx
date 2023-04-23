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
        heading: "Register for an account",
        subheading: "Sign up with",
        bottomText: "Already have an account?",
      },
    },
  };
}
