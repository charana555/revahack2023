import { useState, useEffect, useMemo } from 'react';

const useHeroTypingEffect = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);

    const texts = useMemo(() => [
        "Let the hack begin;",
        "Technology beyond imagination;"
    ], []);

    useEffect(() => {
        const text = texts[currentTextIndex];

        const typingInterval = setInterval(() => {
            if (isTyping) {
                if (isDeleting) {
                    setCurrentText(text.substring(0, currentText.length - 1));
                } else {
                    setCurrentText(text.substring(0, currentText.length + 1));
                }
            }

            if (isDeleting && currentText === '') {
                setIsTyping(true);
                setIsDeleting(false);
                setCurrentText('');
                setCurrentTextIndex((currentTextIndex + 1) % texts.length);
            }

            if (!isDeleting && currentText === text) {
                setIsTyping(false);
                setTimeout(() => {
                    setIsDeleting(true);
                    setTimeout(() => {
                        setIsTyping(true);
                    }, 500);
                }, 1000);
            }
        }, 100);

        return () => {
            clearInterval(typingInterval);
        };
    }, [currentTextIndex, currentText, isTyping, isDeleting, texts]);

    return { currentText };
};

export default useHeroTypingEffect;
