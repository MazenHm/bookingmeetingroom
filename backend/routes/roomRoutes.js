// routes/roomRoutes.js
const express = require("express");
const Room = require("../models/Room");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * GET /api/getAllRooms
 * Public for all authenticated users (admin & user)
 */
router.get("/getAllRooms", protect, async (req, res) => {
  try {
    const rooms = await Room.find().sort({ name: 1 });
    return res.json(rooms);
  } catch (err) {
    console.error("Error fetching rooms:", err);
    return res.status(500).json({ message: "Server error while fetching rooms" });
  }
});

/**
 * POST /api/addRoom
 * Admin only
 */
router.post("/addRoom", protect, adminOnly, async (req, res) => {
  try {
    const { name, capacity, availability } = req.body;

    if (!name || !capacity) {
      return res.status(400).json({
        message: "Name and capacity are required",
      });
    }

    const room = await Room.create({
      name,
      capacity,
      availability: availability !== undefined ? availability : true,
    });

    return res.status(201).json(room);
  } catch (err) {
    console.error("Error adding room:", err);
    return res.status(500).json({
      message: "Server error while adding room",
    });
  }
});

/**
 * DELETE /api/deleteRoom/:id
 * Admin only
 */
router.delete("/deleteRoom/:id", protect, adminOnly, async (req, res) => {
  try {
    const { id } = req.params;

    const room = await Room.findByIdAndDelete(id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    return res.json({
      success: true,
      message: "Room deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting room:", err);
    return res.status(500).json({
      message: "Server error while deleting room",
    });
  }
});

/**
 * PUT /api/updateRoom/:id
 * Admin only
 */
router.put("/updateRoom/:id", protect, adminOnly, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, capacity, availability } = req.body;

    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (capacity !== undefined) updateData.capacity = capacity;
    if (availability !== undefined)
      updateData.availability = availability;

    const room = await Room.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    return res.json(room);
  } catch (err) {
    console.error("Error updating room:", err);
    return res.status(500).json({
      message: "Server error while updating room",
    });
  }
});

module.exports = router;
