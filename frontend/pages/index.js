import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    email: '', 
    username: '', 
    password: '', 
    firstName: '', 
    lastName: ''
  });
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [techniques, setTechniques] = useState([]);
  const [loadingTechniques, setLoadingTechniques] = useState(false);
  const [showAddTechniqueForm, setShowAddTechniqueForm] = useState(false);
  const [newTechnique, setNewTechnique] = useState({
    name: '',
    description: '',
    difficulty: 'BEGINNER',
    position: 'CLOSED_GUARD',
    trainingType: 'BOTH',
    bodyTypes: ['AVERAGE'],
    steps: [{ description: '', keyPoints: [], commonMistakes: [] }],
    tags: []
  });

  // Fetch techniques when techniques page is accessed
  useEffect(() => {
    if (currentPage === 'techniques') {
      fetchTechniques();
    }
  }, [currentPage]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
      setMessage('Login successful!');
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Login failed');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', registerData);
      setMessage('Registration successful!');
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Registration failed');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setMessage('');
    localStorage.removeItem('token');
  };

  const fetchTechniques = async () => {
    setLoadingTechniques(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8080/api/techniques', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTechniques(response.data.techniques || response.data || []);
    } catch (error) {
      console.error('Failed to fetch techniques:', error);
      setTechniques([]);
    } finally {
      setLoadingTechniques(false);
    }
  };

  const handleAddTechnique = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/techniques', newTechnique, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Technique added successfully!');
      setShowAddTechniqueForm(false);
      setNewTechnique({
        name: '',
        description: '',
        difficulty: 'BEGINNER',
        position: 'CLOSED_GUARD',
        trainingType: 'BOTH',
        bodyTypes: ['AVERAGE'],
        steps: [{ description: '', keyPoints: [], commonMistakes: [] }],
        tags: []
      });
      fetchTechniques(); // Refresh the techniques list
    } catch (error) {
      setMessage(error.response?.data?.error || 'Failed to add technique');
    }
  };

  const renderHomePage = () => (
    <div>
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to BJJ Brain</h1>
        <p className="text-xl text-gray-600 mb-8">Your Ultimate Brazilian Jiu-Jitsu Knowledge Platform</p>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 mb-8">
            BJJ Brain is a comprehensive platform designed to revolutionize how martial artists learn, practice, and master Brazilian Jiu-Jitsu, Judo, and Wrestling techniques. 
            Our innovative approach combines traditional technique learning with cutting-edge technology to create an immersive training experience.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technique Library</h3>
          <p className="text-gray-600">
            Build your comprehensive technique library with detailed instructions, variations, and progressions for BJJ, Judo, and Wrestling moves.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">BJJ Chess Game</h3>
          <p className="text-gray-600">
            Experience strategic martial arts gameplay where you make tactical decisions against AI opponents of varying skill levels.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">3D Mind Map</h3>
          <p className="text-gray-600">
            Visualize technique connections and flows in an interactive 3D environment to understand the deeper relationships between moves.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Master the Art of Grappling</h2>
        <p className="text-xl mb-8 opacity-90">
          Whether you're training in Brazilian Jiu-Jitsu, Judo, or Wrestling, BJJ Brain provides the tools and insights you need to elevate your game.
        </p>
        <div className="flex justify-center space-x-8 text-6xl mb-8">
          <span title="Brazilian Jiu-Jitsu">🥋</span>
          <span title="Judo">🥋</span>
          <span title="Wrestling">🤼</span>
        </div>
        <button 
          onClick={() => setCurrentPage('techniques')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
        >
          Start Building Your Technique Library
        </button>
      </div>
    </div>
  );

  const renderTechniquesPage = () => {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">BJJ Techniques</h1>
          <button 
            onClick={() => setShowAddTechniqueForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            + Add Technique
          </button>
        </div>

        {loadingTechniques ? (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-500">Loading techniques...</p>
            </div>
          </div>
        ) : techniques.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="text-center py-12">
              <div className="mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No techniques yet</h3>
              <p className="text-gray-500 mb-4">Start building your technique library by adding your first technique.</p>
              <button 
                onClick={() => setShowAddTechniqueForm(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Add Your First Technique
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((technique) => (
              <div key={technique.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{technique.name}</h3>
                  
                  {technique.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {technique.description.length > 150 
                        ? `${technique.description.substring(0, 150)}...` 
                        : technique.description}
                    </p>
                  )}

                  <div className="flex flex-col space-y-2 mb-4">
                    {technique.position && (
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Position:</span>
                        <span className="ml-2 text-gray-600">{technique.position}</span>
                      </div>
                    )}
                    
                    {technique.difficulty && (
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Difficulty:</span>
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                          technique.difficulty === 'BEGINNER' ? 'bg-green-100 text-green-700' :
                          technique.difficulty === 'INTERMEDIATE' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {technique.difficulty}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {/* Training type tag */}
                    {technique.trainingType && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">
                        {technique.trainingType.toLowerCase().replace('_', ' ')}
                      </span>
                    )}
                    
                    {/* Position tag */}
                    {technique.position && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md">
                        {technique.position.toLowerCase().replace('_', ' ')}
                      </span>
                    )}
                    
                    {/* API tags */}
                    {technique.tags && technique.tags.length > 0 && 
                      technique.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-md">
                          {tag.name || tag}
                        </span>
                      ))
                    }
                    
                    {/* Fallback tags if no API tags */}
                    {(!technique.tags || technique.tags.length === 0) && (
                      <>
                        <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-md">bjj</span>
                        {technique.name?.toLowerCase().includes('submission') && (
                          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-md">submission</span>
                        )}
                        {technique.name?.toLowerCase().includes('takedown') && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-md">takedown</span>
                        )}
                        {technique.name?.toLowerCase().includes('sweep') && (
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-md">sweep</span>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Technique Modal */}
        {showAddTechniqueForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-10 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 shadow-lg rounded-md bg-white">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Add New Technique</h2>
                <button 
                  onClick={() => setShowAddTechniqueForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleAddTechnique} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={newTechnique.name}
                      onChange={(e) => setNewTechnique({...newTechnique, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Rear Naked Choke"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                    <select
                      value={newTechnique.difficulty}
                      onChange={(e) => setNewTechnique({...newTechnique, difficulty: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="FUNDAMENTAL">Fundamental</option>
                      <option value="BEGINNER">Beginner</option>
                      <option value="INTERMEDIATE">Intermediate</option>
                      <option value="ADVANCED">Advanced</option>
                      <option value="EXPERT">Expert</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                    <select
                      value={newTechnique.position}
                      onChange={(e) => setNewTechnique({...newTechnique, position: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="STANDING">Standing</option>
                      <option value="CLINCH">Clinch</option>
                      <option value="TAKEDOWN">Takedown</option>
                      <option value="CLOSED_GUARD">Closed Guard</option>
                      <option value="OPEN_GUARD">Open Guard</option>
                      <option value="HALF_GUARD">Half Guard</option>
                      <option value="BUTTERFLY_GUARD">Butterfly Guard</option>
                      <option value="DE_LA_RIVA">De La Riva</option>
                      <option value="SPIDER_GUARD">Spider Guard</option>
                      <option value="RUBBER_GUARD">Rubber Guard</option>
                      <option value="SIDE_CONTROL">Side Control</option>
                      <option value="MOUNT">Mount</option>
                      <option value="BACK_CONTROL">Back Control</option>
                      <option value="KNEE_ON_BELLY">Knee on Belly</option>
                      <option value="NORTH_SOUTH">North South</option>
                      <option value="TURTLE">Turtle</option>
                      <option value="SCRAMBLE">Scramble</option>
                      <option value="GUARD_PASS">Guard Pass</option>
                      <option value="SWEEP">Sweep</option>
                      <option value="ESCAPE">Escape</option>
                      <option value="SUBMISSION">Submission</option>
                      <option value="COUNTER">Counter</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Training Type</label>
                    <select
                      value={newTechnique.trainingType}
                      onChange={(e) => setNewTechnique({...newTechnique, trainingType: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="BOTH">Both (Gi & No-Gi)</option>
                      <option value="GI_ONLY">Gi Only</option>
                      <option value="NOGI_ONLY">No-Gi Only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    required
                    value={newTechnique.description}
                    onChange={(e) => setNewTechnique({...newTechnique, description: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Describe the technique, its purpose, and key concepts..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Steps</label>
                  {newTechnique.steps.map((step, index) => (
                    <div key={index} className="mb-3 p-3 border border-gray-200 rounded-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Step {index + 1}</span>
                        {newTechnique.steps.length > 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              const newSteps = newTechnique.steps.filter((_, i) => i !== index);
                              setNewTechnique({...newTechnique, steps: newSteps});
                            }}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <textarea
                        required
                        value={step.description}
                        onChange={(e) => {
                          const newSteps = [...newTechnique.steps];
                          newSteps[index].description = e.target.value;
                          setNewTechnique({...newTechnique, steps: newSteps});
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="2"
                        placeholder="Describe this step..."
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      const newSteps = [...newTechnique.steps, { description: '', keyPoints: [], commonMistakes: [] }];
                      setNewTechnique({...newTechnique, steps: newSteps});
                    }}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    + Add Step
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
                  <input
                    type="text"
                    value={newTechnique.tags.join(', ')}
                    onChange={(e) => {
                      const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag);
                      setNewTechnique({...newTechnique, tags});
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., choke, submission, back control"
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddTechniqueForm(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    Add Technique
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderBJJChessPage = () => (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">BJJ Chess</h1>
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 mb-6">
          Coming Soon
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg p-8">
        <div className="text-center mb-8">
          <div className="mb-6">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic BJJ Game</h2>
          <p className="text-lg text-gray-600 mb-6">
            Experience Brazilian Jiu-Jitsu like never before with our chess-like strategic game
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Choose your fighter profile (body type, age, experience level)
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Select your opponent's difficulty (beginner, intermediate, advanced)
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Start from standing positions and make strategic decisions
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Choose between engaging or pulling guard
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                React to opponent's moves with defensive techniques
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Win by submission (chokes or joint locks)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Game Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                AI opponents with varying skill levels
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Realistic technique database integration
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Strategic decision making with time pressure
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Detailed position-specific options (underhooks, knee shields, etc.)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Learn counters and defenses in context
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gray-400 text-white px-8 py-3 rounded-md cursor-not-allowed" disabled>
            Coming Soon - In Development
          </button>
        </div>
      </div>
    </div>
  );

  const renderMyGamePage = () => (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Game</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center py-12">
          <div className="mb-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No favorite techniques yet</h3>
          <p className="text-gray-500 mb-4">Your favorited techniques will appear here to help you focus on your preferred moves.</p>
          <button 
            onClick={() => setCurrentPage('techniques')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Browse Techniques
          </button>
        </div>
      </div>
    </div>
  );

  const renderMindMapPage = () => (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Mind Map</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center py-12">
          <div className="mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">3D Technique Mind Map</h3>
          <p className="text-gray-500 mb-4">
            Visualize the interconnections between BJJ techniques in an interactive 3D mind map.
            See how techniques flow and connect to build your understanding of the art.
          </p>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            Requires techniques in your library
          </div>
          <br />
          <button 
            onClick={() => setCurrentPage('techniques')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Add Techniques First
          </button>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      case 'techniques':
        return renderTechniquesPage();
      case 'bjj-chess':
        return renderBJJChessPage();
      case 'my-game':
        return renderMyGamePage();
      case 'mind-map':
        return renderMindMapPage();
      default:
        return renderHomePage();
    }
  };

  const ProfileModal = () => (
    showProfileModal && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Your Profile</h2>
            <button 
              onClick={() => setShowProfileModal(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="px-6 py-4">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
              <div>
                <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.firstName} {user.lastName}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Username</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.username}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Skill Level</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.skillLevel?.replace('_', ' ')}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Body Type</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.bodyType}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Training Focus</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.trainingFocus}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Member Since</dt>
                <dd className="mt-1 text-sm text-gray-900">{new Date(user.createdAt).toLocaleDateString()}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Account Status</dt>
                <dd className="mt-1">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.isVerified 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {user.isVerified ? 'Verified' : 'Unverified'}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
          
          <div className="flex justify-end mt-6">
            <button 
              onClick={() => setShowProfileModal(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );

  if (user) {
    return (
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">BJJ Brain</h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Welcome, {user.firstName}!</span>
                <button 
                  onClick={() => setShowProfileModal(true)}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition duration-200"
                  title="Profile"
                >
                  👤
                </button>
                <button 
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 py-3">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                  currentPage === 'home'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('techniques')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                  currentPage === 'techniques'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Techniques
              </button>
              <button
                onClick={() => setCurrentPage('bjj-chess')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                  currentPage === 'bjj-chess'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                BJJ Chess
              </button>
              <button
                onClick={() => setCurrentPage('my-game')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                  currentPage === 'my-game'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                My Game
              </button>
              <button
                onClick={() => setCurrentPage('mind-map')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                  currentPage === 'mind-map'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Mind Map
              </button>
            </nav>
          </div>
        </div>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {renderCurrentPage()}
          </div>
        </main>
        <ProfileModal />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🥋 BJJ Brain</h1>
          <p className="text-gray-600">The ultimate BJJ techniques knowledge graph</p>
        </div>

        <div className="flex mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-l-md border ${
              isLogin 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-r-md border-t border-r border-b ${
              !isLogin 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Register
          </button>
        </div>

        {message && (
          <div className={`mb-4 p-3 rounded-md ${
            message.includes('successful') 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}

        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  required
                  value={registerData.firstName}
                  onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  required
                  value={registerData.lastName}
                  onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                required
                value={registerData.username}
                onChange={(e) => setRegisterData({...registerData, username: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={registerData.email}
                onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={registerData.password}
                onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
            >
              Register
            </button>
          </form>
        )}

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Test user: test@example.com / password123</p>
        </div>
      </div>
    </div>
  );
}