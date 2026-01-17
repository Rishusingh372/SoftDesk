require("dotenv").config();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { Admin } = require("./models/admin.model.js");
const { connectToDB } = require("./database/db.connection.js");

const seedAdmin = async () => {
  try {
    // Connect to the database
    await connectToDB();

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: "admin@example.com" });
    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash("admin123", saltRounds);

    // Create admin data
    const adminData = {
      name: "SuperAdmin",
      orgnization: "SoftDesk",
      role: "admin",
      email: "admin@example.com",
      password: hashedPassword,
    };

    // Insert admin into database
    const admin = new Admin(adminData);
    await admin.save();

    console.log("Admin seeded successfully");
  } catch (error) {
    console.error("Error seeding admin:", error);
  } finally {
    // Close the database connection
    await mongoose.connection.close();
  }
};

// Run the seed function
seedAdmin();
