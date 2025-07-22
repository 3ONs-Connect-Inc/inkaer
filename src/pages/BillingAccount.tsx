import React, { useState } from 'react';
import { CreditCard, Download, Calendar, DollarSign, User, Mail, Phone, MapPin, Edit, Plus, Trash2 } from 'lucide-react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BillingAccount = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const currentPlan = {
    name: 'Premium',
    price: 29,
    billing: 'monthly',
    nextBilling: '2024-02-15',
    features: ['Unlimited storage', 'Priority support', 'Advanced analytics', 'Custom branding']
  };

  const paymentMethods = [
    {
      id: 1,
      type: 'card',
      brand: 'Visa',
      last4: '4242',
      expiry: '12/25',
      isDefault: true
    },
    {
      id: 2,
      type: 'card',
      brand: 'Mastercard',
      last4: '8888',
      expiry: '08/26',
      isDefault: false
    }
  ];

  const invoices = [
    {
      id: 'INV-001',
      date: '2024-01-15',
      amount: 29.00,
      status: 'paid',
      description: 'Premium Plan - January 2024'
    },
    {
      id: 'INV-002',
      date: '2023-12-15',
      amount: 29.00,
      status: 'paid',
      description: 'Premium Plan - December 2023'
    },
    {
      id: 'INV-003',
      date: '2023-11-15',
      amount: 29.00,
      status: 'paid',
      description: 'Premium Plan - November 2023'
    },
    {
      id: 'INV-004',
      date: '2023-10-15',
      amount: 29.00,
      status: 'paid',
      description: 'Premium Plan - October 2023'
    }
  ];

  const accountInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Tech Solutions Inc.',
    address: {
      street: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      country: 'United States'
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Current Plan
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Change Plan
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold">{currentPlan.name}</h3>
              <p className="text-muted-foreground">
                ${currentPlan.price}/{currentPlan.billing}
              </p>
            </div>
            <Badge variant="secondary">Active</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Next billing date</p>
              <p className="text-sm">{new Date(currentPlan.nextBilling).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Billing cycle</p>
              <p className="text-sm capitalize">{currentPlan.billing}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Plan features</p>
            <ul className="text-sm space-y-1">
              {currentPlan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Usage & Limits */}
      <Card>
        <CardHeader>
          <CardTitle>Usage & Limits</CardTitle>
          <CardDescription>Your current usage for this billing period</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Storage Used</span>
                <span>2.3 GB / Unlimited</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Projects Uploaded</span>
                <span>12 / Unlimited</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Reviews Requested</span>
                <span>45 / Unlimited</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPaymentMethods = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Payment Methods</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Payment Method
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Payment Method</DialogTitle>
              <DialogDescription>Add a new credit card to your account</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
              <div>
                <Label htmlFor="cardName">Cardholder Name</Label>
                <Input id="cardName" placeholder="John Doe" />
              </div>
              <Button className="w-full">Add Card</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {paymentMethods.map((method) => (
          <Card key={method.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-muted rounded">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {method.brand} •••• {method.last4}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Expires {method.expiry}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {method.isDefault && (
                    <Badge variant="secondary">Default</Badge>
                  )}
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderBillingHistory = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Billing History</h3>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Download All
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{new Date(invoice.date).toLocaleDateString()}</TableCell>
                <TableCell>{invoice.description}</TableCell>
                <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant={invoice.status === 'paid' ? 'default' : 'destructive'}>
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );

  const renderAccountDetails = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Account Information
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={accountInfo.name} readOnly />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={accountInfo.email} readOnly />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value={accountInfo.phone} readOnly />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" value={accountInfo.company} readOnly />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="street">Street Address</Label>
            <Input id="street" value={accountInfo.address.street} readOnly />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" value={accountInfo.address.city} readOnly />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" value={accountInfo.address.state} readOnly />
            </div>
            <div>
              <Label htmlFor="zip">ZIP Code</Label>
              <Input id="zip" value={accountInfo.address.zip} readOnly />
            </div>
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input id="country" value={accountInfo.address.country} readOnly />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <LoggedInNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Billing & Account</h1>
            <p className="text-muted-foreground mt-2">
              Manage your subscription, payment methods, and account details
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="payment">Payment Methods</TabsTrigger>
              <TabsTrigger value="history">Billing History</TabsTrigger>
              <TabsTrigger value="account">Account Details</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              {renderOverview()}
            </TabsContent>

            <TabsContent value="payment" className="mt-6">
              {renderPaymentMethods()}
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              {renderBillingHistory()}
            </TabsContent>

            <TabsContent value="account" className="mt-6">
              {renderAccountDetails()}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BillingAccount;