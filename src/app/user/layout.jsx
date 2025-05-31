import FloatingCart from "../component/FloartingCart/FloatingCart";
import Header from "../component/Header/Header";

export default function UserboardLayout({ children }) {
    return (
        <div className="flex">
            <Header />
            {children}
            <FloatingCart />

        </div>
    );
}