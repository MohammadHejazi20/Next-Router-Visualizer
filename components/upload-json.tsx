'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Upload } from 'lucide-react'

interface UploadJsonProps {
  onUpload: (data: any) => void
}

export function UploadJson({ onUpload }: UploadJsonProps) {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const handleUpload = () => {
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target?.result as string)
          onUpload(json)
        } catch (error) {
          console.error('Error parsing JSON:', error)
          alert('Invalid JSON file. Please try again.')
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <Input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="max-w-xs"
      />
      <Button onClick={handleUpload} disabled={!file}>
        <Upload className="w-4 h-4 mr-2" />
        Upload Structure
      </Button>
    </div>
  )
}

