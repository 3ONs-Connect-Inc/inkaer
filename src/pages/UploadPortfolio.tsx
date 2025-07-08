import React, { useState } from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChatInput } from '@/components/ui/chat-input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, FileText, File } from 'lucide-react';
import { toast } from 'sonner';

const UploadPortfolio = () => {
  const [stepFile, setStepFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [explanation, setExplanation] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('mechanical');

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
    
    toast.success('Project submitted successfully!');
    console.log('Submitting project:', { stepFile, pdfFile, explanation, domain: selectedDomain });
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

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* STEP File Viewer */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="font-sora text-gray-900 flex items-center justify-center gap-2">
                    <File className="w-6 h-6 text-inkaer-blue" />
                    STEP File Viewer
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

              {/* PDF Viewer */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="font-sora text-gray-900 flex items-center justify-center gap-2">
                    <FileText className="w-6 h-6 text-inkaer-blue" />
                    PDF Viewer
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
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg mb-8">
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
                    placeholder="Explain your project, design decisions, and technical approach..."
                    className="min-h-32 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
                  />
                  <div className="flex items-center justify-end p-3 pt-0">
                    <Button
                      type="submit" 
                      className="bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold"
                    >
                      Submit Project
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
