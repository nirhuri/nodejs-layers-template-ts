import mongoose from "mongoose";

const prSchema = new mongoose.Schema({
  prNumber: {
    type: Number,
    required: true,
    trim: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    min: 3,
  },
  author: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    enum: ['Draft', 'Open', 'Closed'],
    default: 'Draft'
  },
    labels: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model("PullRequest", prSchema);
