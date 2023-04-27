
const db = require('./models')

const bountyTest = async () => {
    try {
        // CREATE
        const newBounty = await db.Bounty.create({
            name: 'Han Solo',
            wantedFor: 'p much everything',
            client: 'The Empire',
            ship: 'Millenium Falcon',
            reward: 100000,
            captured: false,
            lastSeen: 'Hoth'
        })
        console.log(newBounty)
        // READ
        const foundBounty = await db.Bounty.findOne({ name: 'Han Solo' })
        console.log(foundBounty)
        // UPDATE
        const updatedBounty = await db.Bounty.findOneAndUpdate({ name: 'Han Solo' }, { reward: 150000 }, { new: true })
        console.log(updatedBounty)
        // DESTROY
        const deletedBounty = await db.Bounty.findOneAndDelete({ name: 'Han Solo' })
        console.log(deletedBounty)
    } catch(err) {
        console.log(err)
    }
}

bountyTest()