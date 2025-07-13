
import React, { useState } from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChatInput } from '@/components/ui/chat-input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, FileText, File, AlertTriangle, X } from 'lucide-react';
import { toast } from 'sonner';

const UploadPortfolio = () => {
  const [stepFile, setStepFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [explanation, setExplanation] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('mechanical');
  const [errors, setErrors] = useState({
    stepFile: '',
    pdfFile: '',
    explanation: '',
    general: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const engineeringDomains = [
    { value: 'mechanical', label: 'Mechanical Engineering', available: true },
    { value: 'electrical', label: 'Electrical and Mechatronics', available: false },
    { value: 'civil', label: 'Civil / Structural', available: false },
    { value: 'software', label: 'Software (Backend)', available: false },
    { value: 'uiux', label: 'UI/UX (Product Usability Design)', available: false },
    { value: 'rf', label: 'Radio Frequency (RF)', available: false },
    { value: 'antenna', label: 'Antenna', available: false },
    { value: 'embedded', label: 'Embedded', available: false },
    { value: 'aerospace', label: 'Aerospace', available: false },
  ];

  const clearErrors = () => {
    setErrors({
      stepFile: '',
      pdfFile: '',
      explanation: '',
      general: ''
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

  const handleStepUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      general: ''
    };

    if (!stepFile) {
      newErrors.stepFile = 'STEP file is required';
    }

    if (!pdfFile) {
      newErrors.pdfFile = 'PDF file is required';
    }

    if (!explanation.trim()) {
      newErrors.explanation = 'Project explanation is required';
    } else if (explanation.trim().length < 50) {
      newErrors.explanation = 'Explanation must be at least 50 characters long';
    } else if (explanation.trim().length > 2000) {
      newErrors.explanation = 'Explanation must not exceed 2000 characters';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async () => {
    if (!validateSubmission()) {
      toast.error('Please fix the errors before submitting');
      return;
    }

    setIsSubmitting(true);
    clearErrors();

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate potential server errors
      const shouldFail = Math.random() < 0.1; // 10% chance of failure
      if (shouldFail) {
        throw new Error('Server temporarily unavailable. Please try again.');
      }

      toast.success('Project submitted successfully!');
      console.log('Submitting project:', { stepFile, pdfFile, explanation, domain: selectedDomain });
      
      // Reset form on success
      setStepFile(null);
      setPdfFile(null);
      setExplanation('');
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setErrors(prev => ({ ...prev, general: errorMessage }));
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeFile = (type: 'step' | 'pdf') => {
    if (type === 'step') {
      setStepFile(null);
      setErrors(prev => ({ ...prev, stepFile: '' }));
    } else {
      setPdfFile(null);
      setErrors(prev => ({ ...prev, pdfFile: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,170,254,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,120,200,0.08)_0%,transparent_50%)]"></div>

      <div className="relative z-10">
        <LoggedInNavbar />
        
        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-4">
                Upload Your Portfolio
              </h1>
              <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto mb-6">
                Submit your engineering projects and showcase your technical skills.
              </p>
              
              {/* Engineering Domain Dropdown */}
              <div className="max-w-md mx-auto">
                <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                  <SelectTrigger className="w-full bg-white/80 backdrop-blur-sm border-gray-200 font-sora">
                    <SelectValue placeholder="Select Engineering Domain" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-md border-gray-200">
                    {engineeringDomains.map((domain) => (
                      <SelectItem 
                        key={domain.value} 
                        value={domain.value}
                        disabled={!domain.available}
                        className="font-sora"
                      >
                        <div className="flex items-center justify-between w-full">
                          <span>{domain.label}</span>
                          {!domain.available && (
                            <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* General Error Alert */}
            {errors.general && (
              <Alert variant="destructive" className="mb-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{errors.general}</AlertDescription>
              </Alert>
            )}

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* STEP File Viewer */}
              <Card className={`bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg ${errors.stepFile ? 'border-red-300' : ''}`}>
                <CardHeader className="text-center">
                  <CardTitle className="font-sora text-gray-900 flex items-center justify-center gap-2">
                    <File className="w-6 h-6 text-inkaer-blue" />
                    STEP File Viewer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className={`min-h-[200px] bg-gray-50 rounded-lg border-2 border-dashed flex items-center justify-center ${
                    errors.stepFile ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}>
                    {stepFile ? (
                      <div className="text-center relative">
                        <File className="w-16 h-16 text-inkaer-blue mx-auto mb-2" />
                        <p className="font-sora font-medium text-gray-900">{stepFile.name}</p>
                        <p className="text-sm text-gray-500">
                          {(stepFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile('step')}
                          className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 bg-red-500 hover:bg-red-600 text-white"
                        >
                          <X className="h-3 w-3" />
                        </Button>
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
                      disabled={isSubmitting}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload STEP File
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* PDF Viewer */}
              <Card className={`bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg ${errors.pdfFile ? 'border-red-300' : ''}`}>
                <CardHeader className="text-center">
                  <CardTitle className="font-sora text-gray-900 flex items-center justify-center gap-2">
                    <FileText className="w-6 h-6 text-inkaer-blue" />
                    PDF Viewer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className={`min-h-[200px] bg-gray-50 rounded-lg border-2 border-dashed flex items-center justify-center ${
                    errors.pdfFile ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}>
                    {pdfFile ? (
                      <div className="text-center relative">
                        <FileText className="w-16 h-16 text-inkaer-blue mx-auto mb-2" />
                        <p className="font-sora font-medium text-gray-900">{pdfFile.name}</p>
                        <p className="text-sm text-gray-500">
                          {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile('pdf')}
                          className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 bg-red-500 hover:bg-red-600 text-white"
                        >
                          <X className="h-3 w-3" />
                        </Button>
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
                      disabled={isSubmitting}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Submission Explanation */}
            <Card className={`bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg mb-8 ${errors.explanation ? 'border-red-300' : ''}`}>
              <CardHeader>
                <CardTitle className="font-sora text-gray-900">Submission Explanation</CardTitle>
                <p className="text-sm text-gray-600">
                  {explanation.length}/2000 characters (minimum 50 required)
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
                    placeholder="Explain your project, design decisions, and technical approach... (minimum 50 characters)"
                    className="min-h-32 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
                    disabled={isSubmitting}
                  />
                  <div className="flex items-center justify-end p-3 pt-0">
                    <Button
                      type="submit" 
                      className="bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Project'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default UploadPortfolio;
