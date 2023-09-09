import React, { useEffect, useState } from "react";

const Timer = () => {
    // Specify the target date and time in IST (year, month, day, hour, minute)
    const targetDateIST = new Date("2023-11-02T00:00:00").getTime();

    // function to convert IST time to UTC
    const convertISTtoUTC = (istTime) => {
        const ISTOffset = 5.5 * 60 * 60 * 1000; // IST offset - 5 hours and 30 minutes
        return new Date(istTime - ISTOffset);
    };

    const calculateTimeLeft = () => {
        const currentISTDate = new Date().getTime();
        const currentUTCDate = convertISTtoUTC(currentISTDate);
        const targetUTCDate = convertISTtoUTC(targetDateIST);

        const timeLeft = targetUTCDate - currentUTCDate;
        if (timeLeft < 0) {
            // Target date has passed
            return 0;
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            // Recalculate the time left and update
            const newTimeLeft = calculateTimeLeft();
            if (newTimeLeft === 0) {
                clearInterval(interval);
            } else {
                setTimeLeft(newTimeLeft);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const formatTime = (milliseconds) => {
        // Convert milliseconds to days, hours, minutes, and seconds
        const seconds = String(Math.floor((milliseconds / 1000) % 60)).padStart(2, '0');
        const minutes = String(Math.floor((milliseconds / (1000 * 60)) % 60)).padStart(2, '0');
        const hours = String(Math.floor((milliseconds / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        const days = String(Math.floor(milliseconds / (1000 * 60 * 60 * 24))).padStart(2, '0');

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    };


    const { days, hours, minutes, seconds } = formatTime(timeLeft);

    return (
        <div className="text-center">
            <div className="p-4 rounded-b-[10px] flex justify-center">
                <div className="flex space-x-3">
                    <div className="flex items-center justify-center flex-col">
                        <span className="text-4xl md:text-7xl font-semibold text-[#BCBCBC]">{days}</span>
                        <span className="text-sm font-semibold mt-2 text-[#BCBCBC]">DAYS</span>
                    </div>
                    <span className="text-4xl md:text-7xl font-semibold text-[#BCBCBC]">:</span>
                    <div className="flex items-center justify-center flex-col">
                        <span className="text-4xl md:text-7xl font-semibold text-[#BCBCBC]">{hours}</span>
                        <span className="text-sm font-semibold mt-2 text-[#BCBCBC]">HOURS</span>
                    </div>
                    <span className="text-4xl md:text-7xl font-semibold text-[#BCBCBC]">:</span>
                    <div className="flex items-center justify-center flex-col">
                        <span className="text-4xl md:text-7xl font-semibold text-[#BCBCBC]">{minutes}</span>
                        <span className="text-sm font-semibold mt-2 text-[#BCBCBC]">MINUTES</span>
                    </div>
                    <span className="text-4xl md:text-7xl font-semibold text-[#BCBCBC]">:</span>
                    <div className="flex items-center justify-center flex-col">
                        <span className="text-4xl md:text-7xl font-semibold text-[#BCBCBC]">{seconds}</span>
                        <span className="text-sm font-semibold mt-2 text-[#BCBCBC]">SECONDS</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;




