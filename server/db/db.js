// create open database connection

const knex = require('knex')
const config = require('./knexfile').development
const conn = knex(config)

module.exports = {
  getCourses,
  getReviews,
  getCourseByID
}

function getCourses () {
  return conn('courses').select()
}

function getReviews () {
  return conn('reviews').select()
}

function getCourseByID (id) {
  return conn('courses')
    .where(id, 'courses.id')
    .select()
}

/* function getBets (testDb) {
  const db = testDb || connection
  return db('bets')
    .select('person')
    .select('couple')
    .select('sport')
    .select('bet')
    .select('amount_bet as amountBet')
    .select('amount_won as amountWon')
    .select('percentage')
}

// bets is not being passed in properly
function addBets (newbet, testDb) {
  // console.log('hello')
  // console.log('goodbye' + newbet)
  const db = testDb || connection
  return db('bets')
    .insert({
      person: newbet.person,
      couple: newbet.couple,
      sport: newbet.sport,
      bet: newbet.bet,
      amount_bet: newbet.amountBet,This
      amount_won: newbet.amountWon,
      percentage: newbet.percentage
    }) */
