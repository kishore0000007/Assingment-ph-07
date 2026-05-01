      "use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

const COLORS = [
  { name: "Call",  color: "#244D3F" },
  { name: "Text",  color: "#7C3AED" },
  { name: "Video", color: "#22C55E" },
];

export default function Stats() {
  const [data, setData] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timeline = JSON.parse(localStorage.getItem("timeline")) || [];
    const counts = { Call: 0, Text: 0, Video: 0 };

    timeline.forEach((item) => {
      if (counts[item.type] !== undefined) {
        counts[item.type]++;
      }
    });

    setData([
      { name: "Call",  value: counts.Call,  color: "#244D3F" },
      { name: "Text",  value: counts.Text,  color: "#7C3AED" },
      { name: "Video", value: counts.Video, color: "#22C55E" },
    ]);
  }, []);

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const CenterLabel = ({ viewBox }) => {
    if (!viewBox) return null;
    const { cx, cy } = viewBox;
    if (cx == null || cy == null) return null;
    return (
      <text textAnchor="middle">
        <tspan x={cx} y={cy - 6} fontSize="20" fontWeight="600" fill="#1a2e29">
          {total}
        </tspan>
        <tspan x={cx} y={cy + 13} fontSize="11" fill="#94A3B8">
          Total
        </tspan>
      </text>
    );
  };

  const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, percent }) => {
    if (percent === 0) return null;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 20;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="11"
        fontWeight="500"
        fill="#64748B"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFA] px-4 sm:px-8 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-2xl sm:text-4xl font-bold text-[#1a2e29] mb-6">
          Friendship Analytics
        </h1>

        <div className="bg-white border border-[#E9E9E9] rounded-2xl shadow-sm">
          {/* ✅ stack vertically on mobile, side-by-side on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Chart panel */}
            <div className="p-6 md:border-r border-b md:border-b-0 border-[#E9E9E9]">
              <p className="text-xs text-[#64748B] mb-2">By Interaction Type</p>

              {mounted ? (
                <div className="w-full h-[220px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={4}
                        stroke="none"
                        labelLine={false}
                        label={renderCustomLabel}
                      >
                        {data.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                        <Label content={<CenterLabel />} position="center" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="w-full h-[220px] flex items-center justify-center">
                  <p className="text-sm text-[#94A3B8]">Loading...</p>
                </div>
              )}

              <div className="flex justify-center gap-6 mt-3">
                {COLORS.map((item) => (
                  <div key={item.name} className="flex items-center gap-1.5">
                    <span
                      style={{
                        display: "inline-block",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: item.color,
                        flexShrink: 0,
                      }}
                    />
                    <span className="text-xs text-[#64748B]">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div className="p-6 flex items-center justify-center">
              <p className="text-xl sm:text-3xl text-[#C4CDD6]">More stats coming soon</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}