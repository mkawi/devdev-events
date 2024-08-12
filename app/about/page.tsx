import ContactForm from "@/components/ContactForm";
import Banner from "@/components/layout/Banner";

export default function About() {
    return (
        <>
            <Banner title="About Us" />
            <section className="w-full py-12 md:py-16 lg:py-20 -mt-6">
                <div className="max-w-4xl mx-auto p-6">
                    <section className="mb-8">
                        <p className="text-lg text-gray-700">
                            Welcome to DevDev, the premier hub for tech enthusiasts and professionals! We are passionate & dedicated to fostering a vibrant tech community through engaging meetups, events, and exhilarating hackathons.
                        </p>
                    </section>
                    <img
                        src="/placeholder.svg"
                        alt="Event Image"
                        width={600}
                        height={400}
                        className="object-cover w-full aspect-[3/2] group-hover:scale-105 transition-transform duration-300 mb-12"
                    />
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-700">
                            At DevDev, our mission is to create an inclusive and dynamic platform where individuals can share knowledge, collaborate on projects, and ignite their passion for technology. We believe in the power of community and aim to bridge the gap between ideas and execution by providing opportunities for learning, networking, and growth.
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>

                        <h3 className="text-xl font-medium mb-2">Meetups</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Our regular meetups bring together tech enthusiasts from various fields to discuss the latest trends, share insights, and build lasting connections. Whether you’re a developer, designer, data scientist, or just curious about tech, our meetups offer something for everyone.
                        </p>

                        <h3 className="text-xl font-medium mb-2">Events</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            From seminars and workshops to keynote presentations and panel discussions, our events are designed to inspire and educate. We invite industry leaders and innovators to share their expertise, offering attendees a chance to gain valuable insights and stay ahead in the fast-paced world of technology.
                        </p>

                        <h3 className="text-xl font-medium mb-2">Hackathons</h3>
                        <p className="text-lg text-gray-700">
                            Our hackathons are the perfect playground for creative minds to come together and build something extraordinary. We provide the tools, mentors, and collaborative environment needed for participants to turn their ideas into reality. Compete, learn, and innovate – all within a span of intense, action-packed hours.
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
                        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                            <li>
                                <span className="font-medium">Networking Opportunities:</span> Connect with like-minded individuals, industry experts, and potential collaborators.
                            </li>
                            <li>
                                <span className="font-medium">Skill Development:</span> Enhance your skills through hands-on experiences, workshops, and expert-led sessions.
                            </li>
                            <li>
                                <span className="font-medium">Community Support:</span> Be part of a supportive community that encourages learning, sharing, and growth.
                            </li>
                            <li>
                                <span className="font-medium">Innovation:</span> Challenge yourself to think outside the box and bring innovative ideas to life.
                            </li>
                        </ul>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Ready to dive into the world of tech with us? Join DevDev today and be part of a community that is passionate about technology and innovation. Whether you’re here to learn, network, or create, we have something for you.
                        </p>
                    </section>
                    <ContactForm />
                </div>
            </section>
        </>
    );
}