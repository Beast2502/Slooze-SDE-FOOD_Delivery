import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // If you have a User schema, else make it optional
      required: false,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, 'Quantity must be at least 1'],
          default: 1,
        },
      },
    ],
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: [true, 'Cart must be associated with a restaurant'],
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Total price cannot be negative'],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model('Cart', cartSchema);

export default Cart