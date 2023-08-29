import { useState, useEffect, useMemo } from 'react';

const useHeroTypingEffect = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);

    const texts = useMemo(() => [
        "Let the hack begin;",
        "Technology Beyond Imagination;"
    ], []);

    useEffect(() => {
        const text = texts[currentTextIndex];
        let typingInterval;

        if (isTyping) {
            typingInterval = setInterval(() => {
                setCurrentText(text.substring(0, currentText.length + 1));
                if (currentText === text) {
                    setIsTyping(false);
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1000); // Delay before deleting starts
                }
            }, 95); // Typing speed
        }

        const deletingInterval = setInterval(() => {
            if (isDeleting && currentText.length > 0) {
                setCurrentText(text.substring(0, currentText.length - 3));
            } else if (isDeleting && currentText.length === 0) {
                setIsTyping(true);
                setIsDeleting(false);
                setCurrentText('');
                setCurrentTextIndex((currentTextIndex + 1) % texts.length);
                clearInterval(deletingInterval);
                setTimeout(() => {
                    setIsTyping(true);
                }, 500); // Delay before typing starts again
            }
        }, 10); // Deleting speed

        return () => {
            clearInterval(typingInterval);
            clearInterval(deletingInterval);
        };
    }, [currentTextIndex, currentText, isTyping, isDeleting, texts]);

    return { currentText };
};

export default useHeroTypingEffect;
