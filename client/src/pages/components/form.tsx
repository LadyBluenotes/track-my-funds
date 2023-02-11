import { useState } from 'react';
import { createStyles, PasswordInput, TextInput, Button, Group, Box, Text, Container, Divider, Paper, Anchor } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconUser } from '@tabler/icons-react';

const useStyles = createStyles({
    wrapper: {
        border: '1px solid #eaeaea',
        borderRadius: '20px',
        padding: '40px 70px 30px 70px',
        backgroundColor: '#fff',
    },
    accountIcon: {
        height: '100px',
        width: '100px',
        fontWeight: 300,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});



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
                mt={90}
                mb={130}
            >
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <IconUser className={classes.accountIcon} />
                <Divider
                    mb={30}
                    mt={10}
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
                            { formTitle === 'Register Your Account' ?
                                <Text size="sm" color="gray">
                                Already have an account?{' '}
                                    <Anchor<'a'> href="/login" size="sm">
                                        Sign in
                                    </Anchor>
                                </Text>
                                : <Text size="sm" color="gray">
                                Don't have an account?{' '}
                                    <Anchor<'a'> href="/register" size="sm">
                                        Sign up
                                    </Anchor>
                                </Text>
                                }
                            <Button 
                                type="submit"
                                variant="light"
                                >Submit</Button>
                        </Group>
                        </form>
                    </Box>
                </Paper>
            </Container>
    );
  }