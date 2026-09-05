import { motion } from 'framer-motion';
import { CheckCircle2, ListTodo } from 'lucide-react';

export default function Header({ totalTasks, completedTasks }) {
  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
        <ListTodo className="w-4 h-4" />
        <span>Kunlik Rejalar</span>
      </div>
      
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 mb-2">
        Vazifalar Menejeri
      </h1>

      <div className="flex items-center justify-center gap-4 text-slate-400 text-sm mt-3">
        <span>Jami: <strong className="text-white">{totalTasks}</strong></span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          Bajarildi: <strong className="text-emerald-400">{completedTasks}</strong>
        </span>
      </div>

      {/* Progress Bar Animatsiyasi */}
      <div className="w-full bg-slate-800/80 rounded-full h-2 mt-4 overflow-hidden border border-slate-700/50 p-0.5">
        <motion.div 
          className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </motion.header>
  );
}