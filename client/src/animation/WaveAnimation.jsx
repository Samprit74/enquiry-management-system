import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./WaveAnimation.css";

const WaveAnimation = ({ enquiries }) => {
  const [chartData, setChartData] = useState([]);
  const [phase, setPhase] = useState(0); // for smooth wave

  useEffect(() => {
    // Initialize data (per 5 minutes or demo)
    let data = [];
    let now = new Date();
    for (let i = 0; i < 12; i++) {
      data.push({
        time: `${now.getHours()}:${(now.getMinutes() - i * 5 + 60) % 60}`,
        value: Math.floor(Math.random() * 20 + 10), // base value
      });
    }
    setChartData(data.reverse());
  }, [enquiries]);

  // Smooth wave effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => prev + 0.2); // small increment for smooth movement
      setChartData((prevData) =>
        prevData.map((d, idx) => ({
          ...d,
          value: d.value + Math.sin(phase + idx * 0.5), // smooth wave
        }))
      );
    }, 4400)//0.2 sec for subtle delay
    return () => clearInterval(interval);
  }, [phase]);                                      

  return (
    <div className="wave-chart-container">
      {/* Animation placeholder */}
      <div className="animation-placeholder">
        {/* You can later add 3D animation or SVG animation here */}
        <p className="animation-comment"><h3>enqueries timeline</h3></p>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData}>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(53, 92, 125, 0.9)",
              borderRadius: "10px",
              border: "none",
              color: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#F8B195"
            strokeWidth={5}
            dot={{ r: 6, fill: "#F8B195" }}
            activeDot={{ r: 8, fill: "#F8B195" }}
            isAnimationActive={true}
            animationDuration={800}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaveAnimation;
