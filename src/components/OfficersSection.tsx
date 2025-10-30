import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const officers = [
  {
    name: "Manisha Marathe",
    position: "Sarpanch",
    contact: "+91 98765 43210",
    avatar: "/placeholder.svg",
  },
  {
    name: "Priya Sharma",
    position: "Secretary",
    contact: "+91 98765 43211",
    avatar: "/meeting.jpg",
  },
  {
    name: "N.B.Deore",
    position: "",
    contact: "+91 98765 43212",
    avatar: "/plantation.jpg",
  },
  {
    name: "Sunita Devi",
    position: "Ward Member",
    contact: "+91 98765 43213",
    avatar: "/clean.jpg",
  },
];

const OfficersSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Officers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team working for the development of our village
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {officers.map((officer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted/50 border-4 border-primary/20 shadow-lg">
                    <img 
                      src={officer.avatar || "/placeholder.svg"} 
                      alt={officer.name}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    {officer.name}
                  </h3>
                  <p className="text-secondary text-sm font-medium mb-2">
                    {officer.position}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {officer.contact}
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

export default OfficersSection;
