import React, { useState } from 'react';
import { Bell, Check, Star, Trophy, MessageSquare, AlertCircle, Filter, MoreVertical } from 'lucide-react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Notifications = () => {
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'review',
      title: 'New Review Received',
      message: 'Your project "CAD Engine Design" received a 4-star review from Alex Johnson',
      time: '2 hours ago',
      read: false,
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      id: 2,
      type: 'certification',
      title: 'Certification Progress',
      message: 'You\'re 80% complete with your ME2 - Intermediate Mechanical Engineer certification',
      time: '4 hours ago',
      read: false,
      icon: Trophy,
      color: 'text-blue-500'
    },
    {
      id: 3,
      type: 'comment',
      title: 'New Comment',
      message: 'Sarah Wilson commented on your "Hydraulic System Analysis" project',
      time: '6 hours ago',
      read: true,
      icon: MessageSquare,
      color: 'text-green-500'
    },
    {
      id: 4,
      type: 'challenge',
      title: 'New Challenge Available',
      message: 'A new expert-level challenge "Advanced Thermodynamics" has been posted',
      time: '1 day ago',
      read: true,
      icon: AlertCircle,
      color: 'text-purple-500'
    },
    {
      id: 5,
      type: 'rank',
      title: 'Rank Update',
      message: 'Congratulations! You\'ve reached rank #15 in the mechanical engineering leaderboard',
      time: '2 days ago',
      read: true,
      icon: Trophy,
      color: 'text-orange-500'
    },
    {
      id: 6,
      type: 'review',
      title: 'Review Reminder',
      message: 'Don\'t forget to review "Gear Design Project" by Michael Chen',
      time: '3 days ago',
      read: true,
      icon: Bell,
      color: 'text-gray-500'
    }
  ];

  const getFilteredNotifications = () => {
    if (filter === 'all') return notifications;
    if (filter === 'unread') return notifications.filter(n => !n.read);
    return notifications.filter(n => n.type === filter);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    // In a real app, this would update the backend
    console.log(`Marking notification ${id} as read`);
  };

  const markAllAsRead = () => {
    // In a real app, this would update the backend
    console.log('Marking all notifications as read');
  };

  const deleteNotification = (id: number) => {
    // In a real app, this would delete from backend
    console.log(`Deleting notification ${id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <LoggedInNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
              <p className="text-muted-foreground mt-2">
                Stay updated with your latest activities and achievements
              </p>
            </div>
            <div className="flex items-center gap-4">
              {unreadCount > 0 && (
                <Button variant="outline" onClick={markAllAsRead}>
                  Mark all as read
                </Button>
              )}
              <Badge variant="secondary" className="flex items-center gap-1">
                <Bell className="h-3 w-3" />
                {unreadCount} unread
              </Badge>
            </div>
          </div>

          <Tabs value={filter} onValueChange={setFilter} className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="review">Reviews</TabsTrigger>
              <TabsTrigger value="certification">Certifications</TabsTrigger>
              <TabsTrigger value="challenge">Challenges</TabsTrigger>
              <TabsTrigger value="rank">Rankings</TabsTrigger>
            </TabsList>

            <TabsContent value={filter} className="mt-6">
              <div className="space-y-4">
                {getFilteredNotifications().length === 0 ? (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">No notifications</h3>
                      <p className="text-muted-foreground text-center">
                        {filter === 'unread' 
                          ? "You're all caught up! No unread notifications."
                          : `No ${filter} notifications found.`
                        }
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  getFilteredNotifications().map((notification) => {
                    const Icon = notification.icon;
                    return (
                      <Card 
                        key={notification.id} 
                        className={`transition-all hover:shadow-md ${
                          !notification.read ? 'border-primary/50 bg-primary/5' : ''
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                              <div className={`flex-shrink-0 p-2 rounded-full bg-background ${notification.color}`}>
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="text-sm font-semibold text-foreground">
                                    {notification.title}
                                  </h3>
                                  {!notification.read && (
                                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {notification.time}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => markAsRead(notification.id)}
                                  className="h-8 w-8 p-0"
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  {!notification.read && (
                                    <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                                      Mark as read
                                    </DropdownMenuItem>
                                  )}
                                  <DropdownMenuItem 
                                    onClick={() => deleteNotification(notification.id)}
                                    className="text-destructive"
                                  >
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })
                )}
              </div>
            </TabsContent>
          </Tabs>

          {/* Notification Settings Link */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg">Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Want to customize what notifications you receive? You can manage your notification preferences in settings.
              </p>
              <Button variant="outline" asChild>
                <a href="/settings">Manage Preferences</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Notifications;