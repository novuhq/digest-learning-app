import { sendDigest } from "../novu/novu.js";

export const getDigest = async (req, res) => {
    const { name } = req.body
    try {
        await sendDigest(name);
        res.status(201).json({message:'success',name:name});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}