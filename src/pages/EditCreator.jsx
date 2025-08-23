import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function EditCreator() {
  const { id } = useParams() // Get creator ID from URL
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  })
  const [loading, setLoading] = useState(false)
  const [fetchLoading, setFetchLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Get the content creator's information from the database
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single()
        
        if (error) throw error
        
        // Load the content creator's information into the form
        setFormData({
          name: data.name || '',
          url: data.url || '',
          description: data.description || '',
          imageURL: data.imageURL || ''
        })
      } catch (error) {
        console.error('Error fetching creator:', error)
        setError(error.message)
      }
      setFetchLoading(false)
    }

    fetchCreator()
  }, [id])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Async function to update the content creator in the database
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('creators')
        .update({
          name: formData.name,
          url: formData.url,
          description: formData.description,
          imageURL: formData.imageURL
        })
        .eq('id', id)
      
      if (error) throw error
      
      alert('Creator updated successfully!')
      navigate(`/view/${id}`) // Go to view page to see changes
    } catch (error) {
      alert('Error updating creator: ' + error.message)
    }
    setLoading(false)
  }

  // ✅ NEW: Async function to delete a content creator from the database
  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete "${formData.name}"? This action cannot be undone.`)) {
      setLoading(true)
      
      try {
        const { error } = await supabase
          .from('creators')
          .delete()
          .eq('id', id)
        
        if (error) throw error
        
        alert('Creator deleted successfully!')
        navigate('/') // Go back to home page
      } catch (error) {
        alert('Error deleting creator: ' + error.message)
        setLoading(false)
      }
    }
  }

  if (fetchLoading) return <div style={{textAlign: 'center', padding: '2rem'}}>Loading creator...</div>
  if (error) return <div style={{textAlign: 'center', padding: '2rem', color: 'red'}}>Error: {error}</div>

  return (
    <div style={{maxWidth: '600px', margin: '2rem auto', padding: '0 1rem'}}>
      {/* Navigation */}
      <div style={{marginBottom: '1rem'}}>
        <Link to="/" style={{color: '#007bff', textDecoration: 'none'}}>
          ← Back to All Creators
        </Link>
        <span style={{margin: '0 1rem', color: '#666'}}>|</span>
        <Link to={`/view/${id}`} style={{color: '#007bff', textDecoration: 'none'}}>
          View Creator
        </Link>
      </div>

      <h1>Edit Creator</h1>
      
      {/* Form for user to modify creator information */}
      <form onSubmit={handleSubmit}>
        
        {/* Name field */}
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>

        {/* URL field */}
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>
            URL *
          </label>
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>

        {/* Description field */}
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              resize: 'vertical'
            }}
          />
        </div>

        {/* Image URL field (optional) */}
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>
            Image URL (optional)
          </label>
          <input
            type="url"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>

        {/* Preview current image if exists */}
        {formData.imageURL && (
          <div style={{marginBottom: '1rem'}}>
            <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>
              Current Image Preview:
            </label>
            <img 
              src={formData.imageURL} 
              alt="Preview"
              style={{
                maxWidth: '200px',
                maxHeight: '200px',
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
          {/* Update Button */}
          <button 
            type="submit" 
            disabled={loading}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}
          >
            {loading ? 'Updating...' : 'Update Creator'}
          </button>

          {/* ✅ NEW: Delete Button */}
          <button 
            type="button"
            onClick={handleDelete}
            disabled={loading}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}
          >
            {loading ? 'Deleting...' : 'Delete Creator'}
          </button>

          {/* Cancel Button */}
          <Link 
            to={`/view/${id}`}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1.1rem',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}

export default EditCreator