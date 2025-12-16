# Sentiment Analysis Web App 

A modern, interactive web application that uses deep learning to analyze human emotions in text. Built with React and powered by a custom Multi-Layer Perceptron (MLP) model deployed on Hugging Face.

## Overview

This project demonstrates the journey of building a sentiment analysis tool. Unlike standard "positive/negative" classifiers, this application detects specific emotions (Joy, Sadness, Anger, Fear, etc.) using a neural network trained to achievie **92% accuracy**.

The user interface is designed with a "Warm Espresso" aesthetic to provide a comfortable and engaging user experience.

## Key Features

### 1. Interactive AI Demo 
- **Real-time Analysis**: Type any sentence, and the app connects to our live Hugging Face API to predict the emotion.
- **Dynamic Feedback**: The UI instantly reacts with color-coded confidence bars (Green for positive emotions, Red for negative).
- **History Tracking**: Keeps a log of your recent queries within the session.

### 2. The "Story" of Accuracy 
- features a unique **"Chain with Beads"** visualization.
- This interactive timeline showcases our experimentation journey:
    1.  Logistic Regression (62%)
    2.  Linear Support Vector (60%)
    3.  Multinomial Naive Bayes (51%)
    4.  Random Forest (58%)
    5.  **Final MLP Model (92%)**
- Elements animate into view as you scroll, highlighting the dramatic improvement of the final deep learning model.

### 3. Modern UI/UX 
- **Theme**: "Espresso & Latte" – a palette of warm browns, creams, and caramels.
- **Animations**: Powered by `framer-motion` for smooth entrances, hover effects, and transitions.
- **Responsive**: Fully optimized for different screen sizes.

## Technology Stack

- **Frontend**: React (Vite)
- **Styling**: CSS Modules, Framer Motion (Animations), Lucide React (Icons)
- **API**: Custom FastAPI backend hosted on Hugging Face Spaces
- **Model Architecture**: Multi-Layer Perceptron (MLP)

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites
- Node.js (v16 or higher)
- npm (Node Package Manager)

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd sentiment_analysis_ui
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` (or the URL shown in your terminal).

## Testing the API

The application connects to the public API endpoint:
`https://amrendraa-sentiment-analysis-mlp.hf.space/predict`

You can manually verify it works using curl:
```bash
curl -X POST https://amrendraa-sentiment-analysis-mlp.hf.space/predict \
     -H "Content-Type: application/json" \
     -d '{"text": "I am so happy with this result!"}'
```

---
*Created for <Course/Subject Name> Project Submission.*
