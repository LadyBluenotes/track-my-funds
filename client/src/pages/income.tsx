import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Flex, Code, Container, createStyles, Stack, Table } from '@mantine/core';
import { IconTrash, IconPencil } from '@tabler/icons-react';

const useStyles = createStyles({
  incomeContainer: {
    minHeight: '610px',
  },
  incomeHeading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#000',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
  },
  textInput: {
    width: '300px',
  },
  addButton: {
    width: 'calc(100% - 8px)',
    height: 'calc(100% - 8px)',
    padding: '0',
    fontSize: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '3px'
  },
  monthlyIncomeHeading: {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#000',
    marginTop: '2rem',
  },
  actionButtons: {
    spacing: 'sm',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  tableStyle: {
      maxWidth: '500px',
      margin: '0 auto',
}
});

interface monthlyIncomes {
  name: string;
  amount: number;
}

export default function Income() {
  const { classes } = useStyles();

  const [monthlyIncome, setMonthlyIncome] = useState();

  const monthlyIncomes = [
    { name: 'Salary', amount: 5000 },
    { name: 'Side Hustle', amount: 1000 },
    { name: 'Investments', amount: 1000 }
  ]

  const tableHeaders: any = (
    <tr>
      <th>Income</th>
      <th>Amount</th>
      <th></th>
    </tr>
  );

  const tableRows: any = monthlyIncomes.map((income) =>(
    <tr key={income.name}>
        <td>{income.name}</td>
        <td>{income.amount}</td>
        <td>
            <Stack className={classes.actionButtons}>
                <IconPencil />
                <IconTrash />
            </Stack>
        </td>
    </tr>
  ));

  const form = useForm({
    initialValues: {
      income: 0,
    },
    transformValues: (values) => ({
      income: Number(values.income) || 0,
    }),
  });

  const handleSubmit = (values: any) => {
    setMonthlyIncome(values.income);

    console.log(values);
  };


  return (
    <Container className={classes.incomeContainer}>
      <h1 className={classes.incomeHeading}>Income</h1>
      <form onSubmit={form.onSubmit(handleSubmit)} className={classes.form}>
        <Flex direction={{ base: 'row' }} gap={{ base: 'sm' }} justify="center">
          <TextInput
            icon={'$'}
            type="number"
            description="Enter your monthly income"
            mt="lg"
            radius="lg"
            {...form.getInputProps('income')}
            className={classes.textInput}
            rightSection={
              <Button
                type="submit"
                radius="lg"
                variant="subtle"
                color="teal"
                size="md"
                className={classes.addButton}
              >
                +
              </Button>
            }
          />
        </Flex>
      </form>
      <h2 className={classes.monthlyIncomeHeading}>Monthly Incomes</h2>
        <Table 
            verticalSpacing={12}
            horizontalSpacing={3}
            className={classes.tableStyle}>
            <thead>
                {tableHeaders}
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </Table>
    </Container>
  );
}