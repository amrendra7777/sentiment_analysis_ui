import { motion } from 'framer-motion';
import { GitBranch, Box, Trophy } from 'lucide-react';

const StorySection = () => {
    const models = [
        { name: "Logistic Regression", accuracy: 62 },
        { name: "Linear Support Vector", accuracy: 60 },
        { name: "Multinomial Naive Bayes", accuracy: 51 },
        { name: "Random Forest", accuracy: 58 },
        { name: "Multi-Layer Perceptron (MLP)", accuracy: 92 },
        { name: "Gated Recurrent Network (GRN)", accuracy: 94, highlight: true }
    ];

    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span style={{ fontSize: '1rem', color: 'var(--accent-caramel)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>The Experiment</span>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Evolution of Accuracy</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-mocha)' }}>
                        We tested multiple architectures before arriving at our final solution. Here is our journey through the accuracy landscape.
                    </p>
                </motion.div>

                <div style={{ position: 'relative', padding: '2rem 0' }}>
                    {/* Vertical Chain Line */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: '50%',
                        width: '4px',
                        background: 'var(--border-subtle)',
                        transform: 'translateX(-50%)',
                        zIndex: 0
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {models.map((model, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                                    position: 'relative'
                                }}
                            >
                                {/* The Bead */}
                                <div style={{
                                    position: 'absolute',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: model.highlight ? '40px' : '24px',
                                    height: model.highlight ? '40px' : '24px',
                                    borderRadius: '50%',
                                    background: model.highlight ? 'var(--accent-caramel)' : 'var(--bg-cream)',
                                    border: `4px solid ${model.highlight ? 'var(--bg-cream)' : 'var(--accent-caramel)'}`,
                                    boxShadow: model.highlight ? '0 0 20px rgba(192, 133, 82, 0.5)' : 'none',
                                    zIndex: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {model.highlight && <Trophy size={16} color="white" />}
                                </div>

                                {/* The Card Content */}
                                <div style={{
                                    width: '45%',
                                    textAlign: index % 2 === 0 ? 'right' : 'left',
                                    paddingRight: index % 2 === 0 ? '2rem' : 0,
                                    paddingLeft: index % 2 !== 0 ? '2rem' : 0
                                }}>
                                    <div style={{
                                        background: model.highlight ? 'white' : 'transparent',
                                        padding: model.highlight ? '1.5rem' : '0.5rem',
                                        borderRadius: 'var(--radius-md)',
                                        boxShadow: model.highlight ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none',
                                        border: model.highlight ? '1px solid var(--border-subtle)' : 'none',
                                        display: 'inline-block'
                                    }}>
                                        <h3 style={{
                                            fontSize: model.highlight ? '1.5rem' : '1.1rem',
                                            fontWeight: model.highlight ? 700 : 500,
                                            marginBottom: '0.25rem',
                                            color: model.highlight ? 'var(--text-espresso)' : 'var(--text-espresso)'
                                        }}>
                                            {model.name}
                                        </h3>
                                        <div style={{
                                            fontSize: model.highlight ? '2rem' : '1.25rem',
                                            fontWeight: 700,
                                            color: model.highlight ? 'var(--accent-caramel)' : 'var(--text-mocha)'
                                        }}>
                                            {model.accuracy}%
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
