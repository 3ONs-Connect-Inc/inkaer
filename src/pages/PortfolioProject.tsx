
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Star, ThumbsUp, ThumbsDown, MessageSquare, FileText, Download } from 'lucide-react';
import { toast } from 'sonner';

interface Vote {
  id: string;
  type: 'upvote' | 'downvote';
  comment: string;
  timestamp: string;
  author: string;
}

interface Grade {
  id: string;
  rating: number;
  comment: string;
  timestamp: string;
  author: string;
  votes: Vote[];
}

const PortfolioProject = () => {
  const { id } = useParams();
  const [grades, setGrades] = useState<Grade[]>([
    {
      id: '1',
      rating: 4,
      comment: 'Excellent work on the thermal analysis. The methodology is sound and results are well-presented.',
      timestamp: '2 days ago',
      author: 'Dr. Sarah Chen',
      votes: [
        {
          id: 'v1',
          type: 'upvote',
          comment: 'I agree, the thermal analysis is very thorough.',
          timestamp: '1 day ago',
          author: 'Mike Johnson'
        }
      ]
    },
    {
      id: '2',
      rating: 5,
      comment: 'Outstanding attention to detail in the CAD modeling. Professional quality work.',
      timestamp: '1 week ago',
      author: 'Prof. David Kumar',
      votes: []
    }
  ]);

  const [newGrade, setNewGrade] = useState({ rating: 5, comment: '' });
  const [voteComment, setVoteComment] = useState('');
  const [isGradeDialogOpen, setIsGradeDialogOpen] = useState(false);
  const [isVoteDialogOpen, setIsVoteDialogOpen] = useState(false);
  const [voteType, setVoteType] = useState<'upvote' | 'downvote'>('upvote');
  const [selectedGradeId, setSelectedGradeId] = useState<string>('');

  // Mock project data
  const project = {
    title: 'Advanced Heat Exchanger Design Optimization',
    author: 'Sarah Mitchell',
    submissionDate: '2 weeks ago',
    description: 'This project presents a comprehensive thermal analysis and optimization of a shell-and-tube heat exchanger design. The work includes detailed CFD simulations, performance analysis, and design recommendations for improved efficiency. The study demonstrates advanced engineering principles and practical application of thermal engineering concepts.',
    stepFile: 'heat_exchanger_model.step',
    pdfFile: 'thermal_analysis_report.pdf',
    stepFileUrl: '/files/heat_exchanger_model.step', // Mock download URL
    pdfFileUrl: '/files/thermal_analysis_report.pdf', // Mock download URL
    tags: ['Thermal Engineering', 'CFD', 'Heat Transfer', 'Design Optimization']
  };

  const averageGrade = grades.length > 0 ? grades.reduce((sum, grade) => sum + grade.rating, 0) / grades.length : 0;

  const handleGradeSubmit = () => {
    if (!newGrade.comment.trim()) {
      toast.error('Please add a comment before submitting your grade.');
      return;
    }

    const grade: Grade = {
      id: Date.now().toString(),
      rating: newGrade.rating,
      comment: newGrade.comment,
      timestamp: 'Just now',
      author: 'Current User', // In real app, this would be the logged-in user's name
      votes: []
    };

    setGrades([grade, ...grades]);
    setNewGrade({ rating: 5, comment: '' });
    setIsGradeDialogOpen(false);
    toast.success('Grade submitted successfully!');
  };

  const handleVoteSubmit = () => {
    if (!voteComment.trim()) {
      toast.error('Please add a comment before submitting your vote.');
      return;
    }

    const vote: Vote = {
      id: Date.now().toString(),
      type: voteType,
      comment: voteComment,
      timestamp: 'Just now',
      author: 'Current User' // In real app, this would be the logged-in user's name
    };

    setGrades(grades.map(grade => 
      grade.id === selectedGradeId 
        ? { ...grade, votes: [vote, ...grade.votes] }
        : grade
    ));

    setVoteComment('');
    setIsVoteDialogOpen(false);
    toast.success(`${voteType === 'upvote' ? 'Upvote' : 'Downvote'} submitted successfully!`);
  };

  const openVoteDialog = (gradeId: string, type: 'upvote' | 'downvote') => {
    setSelectedGradeId(gradeId);
    setVoteType(type);
    setIsVoteDialogOpen(true);
  };

  const getVoteCounts = (votes: Vote[]) => {
    const upvotes = votes.filter(vote => vote.type === 'upvote').length;
    const downvotes = votes.filter(vote => vote.type === 'downvote').length;
    return { upvotes, downvotes };
  };

  const handleDownload = (fileUrl: string, fileName: string) => {
    // In a real app, this would handle the actual file download
    // For now, we'll simulate the download action
    toast.success(`Downloading ${fileName}...`);
    
    // Mock download implementation
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,170,254,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,120,200,0.08)_0%,transparent_50%)]"></div>

      <div className="relative z-10">
        <LoggedInNavbar />
        
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Project Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-600 text-white">Portfolio Project</Badge>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{averageGrade.toFixed(1)} ({grades.length} grades)</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-3xl font-sora font-bold text-gray-900 mb-2">
                {project.title}
              </h1>
              <p className="text-gray-600 font-sora">
                by {project.author} • Submitted {project.submissionDate}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="font-sora">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* File Viewers */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* STEP File Viewer */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 font-sora">
                      <FileText className="w-5 h-5" />
                      3D Model ({project.stepFile})
                    </CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(project.stepFileUrl, project.stepFile)}
                      className="font-sora"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download STEP
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 font-sora">3D Model Viewer</p>
                      <p className="text-sm text-gray-400">STEP file preview would appear here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* PDF Viewer */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 font-sora">
                      <FileText className="w-5 h-5" />
                      Report ({project.pdfFile})
                    </CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(project.pdfFileUrl, project.pdfFile)}
                      className="font-sora"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 font-sora">PDF Viewer</p>
                      <p className="text-sm text-gray-400">PDF preview would appear here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Submission Description */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 mb-8">
              <CardHeader>
                <CardTitle className="font-sora">Project Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sora leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>

            {/* Grading Section */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between font-sora">
                  Grades & Comments
                  <Dialog open={isGradeDialogOpen} onOpenChange={setIsGradeDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-inkaer-blue hover:bg-inkaer-dark-blue">
                        <Star className="w-4 h-4 mr-2" />
                        Grade Project
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Grade This Project</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Rating</label>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                onClick={() => setNewGrade({ ...newGrade, rating: star })}
                                className={`w-8 h-8 ${star <= newGrade.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              >
                                <Star className="w-full h-full fill-current" />
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Comment *</label>
                          <Textarea
                            value={newGrade.comment}
                            onChange={(e) => setNewGrade({ ...newGrade, comment: e.target.value })}
                            placeholder="Share your feedback on this project..."
                            rows={4}
                          />
                        </div>
                        <Button onClick={handleGradeSubmit} className="w-full">
                          Submit Grade
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {grades.map((grade) => {
                    const { upvotes, downvotes } = getVoteCounts(grade.votes);
                    return (
                      <div key={grade.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${star <= grade.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span className="font-medium text-gray-900">{grade.author}</span>
                            <span className="text-sm text-gray-500">{grade.timestamp}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Dialog open={isVoteDialogOpen} onOpenChange={setIsVoteDialogOpen}>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => openVoteDialog(grade.id, 'upvote')}
                                  className="text-green-600 hover:text-green-700"
                                >
                                  <ThumbsUp className="w-4 h-4 mr-1" />
                                  {upvotes}
                                </Button>
                              </DialogTrigger>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => openVoteDialog(grade.id, 'downvote')}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <ThumbsDown className="w-4 h-4 mr-1" />
                                  {downvotes}
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>
                                    {voteType === 'upvote' ? 'Upvote' : 'Downvote'} Comment
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <label className="block text-sm font-medium mb-2">Comment *</label>
                                    <Textarea
                                      value={voteComment}
                                      onChange={(e) => setVoteComment(e.target.value)}
                                      placeholder={`Why are you ${voteType === 'upvote' ? 'upvoting' : 'downvoting'} this comment?`}
                                      rows={3}
                                    />
                                  </div>
                                  <Button onClick={handleVoteSubmit} className="w-full">
                                    Submit {voteType === 'upvote' ? 'Upvote' : 'Downvote'}
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                        <p className="text-gray-700 font-sora mb-3">{grade.comment}</p>
                        
                        {/* Votes/Replies */}
                        {grade.votes.length > 0 && (
                          <div className="ml-4 border-l-2 border-gray-200 pl-4 space-y-3">
                            {grade.votes.map((vote) => (
                              <div key={vote.id} className="text-sm">
                                <div className="flex items-center gap-2 mb-1">
                                  {vote.type === 'upvote' ? (
                                    <ThumbsUp className="w-3 h-3 text-green-600" />
                                  ) : (
                                    <ThumbsDown className="w-3 h-3 text-red-600" />
                                  )}
                                  <span className="font-medium text-gray-900">{vote.author}</span>
                                  <span className="text-gray-500">{vote.timestamp}</span>
                                </div>
                                <p className="text-gray-700">{vote.comment}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
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

export default PortfolioProject;
