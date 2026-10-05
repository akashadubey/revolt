'use client';

import { useState } from 'react';

type CalculatorProps = {
  dict: {
    title: string;
    daily_commute: string;
    petrol_price: string;
    mileage: string;
    monthly_savings: string;
    yearly_savings: string;
  }
};

export default function SavingsCalculator({ dict }: CalculatorProps) {
  const [commute, setCommute] = useState(30);
  const [petrol, setPetrol] = useState(100);
  const [mileage, setMileage] = useState(40);

  // Revolt charging cost roughly Rs 0.25 per km
  const electricCostPerKm = 0.25; 
  const petrolCostPerKm = petrol / mileage;
  
  const dailySavings = (petrolCostPerKm - electricCostPerKm) * commute;
  const monthlySavings = Math.round(dailySavings * 30);
  const yearlySavings = Math.round(dailySavings * 365);

  return (
    <section className="calculator-section">
      <div className="calc-container">
        <h2 className="section-title">{dict.title}</h2>
        
        <div className="calc-grid">
          <div className="calc-controls">
            <div className="calc-group">
              <label>
                {dict.daily_commute}: <span className="val">{commute} km</span>
              </label>
              <input type="range" min="10" max="150" value={commute} onChange={(e) => setCommute(Number(e.target.value))} className="slider" />
            </div>

            <div className="calc-group">
              <label>
                {dict.petrol_price}: <span className="val">₹{petrol}</span>
              </label>
              <input type="range" min="80" max="120" value={petrol} onChange={(e) => setPetrol(Number(e.target.value))} className="slider" />
            </div>

            <div className="calc-group">
              <label>
                {dict.mileage}: <span className="val">{mileage} km/L</span>
              </label>
              <input type="range" min="20" max="80" value={mileage} onChange={(e) => setMileage(Number(e.target.value))} className="slider" />
            </div>
          </div>

          <div className="calc-results">
            <div className="result-card">
              <h3>{dict.monthly_savings}</h3>
              <p className="result-val">₹{monthlySavings.toLocaleString()}</p>
            </div>
            <div className="result-card highlight">
              <h3>{dict.yearly_savings}</h3>
              <p className="result-val">₹{yearlySavings.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
