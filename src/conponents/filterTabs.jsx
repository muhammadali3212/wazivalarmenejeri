import { motion } from 'framer-motion';

export default function FilterTabs({ currentFilter, setFilter }) {
  const filters = [
    { id: 'all', label: 'Barchasi' },
    { id: 'active', label: 'Bajarilmagan' },
    { id: 'completed', label: 'Bajarilgan' },
  ];

  return (
    <div className="flex bg-slate-800/60 p-1.5 rounded-xl mb-6 border border-slate-700/50 backdrop-blur-md">
      {filters.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setFilter(tab.id)}
          className="relative flex-1 py-2 text-sm font-medium rounded-lg transition-colors z-10 text-slate-300 hover:text-white"
        >
          {currentFilter === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-indigo-600 rounded-lg -z-10 shadow-md shadow-indigo-600/30"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}