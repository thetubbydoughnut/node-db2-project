// STRETCH
const cars = [
    {
        vin: "JH4DA1840KS004941",
        make: "toyota",
        model: "prius",
        mileage: 215000,
        title: "clean",
        transmission: 'manual'
    },
    {
        vin: "JH4DA9360LS010859",
        make: "toyota",
        model: "corolla",
        mileage: 115000,
        title: "salvage",
    },
    {
        vin: "5B4LP57G323345457",
        make: "ford",
        model: "focus",
        mileage: 15000,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
} 