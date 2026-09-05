import { AnimatePresence, motion } from 'framer-motion';
import TaskItem from './taskItem';
import { ClipboardList } from 'lucide-react';

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 text-slate-500 flex flex-col items-center gap-3 border border-dashed border-slate-800 rounded-xl"
      >
        <ClipboardList className="w-10 h-10 text-slate-600" />
        <p className="text-sm">Hozircha hech qanday vazifa mavjud emas.</p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-1">
      <AnimatePresence mode="popLayout">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

