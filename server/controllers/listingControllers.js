const Listing = require('../models/Listing');

const createListing = async (req, res) => {
    try{
        const { name, price, description, image } = req.body;
        const userId = req.user.id;
        const newListing = new Listing({ name, price, description, image, listerRef: userId })
        await newListing.save(); 

        res.status(201).json({message: "Listing created successfully" });
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}

const getListings = async (req, res) => {
    try{
        const listings = await Listing.find({ status: 'active' }).sort({ createdAt: -1 });
        //later add pagination

        res.json({listings});
    } catch(err) {
        res.status(404).json({ error: "Not found"});
    }
}

const getListing = async (req,res) => {
    try{
        const { id } = req.body;
        const listing = await Listing.findById(id);
        res.json(listing);

    } catch(err) {
        res.status(404).json({ error: "Not found"});
    }
}

const placeBid = async (req, res) => {
    const { bidAmount } = req.body;   
    const targetlisting = req.params.id;   
    const userId = req.user.id;
    try{

        const listing = await Listing.findById(targetlisting);
        if (!listing) return res.status(404).json({ message: "Listing not found" });

        if (listing.listerRef.toString() === userId) {
            return res.status(403).json({ message: "You cannot bid on your own listing" });
        }

        const updateListing = await Listing.findOneAndUpdate(
            {
                _id: targetlisting,
                status: 'active',
                highestBid: { $lt: bidAmount },
                highestBidder: { $ne: userId },
            },
            {
                $set: { highestBid: bidAmount, highestBidder: userId }
            },
            { new: true }
        )

        if (!updateListing) {
            return res.status(400).json({
                message: "Bid rejected: please try again"
            });
        }

        return res.status(200).json({
            message: "Bid successful",
            listing: updateListing
        })
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Server error, please try again."})
    }
}

const getUsersBids = async (req, res) => {
    const userId = req.user.id;
    try{
        const listings = await Listing.find({"highestBidder": userId}).sort({ createdAt: -1 });
        res.json({listings});
    } catch(err) {
        res.status(404).json({ error: "Not found"});
    }
}



const getUserListings = async (req, res) => {
    const userId = req.user.id;
    try{
        const listings = await Listing.find({
            listerRef: userId,
            status: 'active'
        }).sort({ createdAt: -1 });
        
        res.json({listings});
    } catch(err) {
        res.status(404).json({ error: "Not found"});
    }
}

const endListing = async (req, res) => {
    const listingId = req.params.id;

    try{
        const listing = await Listing.findById(listingId);
        if (!listing) return res.status(404).json({ message: "Listing not found" });
        if (listing.listerRef.toString() !== req.user.id) return res.status(403).json({ message: "You cannot end this listing" });
        if (!listing.highestBidder) {
            await listing.deleteOne({ _id: listingId });
        } else if (listing.highestBidder) {
            listing.status = "ended";
            await listing.save();
        }
    } catch(err) {
        res.status(404).json({ error: "Not found"});
    }
}

const collectListing = async (req, res) => {
    const listingId = req.params.id;

    try{
        const listing = await Listing.findById(listingId);
        if (!listing) return res.status(404).json({ message: "Listing not found" });
        if (listing.status !== "ended") return res.status(403).json({ message: "You cannot collect this listing" });
        if (!listing.highestBidder || listing.highestBidder.toString() !== req.user.id) return res.status(403).json({ message: "You cannot collect this listing" });

        await listing.deleteOne({ _id: listingId });

        return res.status(200).json({ message: "Listing collected" });

    } catch(err) {
        res.status(404).json({ error: "Not found"});
    }
}

module.exports = { createListing, getListings, getListing, placeBid, getUsersBids, getUserListings, endListing, collectListing };