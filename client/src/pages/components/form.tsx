import { useState } from 'react';
import { createStyles, PasswordInput, TextInput, Button, Group, Box, Text, Container, Divider } from '@mantine/core';
import { useForm } from '@mantine/form';

const useStyles = createStyles((theme) => ({
    wrapper: {
        border: '1px solid #eaeaea',
        borderRadius: '20px',
        padding: '40px 70px 30px 70px',
        backgroundColor: theme.colors.gray[0],
    }
}));



export default function Form({ formTitle }: { formTitle: string }) {
    const { classes } = useStyles();
    const form = useForm({
      initialValues: {
        email: '',
        password: ''
      },
  
      validate: {
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        password: (value) => (value.length > 6 ? null : 'Password must be at least 6 characters long'),
      },
    });
  
    return (
        <Container 
                size={500}
                mt={70}
                mb={190}
                className={classes.wrapper}
            >
            <Divider
                mb={50}
                mt={20}
                labelPosition='center'
                label={
                    <Text
                    size='xl'
                    align='center'
                    fw={700}
                >
                    {formTitle}
                </Text>
                }/>
                <Box sx={{ maxWidth: 350 }} mx="auto" >
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                        mb={20}
                        />
                    <PasswordInput
                        withAsterisk
                        label="Password"
                        placeholder="Enter password"
                        {...form.getInputProps('password')}
                        mb={30}
                        />
                    <Group position="right" mt="md">
                        <Button 
                            type="submit"
                            variant="light"
                            >Submit</Button>
                    </Group>
                    </form>
                </Box>
            </Container>
    );
  }