import { motion } from 'framer-motion';
import { Trash2, Check, Clock } from 'lucide-react';

export default function TaskItem({ task, onToggle, onDelete }) {
  // Sanani formatlash funksiyasi (soat:daqiqa | kun.oy.yil)
  const formatDate = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    
    const time = date.toLocaleTimeString('uz-UZ', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    const dayMonthYear = date.toLocaleDateString('uz-UZ', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    return `${time} • ${dayMonthYear}`;
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: -30, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className={`group flex items-center justify-between p-4 mb-3 rounded-xl border transition-all duration-300 ${
        task.completed 
          ? 'bg-slate-900/40 border-slate-800/80 opacity-60' 
          : 'bg-slate-800/90 border-slate-700/60 shadow-lg shadow-black/20 hover:border-indigo-500/50'
      }`}
    >
      <div className="flex items-center gap-3.5 flex-1 mr-2 cursor-pointer" onClick={() => onToggle(task.id)}>
        <button 
          type="button"
          className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all mt-0.5 shrink-0 ${
            task.completed 
              ? 'bg-emerald-500 border-emerald-500 text-slate-950' 
              : 'border-slate-600 group-hover:border-indigo-400'
          }`}
        >
          {task.completed && <Check className="w-4 h-4 stroke-[3]" />}
        </button>

        <div className="flex flex-col">
          <span className={`text-slate-200 text-base transition-all duration-300 select-none ${
            task.completed ? 'line-through text-slate-500' : ''
          }`}>
            {task.text}
          </span>
          
          {/* Sana va vaqt ko'rinishi */}
          {task.createdAt && (
            <span className="flex items-center gap-1 text-[11px] text-slate-400 mt-1">
              <Clock className="w-3 h-3 text-slate-500" />
              {formatDate(task.createdAt)}
            </span>
          )}
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onDelete(task.id)}
        className="text-slate-500 hover:text-rose-400 p-2 rounded-lg hover:bg-rose-500/10 transition-colors shrink-0"
      >
        <Trash2 className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}