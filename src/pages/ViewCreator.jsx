import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Move fetchCreator function INSIDE useEffect
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single()
        
        if (error) throw error
        setCreator(data)
      } catch (error) {
        console.error('Error fetching creator:', error)
        setError(error.message)
      }
      setLoading(false)
    }

    fetchCreator() // Call the function
  }, [id]) // Only depend on 'id'

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this creator?')) {
      try {
        const { error } = await supabase
          .from('creators')
          .delete()
          .eq('id', id)
        
        if (error) throw error
        alert('Creator deleted successfully!')
        navigate('/')
      } catch (error) {
        alert('Error deleting creator: ' + error.message)
      }
    }
  }

  if (loading) return <div style={{textAlign: 'center', padding: '2rem'}}>Loading creator...</div>
  if (error) return <div style={{textAlign: 'center', padding: '2rem', color: 'red'}}>Error: {error}</div>
  if (!creator) return <div style={{textAlign: 'center', padding: '2rem'}}>Creator not found</div>

  return (
    <div style={{maxWidth: '800px', margin: '2rem auto', padding: '0 1rem'}}>
      {/* Navigation */}
      <div style={{marginBottom: '1rem'}}>
        <Link to="/" style={{color: '#007bff', textDecoration: 'none'}}>
          ← Back to All Creators
        </Link>
      </div>

      {/* Creator Information */}
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '2rem',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        
        {/* Display Image */}
        {creator.imageURL && (
          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <img 
              src={creator.imageURL} 
              alt={creator.name}
              style={{
                maxWidth: '100%',
                maxHeight: '400px',
                borderRadius: '8px',
                objectFit: 'cover'
              }}
            />
          </div>
        )}

        {/* Display Name */}
        <h1 style={{
          margin: '0 0 1rem 0',
          color: '#333',
          textAlign: 'center'
        }}>
          {creator.name}
        </h1>

        {/* Display URL */}
        <div style={{
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          <p style={{marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: 'bold'}}>
            Channel/Website:
          </p>
          <a 
            href={creator.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#007bff',
              fontSize: '1.1rem',
              wordBreak: 'break-all'
            }}
          >
            {creator.url}
          </a>
        </div>

        {/* Display Description */}
        {creator.description && (
          <div style={{marginBottom: '2rem'}}>
            <h3 style={{color: '#333', marginBottom: '0.5rem'}}>About:</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '1.1rem'
            }}>
              {creator.description}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '2rem'
        }}>
          <a 
            href={creator.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '1.1rem'
            }}
          >
            Visit Channel
          </a>
          
          <Link 
            to={`/edit/${creator.id}`}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#ffc107',
              color: 'black',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '1.1rem'
            }}
          >
            Edit Creator
          </Link>
          
          <button 
            onClick={handleDelete}
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
            Delete Creator
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewCreator