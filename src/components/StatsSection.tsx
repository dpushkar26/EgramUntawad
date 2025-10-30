import { motion } from "framer-motion";
import { Users, FileText, Target, Bell } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Total Population",
    value: "5,234",
    bgColor: "bg-blue-500",
  },
  {
    icon: FileText,
    label: "Documents Issued",
    value: "1,450",
    bgColor: "bg-emerald-500",
  },
  {
    icon: Target,
    label: "Schemes Active",
    value: "28",
    bgColor: "bg-purple-500",
  },
  {
    icon: Bell,
    label: "Announcements",
    value: "156",
    bgColor: "bg-orange-500",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`${stat.bgColor} p-3 rounded-lg flex-shrink-0`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
