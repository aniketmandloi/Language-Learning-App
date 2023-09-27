const express = require('express');
const router = express.Router();

const QuizQuestion = require('../models/QuizQuestions');

router.get('/:language', async (req, res) => {
    try {
        const language = req.params.language;
        const question = await QuizQuestion.find({ language });
        res.json(question);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error'});
    }
});

module.exports = router;