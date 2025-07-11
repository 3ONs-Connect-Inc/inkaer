
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChatInput } from '@/components/ui/chat-input';
import { AlertTriangle, Clock, Download, Upload, FileText, File } from 'lucide-react';
import { toast } from 'sonner';

const Challenge = () => {
  const { id } = useParams();
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [stepFile, setStepFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [explanation, setExplanation] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(0);

  // Mock challenge data - in real app, this would come from API
  const challengeData = {
    title: "Modular Drone Frame",
    duration: "2-3 hrs",
    durationInMinutes: 180, // 3 hours
    files: [
      { name: "Challenge_Brief.pdf", type: "pdf", size: "2.4 MB" },
      { name: "Reference_Materials.pdf", type: "pdf", size: "1.8 MB" },
    ]
  };

  useEffect(() => {
    if (!showDisclaimer && timeRemaining === 0) {
      setTimeRemaining(challengeData.durationInMinutes * 60); // Convert to seconds
    }
  }, [showDisclaimer, challengeData.durationInMinutes, timeRemaining]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            toast.error('Time is up! Your challenge has ended.');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timeRemaining]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProceed = () => {
    setShowDisclaimer(false);
  };

  const handleStepUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setStepFile(file);
      toast.success('STEP file uploaded successfully');
    }
  };

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPdfFile(file);
      toast.success('PDF file uploaded successfully');
    }
  };

  const handleSubmit = () => {
    if (!stepFile || !pdfFile || !explanation.trim()) {
      toast.error('Please upload both files and provide an explanation');
      return;
    }
    
    toast.success('Challenge submission successful!');
    console.log('Submitting challenge:', { stepFile, pdfFile, explanation, timeUsed: challengeData.durationInMinutes * 60 - timeRemaining });
  };

  const handleDownload = (fileName: string) => {
    toast.success(`Downloading ${fileName}`);
    // In real app, this would trigger actual file download
  };

  if (showDisclaimer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
        <LoggedInNavbar />
        
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-3xl font-sora font-bold text-gray-900 mb-2">
                  Challenge Disclaimer
                </CardTitle>
                <p className="text-lg text-gray-600 font-sora">
                  Please read and acknowledge the following before starting your challenge
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-sora font-bold text-red-800 mb-4">
                    Academic Integrity Policy
                  </h3>
                  <div className="space-y-4 text-red-700 font-sora">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong>No Cheating:</strong> You must complete this challenge independently using only your own knowledge and skills.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong>No Plagiarism:</strong> All work submitted must be original. Copying from external sources, other submissions, or previous work is strictly prohibited.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong>No Generative AI:</strong> The use of AI tools (ChatGPT, Claude, GitHub Copilot, etc.) is strictly forbidden during this challenge.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong>No External Help:</strong> You may not receive assistance from other people, forums, or online resources during the challenge.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-sora font-bold text-blue-800 mb-4">
                    Challenge Information
                  </h3>
                  <div className="space-y-2 text-blue-700 font-sora">
                    <p><strong>Challenge:</strong> {challengeData.title}</p>
                    <p><strong>Time Limit:</strong> {challengeData.duration}</p>
                    <p><strong>Files Provided:</strong> {challengeData.files.length} document(s)</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-sora font-bold text-yellow-800 mb-4">
                    Important Notes
                  </h3>
                  <div className="space-y-2 text-yellow-700 font-sora">
                    <p>• Once you proceed, the timer will start and cannot be paused</p>
                    <p>• You can submit your work at any time before the deadline</p>
                    <p>• Violations of this policy will result in immediate disqualification</p>
                    <p>• Your submission will be reviewed for compliance</p>
                  </div>
                </div>

                <div className="pt-6 text-center">
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-gray-700 font-sora">
                      By clicking "I Agree and Proceed", you acknowledge that you have read, understood, and agree to abide by all terms stated above.
                    </p>
                  </div>
                  
                  <Button
                    onClick={handleProceed}
                    className="bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold px-8 py-3 text-lg rounded-full"
                  >
                    I Agree and Proceed
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,170,254,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,120,200,0.08)_0%,transparent_50%)]"></div>

      <div className="relative z-10">
        <LoggedInNavbar />
        
        {/* Timer Bar */}
        <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-sora font-bold text-gray-900">
                {challengeData.title}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-lg font-sora font-bold">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className={`${timeRemaining < 600 ? 'text-red-500' : 'text-gray-700'}`}>
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Challenge Files */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="font-sora text-gray-900 flex items-center gap-2">
                  <Download className="w-6 h-6 text-inkaer-blue" />
                  Challenge Files
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {challengeData.files.map((file, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="w-8 h-8 text-red-500" />
                          <div>
                            <p className="font-sora font-medium text-gray-900">{file.name}</p>
                            <p className="text-sm text-gray-500">{file.size}</p>
                          </div>
                        </div>
                        <Button
                          onClick={() => handleDownload(file.name)}
                          className="bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* File Upload Section */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* STEP File Upload */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="font-sora text-gray-900 flex items-center justify-center gap-2">
                    <File className="w-6 h-6 text-inkaer-blue" />
                    Upload STEP File
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="min-h-[200px] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    {stepFile ? (
                      <div className="text-center">
                        <File className="w-16 h-16 text-inkaer-blue mx-auto mb-2" />
                        <p className="font-sora font-medium text-gray-900">{stepFile.name}</p>
                        <p className="text-sm text-gray-500">STEP file uploaded</p>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500">
                        <File className="w-16 h-16 mx-auto mb-2 opacity-50" />
                        <p className="font-sora">No STEP file uploaded</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      type="file"
                      id="step-upload"
                      accept=".step,.stp"
                      onChange={handleStepUpload}
                      className="hidden"
                    />
                    <Button
                      onClick={() => document.getElementById('step-upload')?.click()}
                      className="w-full bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload STEP File
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* PDF Upload */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="font-sora text-gray-900 flex items-center justify-center gap-2">
                    <FileText className="w-6 h-6 text-inkaer-blue" />
                    Upload PDF File
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="min-h-[200px] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    {pdfFile ? (
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-inkaer-blue mx-auto mb-2" />
                        <p className="font-sora font-medium text-gray-900">{pdfFile.name}</p>
                        <p className="text-sm text-gray-500">PDF file uploaded</p>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500">
                        <FileText className="w-16 h-16 mx-auto mb-2 opacity-50" />
                        <p className="font-sora">No PDF file uploaded</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      type="file"
                      id="pdf-upload"
                      accept=".pdf"
                      onChange={handlePdfUpload}
                      className="hidden"
                    />
                    <Button
                      onClick={() => document.getElementById('pdf-upload')?.click()}
                      className="w-full bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Submission Explanation */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="font-sora text-gray-900">Submission Explanation</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <ChatInput
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    placeholder="Explain your approach, design decisions, and technical solutions..."
                    className="min-h-32 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
                  />
                  <div className="flex items-center justify-end p-3 pt-0">
                    <Button
                      type="submit" 
                      className="bg-green-600 hover:bg-green-700 text-white font-sora font-semibold"
                      disabled={timeRemaining === 0}
                    >
                      Submit Challenge
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Countdown Timer */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-full">
                    <Clock className="w-6 h-6 text-red-500" />
                    <div>
                      <p className="text-sm text-gray-600 font-sora">Time Remaining</p>
                      <p className={`text-2xl font-sora font-bold ${timeRemaining < 600 ? 'text-red-500' : 'text-gray-900'}`}>
                        {formatTime(timeRemaining)}
                      </p>
                    </div>
                  </div>
                  {timeRemaining < 600 && timeRemaining > 0 && (
                    <p className="text-red-500 font-sora mt-2 text-sm">
                      ⚠️ Less than 10 minutes remaining!
                    </p>
                  )}
                  {timeRemaining === 0 && (
                    <p className="text-red-500 font-sora mt-2 font-bold">
                      ⏰ Time is up! Challenge has ended.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Challenge;
