import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Flex, Container, createStyles, Table, Stack } from '@mantine/core';
import { IconTrash, IconPencil } from '@tabler/icons-react';

const useStyles = createStyles({
  expenseContainer: {
    minHeight: 610,
  },
    expenseHeading: {
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
    monthlyExpenseHeading: {
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
        marginBottom: '30px'
    }
});

interface monthlyExpenses {
    name: string;
    amount: number;
}

export default function Expenses() {
  const { classes } = useStyles();
  const [monthlyExpense, setMonthlyExpense] = useState();

  const tableHeaders: any = (
    <tr>
        <th>Expense</th>
        <th>Amount</th>
        <th></th>
    </tr>
  );

  const monthlyExpenses = [
    { name: 'Rent', amount: 1000 },
    { name: 'Car Payment', amount: 500 },
    { name: 'Car Insurance', amount: 100 },
    { name: 'Phone Bill', amount: 100 },
    { name: 'Internet', amount: 100 },
    { name: 'Electricity', amount: 100 },
    { name: 'Water', amount: 100 },
    { name: 'Gas', amount: 100 },
    { name: 'Groceries', amount: 100 },
];

  const tableRows: any = monthlyExpenses.map((expense) =>(
    <tr key={expense.name}>
        <td>{expense.name}</td>
        <td>{expense.amount}</td>
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
        expense: 0,
    },
    transformValues: (values) => ({
        expense: Number(values.expense) || 0,
    }),
  });

  const handleSubmit = (values: any) => {
    setMonthlyExpense(values.expense);

    console.log(values);
  };


  return (
    <Container className={classes.expenseContainer}>
      <h1 className={classes.expenseHeading}>Expense</h1>
      <form onSubmit={form.onSubmit(handleSubmit)} className={classes.form}>
        <Flex direction={{ base: 'row' }} gap={{ base: 'sm' }} justify="center">
          <TextInput
            icon={'$'}
            type="number"
            description="Enter your monthly expense"
            mt="lg"
            radius="lg"
            {...form.getInputProps('expense')}
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
      <h2 className={classes.monthlyExpenseHeading}>Monthly Expenses</h2>
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