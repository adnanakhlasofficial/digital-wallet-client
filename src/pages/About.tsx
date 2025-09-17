import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Heart,
  Lightbulb,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";

export default function About() {
  const stats = [
    { number: "2M+", label: "Active Users" },
    { number: "50B+", label: "Transactions Processed" },
    { number: "99.9%", label: "Uptime" },
    { number: "150+", label: "Countries Supported" },
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      initials: "SC",
      bio: "Former Goldman Sachs VP with 15+ years in fintech innovation.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      initials: "MR",
      bio: "Ex-Google engineer specializing in secure financial systems.",
    },
    {
      name: "Emily Watson",
      role: "Head of Security",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      initials: "EW",
      bio: "Cybersecurity expert with background in federal banking regulation.",
    },
    {
      name: "David Kim",
      role: "Head of Product",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      initials: "DK",
      bio: "Product leader from Apple, focused on intuitive user experiences.",
    },
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description:
        "Every decision we make puts our customers' needs and financial wellbeing at the center. We listen, adapt, and innovate based on real user feedback.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Trust",
      description:
        "We employ the highest standards of security and maintain transparent, trustworthy practices. Your financial safety is our top priority.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We continuously innovate to make banking faster, smarter, and more accessible for everyone, regardless of their financial background.",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description:
        "SecureBank was founded with a mission to democratize financial services.",
    },
    {
      year: "2020",
      title: "Series A Funding",
      description:
        "Raised $25M to build our core banking platform and security infrastructure.",
    },
    {
      year: "2021",
      title: "1M Users",
      description:
        "Reached our first million users and launched investment features.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description:
        "Expanded to 50+ countries and introduced multi-currency support.",
    },
    {
      year: "2023",
      title: "AI Integration",
      description:
        "Launched AI-powered financial insights and personalized recommendations.",
    },
    {
      year: "2024",
      title: "2M+ Users",
      description:
        "Became the fastest-growing mobile banking platform globally.",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            <Award className="w-4 h-4 mr-2" />
            Trusted by millions worldwide
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Banking reimagined for the digital age
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We're building the future of mobile banking with security,
            simplicity, and innovation at our core. Join millions who trust us
            with their financial future.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To democratize financial services and empower everyone with
              simple, secure, and accessible banking tools. We believe banking
              should work for you, not the other way around.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-xl text-muted-foreground">
                From a simple idea to a global financial platform
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals from top financial institutions and
              technology companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-lg">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
            <p className="text-xl text-muted-foreground mb-12">
              We're building more than just a bank – we're creating a community
              of innovators, dreamers, and problem-solvers who are passionate
              about transforming financial services.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Purpose-Driven</h3>
                <p className="text-muted-foreground">
                  Every team member is united by our mission to make financial
                  services accessible to all.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inclusive</h3>
                <p className="text-muted-foreground">
                  We celebrate diversity and create an environment where
                  everyone can thrive and contribute.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovative</h3>
                <p className="text-muted-foreground">
                  We encourage bold thinking and provide the resources to turn
                  great ideas into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sidebar text-sidebar-foreground mt-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience the future of banking?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers who have made the switch to
            SecureBank. Get started in minutes, not days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Open Account Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
