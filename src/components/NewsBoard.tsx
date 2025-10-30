import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const news = [
  {
    title: "New Water Supply Project Approved",
    timeAgo: "2 days ago",
    category: "Infrastructure",
    description: "Major water supply infrastructure project has been approved to improve water access across all wards.",
  },
  {
    title: "Free Health Camp on 15th January",
    timeAgo: "1 week ago",
    category: "Health",
    description: "Free medical checkup and consultation camp will be organized at the community center.",
  },
  {
    title: "Digital Literacy Program Launch",
    timeAgo: "2 weeks ago",
    category: "Education",
    description: "Free digital literacy classes for all age groups starting next month at the village center.",
  },
  {
    title: "Solar Street Light Installation Complete",
    timeAgo: "3 weeks ago",
    category: "Development",
    description: "Installation of solar street lights completed in all main roads ensuring better night visibility.",
  },
];

const NewsBoard = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bell className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Digital News Board
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with latest announcements and developments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      {item.timeAgo}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBoard;
