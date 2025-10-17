import Header from "../components/Header";
import Footer from "../components/Footer";

export default function InfoPage() {

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-900 text-gray-100">
            <Header />

            <main className="container mx-auto px-6 py-12 flex-1">
                <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">TruthGuard AI — Project Info</h1>
                    <p className="text-gray-300 mb-6">
                        Lightweight dashboard and API to detect misinformation using an LSTM model.
                        Use the sections below to learn about the project, features, legal pages, and how to contact the team.
                    </p>

                    {/* Quick links */}
                    <nav className="flex flex-wrap gap-3 mb-6">
                        <a href="#about" className="text-cyan-300 hover:underline">About</a>
                        <a href="#features" className="text-cyan-300 hover:underline">Features</a>
                        <a href="#privacy" className="text-cyan-300 hover:underline">Privacy</a>
                        <a href="#terms" className="text-cyan-300 hover:underline">Terms</a>
                        <a href="#contact" className="text-cyan-300 hover:underline">Contact</a>
                        <a href="#support" className="text-cyan-300 hover:underline">Support</a>
                    </nav>

                    <section id="about" className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">About</h2>
                        <p className="text-gray-300">
                            TruthGuard AI is a simple proof-of-concept application that classifies news content as FAKE or REAL.
                            The backend uses a trained LSTM model and a tokenizer; the frontend provides text, image (OCR) and link-based workflows.
                            Built for research and demonstration purposes — not a substitute for professional fact-checking.
                        </p>
                    </section>

                    <section id="features" className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Features</h2>
                        <ul className="list-disc ml-5 text-gray-300 space-y-2">
                            <li><strong>Text Detection:</strong> Paste or type an article and get a FAKE / REAL prediction with confidence score.</li>
                            <li><strong>Image Analysis:</strong> Upload images — OCR extracts text and runs the same detection pipeline.</li>
                            <li><strong>Link Verification:</strong> Provide a news URL; the service extracts article text (newspaper3k / BeautifulSoup) then predicts.</li>
                            <li><strong>REST API:</strong> Backend routes: /predict (POST) and /extract (POST). CORS enabled for local frontend usage.</li>
                        </ul>
                    </section>

                    <section id="privacy" className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Privacy</h2>
                        <p className="text-gray-300">
                            This project does not store user-submitted content by default. If you add persistent storage or analytics,
                            update this policy to reflect what data is collected, how it is used, and how long it is retained.
                            For deployments, ensure secure transport (HTTPS) and consider privacy requirements for user data.
                        </p>
                    </section>

                    <section id="terms" className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Terms</h2>
                        <p className="text-gray-300">
                            Use at your own risk. The model is experimental and may produce incorrect classifications.
                            The authors are not liable for decisions made based on model outputs. If you deploy publicly, present
                            clear disclaimers and obtain any required legal reviews.
                        </p>
                    </section>

                    <section id="contact" className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
                        <div className="text-gray-300 space-y-2">
                            <p><strong>Name:</strong> Papun Pal</p>
                            <p><strong>Email:</strong> <a className="text-cyan-300 hover:underline" href="mailto:papunpal38029@gmail.com">papunpal38029@gmail.com</a></p>
                            <p><strong>Phone:</strong> <a className="text-cyan-300" href="tel:+916295804056">+91 6295804056</a></p>
                        </div>
                    </section>

                    <section id="support" className="mb-2">
                        <h2 className="text-2xl font-semibold mb-2">Support</h2>
                        <p className="text-gray-300">
                            For troubleshooting, provide:
                        </p>
                        <ul className="list-disc ml-5 text-gray-300">
                            <li>Steps to reproduce the issue</li>
                            <li>Frontend console errors and backend logs</li>
                            <li>OS, Python / Node versions, and installed dependencies (requirements.txt / package.json)</li>
                        </ul>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}