const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Добавить курсы',
    isAdd: true,
  })
});

module.exports = router;
