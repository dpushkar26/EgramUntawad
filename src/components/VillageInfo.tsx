import { motion } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Building2,
    label: "Households",
    value: "850+",
    color: "text-primary",
  },
  {
    icon: GraduationCap,
    label: "Literacy Rate",
    value: "95%",
    color: "text-secondary",
  },
];

const VillageInfo = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            About Our Village
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Our village is a thriving community committed to sustainable development and progress. With a rich cultural heritage and forward-thinking approach, we're building a better future for all residents through digital governance and inclusive policies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-lg bg-muted mb-4 ${stat.color}`}>
                    <stat.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground font-medium text-lg">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillageInfo;
