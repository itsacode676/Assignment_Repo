const Card = require("../Models/Card")

exports.createCard = async (req, res) => {
    try {
        const {
            title,
            description
        } = req.body
        // Validations

        if (!title || !description) {
            res.status(402).json({
                message: "Fill all fields properly",
                success: false
            })
        }

        // creating the card
        const card = await Card.create({
            title: title,
            description: description
        })

        return res.status(200).json({
            message: "Card created sucessfully",
            success: true,
            data: card
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Server issue",
            success: false
        })
    }
}

exports.searchCard = async (req, res) => {
    try {
        const {
            search
        } = req.query
        // Validations

        if (!search) {
            res.status(402).json({
                message: "Fill all fields properly",
                success: false
            })
        }

        // creating the card
        const searches = await Card.find({
            title: { $regex: search, $options: "i" }

        })

        if (!searches.length) {
            return res.status(400).json({
                message: "No data found",
                success: false,
            })
        }

        return res.status(200).json({
            message: "Card created sucessfully",
            success: true,
            data: searches
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Server issue",
            success: false
        })
    }
}

exports.getCards = async (req, res) => {
    try {

        // creating the card
        const cards = await Card.find({})

        if (!cards.length) {
            return res.status(400).json({
                message: "No data found",
                success: false,
            })
        }

        return res.status(200).json({
            message: "Cards fetched sucessfully",
            success: true,
            data: cards
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Server issue",
            success: false
        })
    }
}