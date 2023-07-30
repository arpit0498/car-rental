import React, { useState } from "react";
import "../styles/bookRide.css"
export default function BookRide() {
    const [rent, setRent] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setRent(true);
    };
    return (
        <div className="book-form" id="bookride">
            <form onSubmit={handleSubmit}>
                <div className="form-box">
                    <label>Select Your Car Type*</label>
                    <select required>
                        <option value="Jaguar F-TYPE R">Jaguar F-TYPE R</option>
                        <option value="Maserati GranTurismo">Maserati GranTurismo</option>
                        <option value="Aston Martin DB11">Aston Martin DB11</option>
                        <option value="Bugatti Veyron">Bugatti Veyron</option>
                        <option value="Ferrari Portofino">Ferrari Portofino</option>
                        <option value="Lamborgini Aventador">Lamborgini Aventador</option>
                        <option value="McLaren P1">McLaren P1</option>
                        <option value="Rolls Royce Phantom">Rolls Royce Phantom</option>
                    </select>
                </div>
                <div className="form-box">
                    <label>Pick-up location*</label>
                    <select required>
                        <option value="Banglore">Banglore</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Pune">Pune</option>
                        <option value="Cheenai">Cheenai</option>

                    </select>
                </div>
                <div className="form-box">
                    <label> Drop-of location*</label>
                    <select required>
                        <option value="Banglore">Banglore</option>
                        <option value="Kolkata ">Kolkata</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Pune">Pune</option>
                        <option value="Cheenai">Cheenai</option>

                    </select>
                </div>
                <div className="form-box">
                    <label>Pick-up date*</label>
                    <input type="date" required />
                </div>
                <div className="form-box">
                    <label> Drop-of date*</label>
                    <input type="date" required />
                </div>
                <div className="form-box">
                    <label> Your phone number*</label>
                    <input type="number" placeholder="+91 xxxxxxxxxx" required />
                </div>
                <button>Book car</button>
            </form>
            <span>
                {rent
                    ? "Your application has been successfully submitted. A member of our staff will be in touch with you shortly to make arrangements."
                    : ""}
            </span>
        </div>
    );
}