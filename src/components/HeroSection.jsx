import { motion } from 'framer-motion';
import { User, Sparkles } from 'lucide-react';

const TEAM_MEMBERS = [
    { name: "Amrendra Singh Maan", roll: "2221567" },
    { name: "Ishmeet Kaur", roll: "22221580" },
    { name: "Amit Kumar Yadav", roll: "2221566" },
    { name: "Chhote Lal Yadav", roll: "2221500" }
];

const HeroSection = () => {
    return (
        <section className="section" style={{ minHeight: '90vh', alignItems: 'center', textAlign: 'center' }}>

            {/* Title Area */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ marginBottom: '4rem' }}
            >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <Sparkles color="var(--accent-caramel)" size={32} />
                    <span style={{ fontSize: '1.2rem', color: 'var(--accent-caramel)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
                        Project Sentiment
                    </span>
                </div>

                <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                    Understanding Emotions <br />
                    <span style={{ color: 'var(--text-mocha)', fontStyle: 'italic', fontSize: '3.5rem' }}>One Text at a Time</span>
                </h1>

                <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                    An advanced sentiment analysis tool powered by state-of-the-art MLP models.
                </p>
            </motion.div>

            {/* Team Cards */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="container"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem',
                    maxWidth: '1000px'
                }}
            >
                {TEAM_MEMBERS.map((member, index) => (
                    <motion.div
                        key={index}
                        className="card"
                        whileHover={{ y: -5 }}
                        style={{
                            padding: '2rem 1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            flex: '1 1 200px',
                            maxWidth: '250px'
                        }}
                    >
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--bg-cream)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1rem',
                            border: '2px solid var(--border-subtle)'
                        }}>
                            <User color="var(--text-mocha)" size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                        <span style={{ fontSize: '0.9rem', color: 'var(--accent-caramel)', fontWeight: 500 }}>{member.roll}</span>
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
};

export default HeroSection;
