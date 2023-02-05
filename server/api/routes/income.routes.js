const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/income.controllers');

router.get('/incomes', incomeController.getIncomes);

router.get('/income/:id', incomeController.getIncome);

router.post('/income', incomeController.createIncome);

router.put('/income/:id', incomeController.updateIncome);

router.delete('/income/:id', incomeController.deleteIncome);

module.exports = router;
