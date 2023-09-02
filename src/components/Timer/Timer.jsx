import React, { useEffect, useState } from "react";

const Timer = () => {
    // Specify the target date and time in IST (year, month, day, hour, minute)
    const targetDateIST = new Date("2023-09-03T00:50:00").getTime();

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
        const seconds = Math.floor((milliseconds / 1000) % 60);
        const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
        const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
        const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const { days, hours, minutes, seconds } = formatTime(timeLeft);

    return (
        <div
            className="hidden fixed top-0 right-0 md:block mr-14"
            style={{ zIndex: 9999 }}
        >
            <div className="text-center">
                <div className="bg-[#0CCA4A] text-2xl text-white p-1">
                    TIME
                </div>
                <div className="text-black bg-white p-3 rounded-b-[10px]">
                    <div className="flex items-center justify-center flex-col mb-3">
                        <span className="text-5xl font-semibold">{days}</span>
                        <span className="text-sm font-semibold">DAYS</span>
                    </div>
                    <div className="flex space-x-1 mb-1">
                        <div className="flex items-center justify-center flex-col">
                            <span className="text-3xl">{hours}</span>
                            <span className="text-[7px]">HOURS</span>
                        </div>
                        <span className="text-3xl">:</span>
                        <div className="flex items-center justify-center flex-col">
                            <span className="text-3xl">{minutes}</span>
                            <span className="text-[7px]">MINUTES</span>
                        </div>
                        <span className="text-3xl">:</span>
                        <div className="flex items-center justify-center flex-col">
                            <span className="text-3xl">{seconds}</span>
                            <span className="text-[7px]">SECONDS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
