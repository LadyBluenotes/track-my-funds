import Head from 'next/head';

export default function HeadComponent() {
    return (
        <Head>
        <title>How Much Leftover?</title>
        <meta name="description" content="App to figure out how much money you have left after each pay cheque." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}