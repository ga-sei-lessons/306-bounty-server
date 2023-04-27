const express = require("express")
const router = express.Router()
const db = require("../models")

// GET /bounties -- READ array of bounties
router.get("/", async (req, res) => {
    try {
        const bounties = await db.Bounty.find({})
        res.json({ results: bounties })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

// GET /bounties/:id -- READ a specific bounty
router.get("/:id", async (req, res) => {
    try {
        // get the id from the url params
        const { id } = req.params
        // look up id in db
        const foundBounty = await db.Bounty.findById(id)
        // if not found, do 404 error
        // otherwise, send bounty back as json
        res.json({ result: foundBounty })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

// POST /bounties -- CREATE a bounty
router.post("/", async (req, res) => {
    try {
        // create a bounty from the data payload in the request body
        const newBounty = await db.Bounty.create(req.body)
        // res.redirect(`/bounties/${newBounty.id}`)
        res.json({ result: newBounty })
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

// PUT /bounties/:id -- UPDATE a specific bounty
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const updatedBounty = await db.Bounty.findByIdAndUpdate(id, req.body, { new: true })
        res.json({ result: updatedBounty })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

// DELETE /bounties/:id -- DESTROY a specific bounty
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        await db.Bounty.findByIdAndDelete(id)

        res.sendStatus(204) // send no content status
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

module.exports = router