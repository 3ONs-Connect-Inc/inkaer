
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChatInput } from '@/components/ui/chat-input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Clock, Download, Upload, FileText, File, X, WifiOff } from 'lucide-react';
import { toast } from 'sonner';

const Challenge = () => {
  const { id } = useParams();
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [stepFile, setStepFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [explanation, setExplanation] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [errors, setErrors] = useState({
    stepFile: '',
    pdfFile: '',
    explanation: '',
    general: '',
    connection: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [challengeEnded, setChallengeEnded] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('online');

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

  // Monitor connection status
  useEffect(() => {
    const handleOnline = () => {
      setConnectionStatus('online');
      setErrors(prev => ({ ...prev, connection: '' }));
      toast.success('Connection restored');
    };
    
    const handleOffline = () => {
      setConnectionStatus('offline');
      setErrors(prev => ({ ...prev, connection: 'You are currently offline. Your progress is saved locally and will sync when connection is restored.' }));
      toast.error('Connection lost - working offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (!showDisclaimer && timeRemaining === 0) {
      setTimeRemaining(challengeData.durationInMinutes * 60);
    }
  }, [showDisclaimer, challengeData.durationInMinutes, timeRemaining]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timeRemaining > 0 && !challengeEnded) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setChallengeEnded(true);
            toast.error('Time is up! Your challenge has ended.');
            return 0;
          }
          if (prev === 301) { // 5 minutes remaining
            toast.warning('⚠️ Only 5 minutes remaining!');
          }
          if (prev === 61) { // 1 minute remaining
            toast.warning('⚠️ Only 1 minute remaining!');
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timeRemaining, challengeEnded]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const clearErrors = () => {
    setErrors({
      stepFile: '',
      pdfFile: '',
      explanation: '',
      general: '',
      connection: errors.connection // Keep connection error
    });
  };

  const validateFile = (file: File, type: 'step' | 'pdf') => {
    const maxSize = 50 * 1024 * 1024; // 50MB
    const minSize = 1024; // 1KB
    
    if (file.size > maxSize) {
      return `File size exceeds 50MB limit. Current size: ${(file.size / 1024 / 1024).toFixed(2)}MB`;
    }
    
    if (file.size < minSize) {
      return 'File appears to be corrupted or too small';
    }

    if (type === 'step') {
      const validExtensions = ['.step', '.stp'];
      const hasValidExtension = validExtensions.some(ext => 
        file.name.toLowerCase().endsWith(ext)
      );
      if (!hasValidExtension) {
        return 'Please upload a valid STEP file (.step or .stp)';
      }
    }

    if (type === 'pdf') {
      if (!file.name.toLowerCase().endsWith('.pdf')) {
        return 'Please upload a valid PDF file';
      }
      if (file.type !== 'application/pdf') {
        return 'File type is not recognized as PDF';
      }
    }

    return '';
  };

  const handleProceed = () => {
    setShowDisclaimer(false);
  };

  const handleStepUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (challengeEnded) {
      toast.error('Challenge has ended. No more uploads allowed.');
      return;
    }

    const file = event.target.files?.[0];
    clearErrors();
    
    if (!file) return;

    const error = validateFile(file, 'step');
    if (error) {
      setErrors(prev => ({ ...prev, stepFile: error }));
      toast.error(error);
      return;
    }

    setStepFile(file);
    toast.success('STEP file uploaded successfully');
  };

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (challengeEnded) {
      toast.error('Challenge has ended. No more uploads allowed.');
      return;
    }

    const file = event.target.files?.[0];
    clearErrors();
    
    if (!file) return;

    const error = validateFile(file, 'pdf');
    if (error) {
      setErrors(prev => ({ ...prev, pdfFile: error }));
      toast.error(error);
      return;
    }

    setPdfFile(file);
    toast.success('PDF file uploaded successfully');
  };

  const validateSubmission = () => {
    const newErrors = {
      stepFile: '',
      pdfFile: '',
      explanation: '',
      general: '',
      connection: errors.connection
    };

    if (!stepFile) {
      newErrors.stepFile = 'STEP file is required';
    }

    if (!pdfFile) {
      newErrors.pdfFile = 'PDF file is required';
    }

    if (!explanation.trim()) {
      newErrors.explanation = 'Challenge explanation is required';
    } else if (explanation.trim().length < 100) {
      newErrors.explanation = 'Explanation must be at least 100 characters long for challenges';
    } else if (explanation.trim().length > 3000) {
      newErrors.explanation = 'Explanation must not exceed 3000 characters';
    }

    if (challengeEnded) {
      newErrors.general = 'Challenge time has expired. Submission is no longer allowed.';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async () => {
    if (!validateSubmission()) {
      toast.error('Please fix the errors before submitting');
      return;
    }

    if (connectionStatus === 'offline') {
      toast.error('Cannot submit while offline. Please check your connection.');
      return;
    }

    setIsSubmitting(true);
    clearErrors();

    try {
      // Simulate API call with potential network issues
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const shouldFail = Math.random() < 0.15; // 15% chance of failure
          if (shouldFail) {
            reject(new Error('Network error: Failed to submit challenge. Please try again.'));
          } else {
            resolve(true);
          }
        }, 3000);
      });

      toast.success('Challenge submitted successfully!');
      console.log('Submitting challenge:', { 
        stepFile, 
        pdfFile, 
        explanation, 
        timeUsed: challengeData.durationInMinutes * 60 - timeRemaining 
      });
      
      setChallengeEnded(true);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred during submission';
      setErrors(prev => ({ ...prev, general: errorMessage }));
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = async (fileName: string) => {
    try {
      // Simulate download with potential failure
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const shouldFail = Math.random() < 0.1; // 10% chance of failure
          if (shouldFail) {
            reject(new Error(`Failed to download ${fileName}. Please try again.`));
          } else {
            resolve(true);
          }
        }, 1000);
      });
      
      toast.success(`Downloading ${fileName}`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Download failed');
    }
  };

  const removeFile = (type: 'step' | 'pdf') => {
    if (challengeEnded) {
      toast.error('Challenge has ended. No more changes allowed.');
      return;
    }

    if (type === 'step') {
      setStepFile(null);
      setErrors(prev => ({ ...prev, stepFile: '' }));
    } else {
      setPdfFile(null);
      setErrors(prev => ({ ...prev, pdfFile: '' }));
    }
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
                    <p>• Ensure stable internet connection throughout the challenge</p>
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
        <div className={`bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-20 ${
          challengeEnded ? 'bg-red-50' : ''
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-sora font-bold text-gray-900">
                {challengeData.title}
                {challengeEnded && (
                  <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                    ENDED
                  </span>
                )}
              </h1>
              <div className="flex items-center gap-4">
                {connectionStatus === 'offline' && (
                  <div className="flex items-center gap-2 text-red-500">
                    <WifiOff className="w-4 h-4" />
                    <span className="text-sm font-sora">Offline</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-lg font-sora font-bold">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className={`${
                    timeRemaining < 600 || challengeEnded ? 'text-red-500' : 'text-gray-700'
                  }`}>
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
            
            {/* Connection Error Alert */}
            {errors.connection && (
              <Alert variant={connectionStatus === 'offline' ? 'destructive' : 'default'}>
                <WifiOff className="h-4 w-4" />
                <AlertDescription>{errors.connection}</AlertDescription>
              </Alert>
            )}

            {/* General Error Alert */}
            {errors.general && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{errors.general}</AlertDescription>
              </Alert>
            )}

            {/* Challenge Ended Warning */}
            {challengeEnded && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Time is up! This challenge has ended. No further uploads or submissions are allowed.
                </AlertDescription>
              </Alert>
            )}
            
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
                          disabled={connectionStatus === 'offline'}
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
              <Card className={`bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg ${errors.stepFile ? 'border-red-300' : ''}`}>
                <CardHeader className="text-center">
                  <CardTitle className="font-sora text-gray-900 flex items-center justify-center gap-2">
                    <File className="w-6 h-6 text-inkaer-blue" />
                    Upload STEP File
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className={`min-h-[200px] bg-gray-50 rounded-lg border-2 border-dashed flex items-center justify-center ${
                    errors.stepFile ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  } ${challengeEnded ? 'opacity-50' : ''}`}>
                    {stepFile ? (
                      <div className="text-center relative">
                        <File className="w-16 h-16 text-inkaer-blue mx-auto mb-2" />
                        <p className="font-sora font-medium text-gray-900">{stepFile.name}</p>
                        <p className="text-sm text-gray-500">
                          {(stepFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        {!challengeEnded && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile('step')}
                            className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 bg-red-500 hover:bg-red-600 text-white"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-gray-500">
                        <File className="w-16 h-16 mx-auto mb-2 opacity-50" />
                        <p className="font-sora">No STEP file uploaded</p>
                        <p className="text-xs mt-1">Max file size: 50MB</p>
                      </div>
                    )}
                  </div>
                  {errors.stepFile && (
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>{errors.stepFile}</AlertDescription>
                    </Alert>
                  )}
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
                      disabled={isSubmitting || challengeEnded}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload STEP File
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* PDF Upload */}
              <Card className={`bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg ${errors.pdfFile ? 'border-red-300' : ''}`}>
                <CardHeader className="text-center">
                  <CardTitle className="font-sora text-gray-900 flex items-center justify-center gap-2">
                    <FileText className="w-6 h-6 text-inkaer-blue" />
                    Upload PDF File
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className={`min-h-[200px] bg-gray-50 rounded-lg border-2 border-dashed flex items-center justify-center ${
                    errors.pdfFile ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  } ${challengeEnded ? 'opacity-50' : ''}`}>
                    {pdfFile ? (
                      <div className="text-center relative">
                        <FileText className="w-16 h-16 text-inkaer-blue mx-auto mb-2" />
                        <p className="font-sora font-medium text-gray-900">{pdfFile.name}</p>
                        <p className="text-sm text-gray-500">
                          {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        {!challengeEnded && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile('pdf')}
                            className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 bg-red-500 hover:bg-red-600 text-white"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-gray-500">
                        <FileText className="w-16 h-16 mx-auto mb-2 opacity-50" />
                        <p className="font-sora">No PDF file uploaded</p>
                        <p className="text-xs mt-1">Max file size: 50MB</p>
                      </div>
                    )}
                  </div>
                  {errors.pdfFile && (
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>{errors.pdfFile}</AlertDescription>
                    </Alert>
                  )}
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
                      disabled={isSubmitting || challengeEnded}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Submission Explanation */}
            <Card className={`bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg ${errors.explanation ? 'border-red-300' : ''}`}>
              <CardHeader>
                <CardTitle className="font-sora text-gray-900">Submission Explanation</CardTitle>
                <p className="text-sm text-gray-600">
                  {explanation.length}/3000 characters (minimum 100 required for challenges)
                </p>
              </CardHeader>
              <CardContent>
                {errors.explanation && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{errors.explanation}</AlertDescription>
                  </Alert>
                )}
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
                    placeholder="Explain your approach, design decisions, and technical solutions... (minimum 100 characters for challenges)"
                    className="min-h-32 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
                    disabled={isSubmitting || challengeEnded}
                  />
                  <div className="flex items-center justify-end p-3 pt-0">
                    <Button
                      type="submit" 
                      className="bg-green-600 hover:bg-green-700 text-white font-sora font-semibold"
                      disabled={isSubmitting || challengeEnded || connectionStatus === 'offline'}
                    >
                      {isSubmitting ? 'Submitting...' : challengeEnded ? 'Challenge Ended' : 'Submit Challenge'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Countdown Timer */}
            <Card className={`bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg ${
              challengeEnded ? 'border-red-300' : ''
            }`}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-full ${
                    challengeEnded ? 'bg-red-50' : 'bg-gray-50'
                  }`}>
                    <Clock className={`w-6 h-6 ${challengeEnded ? 'text-red-500' : 'text-red-500'}`} />
                    <div>
                      <p className="text-sm text-gray-600 font-sora">
                        {challengeEnded ? 'Challenge Ended' : 'Time Remaining'}
                      </p>
                      <p className={`text-2xl font-sora font-bold ${
                        timeRemaining < 600 || challengeEnded ? 'text-red-500' : 'text-gray-900'
                      }`}>
                        {formatTime(timeRemaining)}
                      </p>
                    </div>
                  </div>
                  {timeRemaining < 600 && timeRemaining > 0 && (
                    <p className="text-red-500 font-sora mt-2 text-sm">
                      ⚠️ Less than 10 minutes remaining!
                    </p>
                  )}
                  {challengeEnded && (
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
