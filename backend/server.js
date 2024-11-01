// server/server.js
const express = require("express");
import allowCors from './config/allowCors.js';
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer = require('nodemailer');
const connectDB = require("./config/db");
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const path = require('path');

dotenv.config();
connectDB();

const app = express();
// app.use(allowCors((req, res, next) => next()));
app.use((req, res, next) => allowCors((req, res) => next())(req, res));
app.use(bodyParser.json());
app.use(express.json()); // Parse JSON bodies

// Use routes
const leadRoutes = require("./routes/leadRoutes");
const tourRoutes = require("./routes/tourRoutes");
const bookingRoutes = require('./routes/booking');
app.use('/api/bookings', bookingRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/brochure", leadRoutes);

// Define a Mongoose Schema for the form data (Optional)
const FormSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    scheduledDate: Date,
    type: String, // brochure or tour
});

const FormData = mongoose.models.FormData || mongoose.model('FormData', FormSchema);

const filePath = path.join(__dirname, 'ALEX AND BILL PRESENTATION.pdf');

// POST route to handle virtual tour requests
app.post('/api/virtual-tour', async (req, res) => {
    const { name, email, phone, scheduledDate } = req.body;
    try {
        const formData = new FormData({ name, email, phone, scheduledDate, type: 'virtual-tour' });
        await formData.save();

        // Send confirmation email (Optional)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Alex and Bill Estate Virtual Tour Booking',
            text: 'Thank you for booking a virtual tour with Alex and Bill Court. Our team will reach out to you shortly to schedule the tour.',
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Virtual tour booked successfully.' });
    } catch (error) {
        console.error("Error in virtual tour booking:", error);
        res.status(500).json({ error: 'Error booking virtual tour.' });
    }
});

app.post('/api/brochure', async (req, res) => {
    const { name, email, phone } = req.body;
    try {
      const formData = new FormData({ name, email, phone, type: 'brochure' });
      await formData.save();
  
      // Send confirmation email (Optional)
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your Exclusive Alex and Bill Court Brochure',
        text: `Dear ${name},\n\nThank you for your interest in Alex and Bill Estate. Attached is your exclusive brochure.\n\nBest Regards,\nAlex and Bill Court Team`,
        attachments: [
          {
            filename: 'ALEX AND BILL PRESENTATION.pdf',
            path: filePath,
            contentType: 'application/pdf',
          },
        ],
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Brochure sent successfully.' });
    } catch (error) {
      console.error("Error in brochure request:", error);
      res.status(500).json({ error: 'Error processing brochure request.' });
    }
  });

  // Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
