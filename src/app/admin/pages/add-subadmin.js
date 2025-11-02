'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const AddSubAdminPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    password: '',
    confirmPassword: '',
    department: '',
    notes: '',
    permissions: {
      properties: false,
      items: false,
      services: false,
      users: false,
      transactions: false,
      analytics: false,
      settings: false
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePermissionChange = (permission, checked) => {
    setFormData(prev => ({
      ...prev,
      permissions: { ...prev.permissions, [permission]: checked }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.role) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate sub-admin ID
      const existingSubAdmins = JSON.parse(localStorage.getItem('subAdmins') || '[]');
      const nextId = existingSubAdmins.length + 7; // Start from SA007
      const newSubAdminId = `SA${nextId.toString().padStart(3, '0')}`;

      const newSubAdmin = {
        id: newSubAdminId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        password: formData.password, // In production, this should be hashed
        department: formData.department,
        notes: formData.notes,
        status: 'Pending',
        joinDate: new Date().toISOString().split('T')[0],
        lastActive: 'Never',
        avatar: '/hero-image.jpeg',
        permissions: Object.keys(formData.permissions).filter(key => formData.permissions[key])
      };

      // Save to localStorage
      const updatedSubAdmins = [...existingSubAdmins, newSubAdmin];
      localStorage.setItem('subAdmins', JSON.stringify(updatedSubAdmins));

      toast.success('Sub-admin added successfully!');
      
      setTimeout(() => {
        router.push('/admin/subadmins');
      }, 1000);
    } catch (error) {
      toast.error('Failed to add sub-admin');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="space-y-6 px-6 pb-12">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={handleCancel}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Add Sub-Admin</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 border-b border-black10 pb-2">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter full name"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter email address"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter phone number"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="role">Role *</Label>
              <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="moderator">Moderator</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="analyst">Analyst</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                placeholder="Enter department"
                className="mt-1"
              />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 border-b border-black10 pb-2">Security</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Enter password"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password *</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                placeholder="Confirm password"
                className="mt-1"
              />
            </div>
          </div>
        </div>

        {/* Permissions */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 border-b border-black10 pb-2">Permissions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(formData.permissions).map((permission) => (
              <div key={permission} className="flex items-center space-x-2">
                <Checkbox
                  id={permission}
                  checked={formData.permissions[permission]}
                  onCheckedChange={(checked) => handlePermissionChange(permission, checked)}
                />
                <Label
                  htmlFor={permission}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer capitalize"
                >
                  {permission}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Notes */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 border-b border-black10 pb-2">Additional Information</h2>
          
          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="Add any additional notes..."
              className="mt-1 min-h-[100px]"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 pt-4 border-t border-black10">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white hover:bg-primary/90"
          >
            {isSubmitting ? 'Adding...' : 'Add Sub-Admin'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddSubAdminPage;
