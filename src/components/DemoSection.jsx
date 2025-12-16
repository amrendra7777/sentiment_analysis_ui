import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Clock, Activity } from 'lucide-react';

// Real API call to Hugging Face Model
const analyzeSentiment = async (text) => {
    try {
        const response = await fetch('https://amrendraa-sentiment-analysis-mlp.hf.space/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error(`API Endpoint Error: ${response.status}`);
        }

        const data = await response.json();
        // Map API response { emotion: "happy", confidence: 0.87, ... } 
        // to UI Expected format { label: "HAPPY", score: 0.87 }
        return {
            label: data.emotion.toUpperCase(),
            score: data.confidence
        };
    } catch (error) {
        console.error("API Call Failed:", error);
        throw error;
    }
};

const DemoSection = () => {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [history, setHistory] = useState([]);

    const handleAnalyze = async () => {
        if (!input.trim()) return;

        setLoading(true);
        setResult(null);

        try {
            const data = await analyzeSentiment(input);
            setResult(data);
            setHistory(prev => [{ text: input, ...data }, ...prev.slice(0, 4)]); // Keep last 5
        } catch (error) {
            console.error("Analysis failed", error);
            // Optional: Set an error state to show in UI
        } finally {
            setLoading(false);
        }
    };

    const getSentimentColor = (label) => {
        const l = label.toUpperCase();
        const positiveEmotions = ['POSITIVE', 'HAPPY', 'JOY', 'LOVE', 'SURPRISE'];
        const negativeEmotions = ['NEGATIVE', 'SAD', 'SADNESS', 'ANGER', 'FEAR', 'DISGUST', 'SHAME'];

        if (positiveEmotions.includes(l)) return '#4CAF50';
        if (negativeEmotions.includes(l)) return '#F44336';
        return 'var(--text-mocha)';
    };

    return (
        <section className="section" style={{ background: 'var(--bg-cream)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="card"
                    style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}
                >
                    {/* Decorative background element */}
                    <div style={{
                        position: 'absolute', top: 0, right: 0, width: '200px', height: '200px',
                        background: 'radial-gradient(circle, rgba(192,133,82,0.1) 0%, rgba(255,255,255,0) 70%)',
                        pointerEvents: 'none'
                    }} />

                    <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Activity color="var(--accent-caramel)" />
                        Live Demo
                    </h2>

                    <div style={{ marginBottom: '2rem' }}>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type something here to analyze..."
                            rows={4}
                            style={{ fontSize: '1.2rem', marginBottom: '1.5rem', minHeight: '150px' }}
                        />

                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                                onClick={handleAnalyze}
                                disabled={loading}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: loading ? 0.7 : 1 }}
                            >
                                {loading ? 'Analyzing...' : (
                                    <>Analyze Text <Send size={18} /></>
                                )}
                            </motion.button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {result && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                style={{
                                    background: 'rgba(74, 59, 50, 0.03)',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '1.5rem',
                                    marginBottom: '2rem',
                                    borderLeft: `4px solid ${getSentimentColor(result.label)}`
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-mocha)', textTransform: 'uppercase', letterSpacing: '1px' }}>Detected Sentiment</span>
                                    <span style={{ fontSize: '2rem', fontWeight: 700, color: getSentimentColor(result.label) }}>
                                        {result.label}
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem', background: '#E0E0E0', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                                    <div style={{
                                        width: `${result.score * 100}%`,
                                        background: getSentimentColor(result.label),
                                        height: '100%'
                                    }} />
                                </div>
                                <div style={{ textAlign: 'right', fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--text-mocha)' }}>
                                    Confidence: {(result.score * 100).toFixed(1)}%
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* History */}
                    {history.length > 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-mocha)' }}>
                                <Clock size={16} /> Recent Analysis
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {history.map((item, idx) => (
                                    <div key={idx} style={{
                                        padding: '1rem',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid var(--border-subtle)',
                                        background: 'white',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '70%' }}>
                                            "{item.text}"
                                        </span>
                                        <span style={{
                                            fontSize: '0.8rem',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '99px',
                                            background: `${getSentimentColor(item.label)}20`,
                                            color: getSentimentColor(item.label),
                                            fontWeight: 600
                                        }}>
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                </motion.div>
            </div>
        </section>
    );
};

export default DemoSection;
