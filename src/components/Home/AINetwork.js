import { useNavigate } from "react-router-dom";
import "./AINetwork.css";
import img1 from "./logo.png";

export default function AINetwork() {
    const navigate = useNavigate();

    // Helper function to convert service name to slug format
    const getServiceSlug = (service) => {
        return service.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    };

    // Navigation function matching the Homebanner pattern
    const openService = (service) => {
        const serviceSlug = getServiceSlug(service);
        navigate(`/subgroup/${serviceSlug}`);
    };

    const nodes = [
        {
            title: "Web Development",
            icon: "🌐",
            description: "React, Node.js, APIs and Full Stack Development",
            route: "/web-development",
            featured: true,
            angle: 0
        },
        {
            title: "Digital Marketing",
            icon: "📈",
            description: "SEO, Ads, Analytics and Social Media",
            route: "/digital-marketing",
            featured: true,
            angle: 120
        },
        {
            title: "Python for AI",
            icon: "🤖",
            description: "Python, Machine Learning and AI",
            route: "/python-ai",
            featured: true,
            angle: 240
        },
        { title: "Tools", angle: 30 },
        { title: "Learning", angle: 60 },
        { title: "API", angle: 90 },
        { title: "Plan", angle: 150 },
        { title: "Projects", angle: 180 },
        { title: "Skills", angle: 210 },
        { title: "Analytics", angle: 270 },
        { title: "Growth", angle: 300 },
        { title: "User", angle: 330 }
    ];

    // Handle click on any node
    const handleNodeClick = (node) => {
        if (node.route) {
            // For featured nodes (main services), use the subgroup route
            if (node.featured) {
                openService(node.route);
            } else {
                // For other nodes, you can navigate to different routes
                // Option 1: Navigate to subgroup with the node title
                // openService(node.title);
                
                // Option 2: Navigate to a specific route (if you have routes for these)
                navigate(`/${node.route}`);
                
                // Option 3: Navigate to subgroup with the route as is
                // navigate(`/subgroup/${node.route}`);
            }
        }
    };

    // Handle keyboard events for accessibility
    const handleNodeKeyDown = (event, node) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleNodeClick(node);
        }
    };

    return (
        <div className="network-container">
            {/* LEFT 30% */}
            <div className="left-panel">
                <div className="left-content">
                    <h1 className="what-we-do">
                        <span className="line-1">What we</span>
                        <span className="line-3">do?</span>
                    </h1>

                    <p className="left-description">
                        GK Nexergy primarily supports students, graduates, working professionals,
                        and women returning to their careers by helping them develop the technical
                        and professional skills needed in today's digital world.
                    </p>

                    {/* ===== NEW ENGAGING CARDS ===== */}
                    <div className="feature-cards">
                        <div className="feature-card">
                            <div className="card-icon">🎓</div>
                            <div className="card-text">
                                <h4>Skill Development</h4>
                                <p>Hands-on training in Web Dev, Python for AI & Digital Marketing</p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="card-icon">🚀</div>
                            <div className="card-text">
                                <h4>Career Growth</h4>
                                <p>Projects, mentorship & real-world tools to accelerate your career</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>

            {/* RIGHT 70% */}
            <div className="right-panel">
                <div className="grid-overlay"></div>

                <div className="center-node">
                    {/* Replace with your real logo path */}
                    <img
                        src={img1}
                        alt="GKNEXERGY"
                        className="center-logo"
                    />
                </div>

                 <div className="orbit-system">
                    {nodes.map((node, index) => (
                        <div
                            key={index}
                            className="orbit-item"
                            style={{ "--angle": `${node.angle}deg` }}
                        >
                            {/* Connection line */}
                            <div className="connector"></div>

                            {/* Extra glowing points on the line */}
                            <div className="line-dot" style={{ left: "185px" }}></div>

                            <div
                                className={`node ${node.featured ? "featured-node" : "small-node"}`}
                                onClick={() => handleNodeClick(node)}
                                onKeyDown={(event) => handleNodeKeyDown(event, node)}
                                role="button"
                                tabIndex={0}
                            >
                                <div className="node-content">
                                    {node.icon && <div className="icon">{node.icon}</div>}
                                    <span>{node.title}</span>
                                </div>

                                {node.featured && (
                                    <div className="popup">{node.description}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}