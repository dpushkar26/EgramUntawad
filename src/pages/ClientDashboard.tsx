import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Clock, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ClientDashboard = () => {
  const applications = [
    { id: "APP001", type: "Birth Certificate", status: "approved", date: "2024-03-10" },
    { id: "APP002", type: "Property Tax", status: "pending", date: "2024-03-12" },
    { id: "APP003", type: "Water Connection", status: "processing", date: "2024-03-14" },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive", icon: any }> = {
      approved: { variant: "default", icon: CheckCircle },
      pending: { variant: "secondary", icon: Clock },
      processing: { variant: "secondary", icon: Clock },
      rejected: { variant: "destructive", icon: XCircle },
    };
    
    const config = variants[status] || variants.pending;
    const Icon = config.icon;
    
    return (
      <Badge variant={config.variant} className="flex items-center gap-1 w-fit">
        <Icon className="w-3 h-3" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-foreground mb-2">Client Dashboard</h1>
            <p className="text-muted-foreground">Track your applications and access services</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">3</h3>
                  <p className="text-muted-foreground">Total Applications</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">2</h3>
                  <p className="text-muted-foreground">In Progress</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">1</h3>
                  <p className="text-muted-foreground">Completed</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>My Applications</CardTitle>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  New Application
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((app, index) => (
                    <motion.div
                      key={app.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-muted rounded-lg gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-foreground">{app.type}</h3>
                          {getStatusBadge(app.status)}
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>ID: {app.id}</span>
                          <span>Applied: {new Date(app.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientDashboard;
