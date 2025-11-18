import { useState } from 'react'
import toast from 'react-hot-toast'

interface DocumentItemProps {
  title: string
  description: string
}

function DocumentItem({ title, description }: DocumentItemProps) {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]

    if (!selectedFile) return

    // 파일 크기 체크 (5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      toast.error('파일 크기는 5MB 이하만 가능합니다')
      return
    }

    // 이미지 파일인지 체크
    if (!selectedFile.type.startsWith('image/')) {
      toast.error('이미지 파일만 업로드 가능합니다')
      return
    }

    setFile(selectedFile)

    // 미리보기 생성
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(selectedFile)

    toast.success('파일이 업로드되었습니다')
  }

  const handleDelete = () => {
    setFile(null)
    setPreview(null)
    toast.success('파일이 삭제되었습니다')
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        {file && (
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-600 text-sm"
          >
            삭제
          </button>
        )}
      </div>

      {preview ? (
        // 미리보기
        <div className="mt-3">
          <img
            src={preview}
            alt={title}
            className="w-full h-48 object-cover rounded-lg border border-gray-200"
          />
          <p className="text-sm text-gray-600 mt-2">{file?.name}</p>
        </div>
      ) : (
        // 업로드 버튼
        <label className="block">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition-colors">
            <svg
              className="w-12 h-12 mx-auto text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="text-sm text-gray-600">클릭하여 파일 업로드</p>
            <p className="text-xs text-gray-500 mt-1">이미지 파일만 가능 (최대 5MB)</p>
          </div>
        </label>
      )}
    </div>
  )
}

export default DocumentItem
