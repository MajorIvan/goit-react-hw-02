import { useState, useEffect } from 'react';
import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Notification from '../Notification/Notification.jsx';

function App() {
    const [feedback, setFeedback] = useState(
        JSON.parse(
            localStorage.getItem('feedbackLSData')
            ) || {good: 0, neutral: 0, bad: 0 }
    );

    useEffect(() => {
        localStorage.setItem('feedbackLSData', 
        JSON.stringify(feedback));}, [feedback]);

    const updateFeedback = (feedbackType) => {
        setFeedback({
          ...feedback,
          [feedbackType]: feedback[feedbackType] + 1,
        });
    };
    
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const isHidden = totalFeedback === 0;
    const positiveFeedback = Math.round(
        ((feedback.good + feedback.neutral) / totalFeedback) * 100
    );

    const onReset = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
    };

    return (
        <>
            <Description />
            <Options 
                onUpdate={updateFeedback} 
                isHidden={isHidden} 
                onReset={onReset} />
            {isHidden ? (
                <Notification />) : (
                    <Feedback
                        feedbackType={feedback}
                        totalFeedback={totalFeedback}
                        positiveFeedback={positiveFeedback}/>)}
        </>
    );
}

export default App