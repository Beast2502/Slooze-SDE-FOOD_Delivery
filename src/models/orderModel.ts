import mongoose from "mongoose";
import { orderStatus, paymentStatus } from "../app/api/common/orderStatus";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product', // link to Product
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, 'Quantity cannot be less than 1'],
          default: 1,
        },
      },
    ],
    // restaurant: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Restaurant', // link to Restaurant
    //   required: true,
    // },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Total price cannot be negative'],
    },
    status: {
      type: String,
      enum: orderStatus,
      default: 'pending',
    },
    payMentStatus: {
      type: String,
      enum: paymentStatus,
      default: 'pending',
    },
    customerName: {
      type: String,
      required: [true, 'Customer name is required'],
    },
    customerContact: {
      type: String,
      required: [true, 'Customer contact is required'],
    },
    deliveryAddress: {
      type: String,
      required: [true, 'Delivery address is required'],
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, 'Registered User Id is needed'],

    }
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
