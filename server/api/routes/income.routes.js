const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/income.controllers');

router.get('/:user/incomes', incomeController.getIncomes);

router.get('/:user/income/:id', incomeController.getIncome);

router.post('/:user/income', incomeController.createIncome);

router.put('/:user/income/:id', incomeController.updateIncome);

router.delete('/:user/income/:id', incomeController.deleteIncome);

module.exports = router;
