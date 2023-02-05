const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expense.controllers');

router.get('/expenses', expenseController.getExpenses);

router.get('/expense/:id', expenseController.getExpense);

router.post('/expense', expenseController.createExpense);

router.put('/expense/:id', expenseController.updateExpense);

router.delete('/expense/:id', expenseController.deleteExpense);

module.exports = router;
