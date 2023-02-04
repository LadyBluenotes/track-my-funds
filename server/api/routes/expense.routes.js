const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expense.controllers');

router.get('/:user/expense', expenseController.getExpenses);

router.get('/:user/expense/:id', expenseController.getExpense);

router.post('/:user/expense', expenseController.createExpense);

router.put('/:user/expense/:id', expenseController.updateExpense);

router.delete('/:user/expense/:id', expenseController.deleteExpense);

module.exports = router;
