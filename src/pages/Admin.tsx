import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, FormSubmission } from '../lib/supabase';
import { Download, Eye, Filter, Search, Calendar, User, Mail, Phone, MapPin, MessageSquare, Lock, RefreshCw } from 'lucide-react';

const Admin = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'hero' | 'contact'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const authStatus = sessionStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      fetchSubmissions();
    } else {
      // Redirect to home page if not authenticated
      navigate('/');
    }
  }, [navigate]);

  // Test Supabase connection
  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log('Testing Supabase connection...');
        const { data, error } = await supabase
          .from('form_submissions')
          .select('count', { count: 'exact' });
        
        console.log('Connection test result:', { data, error });
      } catch (err) {
        console.error('Connection test failed:', err);
      }
    };
    
    testConnection();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      console.log('Fetching submissions from Supabase...');
      
      // Try with service role key for admin access
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      console.log('Supabase response:', { data, error, dataLength: data?.length });

      if (error) {
        console.error('Supabase error:', error);
        // Try alternative approach - bypass RLS
        console.log('Trying alternative query...');
        const { data: altData, error: altError } = await supabase
          .rpc('get_all_submissions');
        
        console.log('Alternative query result:', { altData, altError });
        
        if (altError) {
          throw error; // Use original error
        }
        
        setSubmissions(altData || []);
        console.log('Alternative submissions loaded:', altData?.length || 0);
        return;
      }

      console.log('Submissions loaded:', data?.length || 0);
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      setError(`Failed to load submissions: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = 
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (submission.phone && submission.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (submission.location && submission.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (submission.project_description && submission.project_description.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter = filterType === 'all' || submission.form_type === filterType;

    return matchesSearch && matchesFilter;
  });

  const sortedSubmissions = [...filteredSubmissions].sort((a, b) => {
    if (!a.created_at || !b.created_at) return 0;
    return sortBy === 'newest' 
      ? new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      : new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  });

  const exportToCSV = () => {
    const csvContent = [
      ['Form Type', 'Name', 'Email', 'Phone', 'Location', 'Project Description', 'Created At'],
      ...sortedSubmissions.map(sub => [
        sub.form_type,
        sub.name,
        sub.email,
        sub.phone || '',
        sub.location || '',
        sub.project_description || '',
        sub.created_at ? new Date(sub.created_at).toLocaleString() : ''
      ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `form-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const getFormTypeColor = (type: string) => {
    return type === 'hero' ? 'bg-[#0b1c26] bg-opacity-10 text-[#0b1c26]' : 'bg-[#0b1c26] bg-opacity-20 text-[#0b1c26]';
  };

  const getFormTypeLabel = (type: string) => {
    return type === 'hero' ? 'Hero Form' : 'Contact Form';
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Lock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Access denied. Redirecting...</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fff' }}>
      {/* Header */}
      <div className="border-b border-gray-200 pt-20" style={{ backgroundColor: '#0b1c26' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-medium text-white leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>Form Submissions</h1>
              <p className="text-white/70 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>Manage and view all form submissions</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={exportToCSV}
                className="bg-white text-[#0b1c26] px-6 py-3 hover:bg-white/90 transition-colors flex items-center space-x-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </button>
              <button
                onClick={fetchSubmissions}
                className="bg-white bg-opacity-20 text-white border border-white border-opacity-30 px-6 py-3 hover:bg-opacity-30 transition-colors flex items-center space-x-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
              <button
                onClick={handleLogout}
                className="bg-white bg-opacity-20 text-white border border-white border-opacity-30 px-6 py-3 hover:bg-opacity-30 transition-colors flex items-center space-x-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Lock className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-[#0b1c26] bg-opacity-10">
                <User className="w-6 h-6 text-[#0b1c26]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>Total Submissions</p>
                <p className="text-2xl font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>{submissions.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-[#0b1c26] bg-opacity-10">
                <Eye className="w-6 h-6 text-[#0b1c26]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>Hero Forms</p>
                <p className="text-2xl font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {submissions.filter(s => s.form_type === 'hero').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-[#0b1c26] bg-opacity-10">
                <Mail className="w-6 h-6 text-[#0b1c26]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>Contact Forms</p>
                <p className="text-2xl font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {submissions.filter(s => s.form_type === 'contact').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border border-gray-200 mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#0d0c09] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search submissions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0d0c09] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Filter by Form Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as 'all' | 'hero' | 'contact')}
                className="w-full px-3 py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <option value="all">All Forms</option>
                <option value="hero">Hero Form</option>
                <option value="contact">Contact Form</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0d0c09] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Sort by Date</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
                className="w-full px-3 py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submissions List */}
        <div className="bg-white border border-gray-200">
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-400">
              <p className="text-red-700" style={{ fontFamily: 'Inter, sans-serif' }}>{error}</p>
            </div>
          )}
          
          {sortedSubmissions.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <User className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p style={{ fontFamily: 'Inter, sans-serif' }}>No submissions found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#0d0c09] uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Form Type
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#0d0c09] uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Contact Info
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#0d0c09] uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Details
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#0d0c09] uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-medium ${getFormTypeColor(submission.form_type)}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                          {getFormTypeLabel(submission.form_type)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <User className="w-4 h-4 mr-2 text-[#0b1c26]" />
                            {submission.name}
                          </div>
                          <div className="flex items-center text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <Mail className="w-4 h-4 mr-2 text-[#0b1c26]" />
                            {submission.email}
                          </div>
                          {submission.phone && (
                            <div className="flex items-center text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                              <Phone className="w-4 h-4 mr-2 text-[#0b1c26]" />
                              {submission.phone}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-2">
                          {submission.location && (
                            <div className="flex items-center text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                              <MapPin className="w-4 h-4 mr-2 text-[#0b1c26]" />
                              {submission.location}
                            </div>
                          )}
                          {submission.project_description && (
                            <div className="text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                              <div className="flex items-start">
                                <MessageSquare className="w-4 h-4 mr-2 text-[#0b1c26] mt-0.5 flex-shrink-0" />
                                <span className="line-clamp-2">{submission.project_description}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-[#0b1c26]" />
                          {submission.created_at ? new Date(submission.created_at).toLocaleDateString() : 'N/A'}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {submission.created_at ? new Date(submission.created_at).toLocaleTimeString() : ''}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
