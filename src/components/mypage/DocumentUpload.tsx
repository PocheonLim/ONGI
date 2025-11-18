import DocumentItem from './DocumentItem'

const documents = [
  {
    title: '장기요양인정서',
    description: '장기요양등급 인정서 사본을 업로드해주세요',
  },
  {
    title: '건강진단서',
    description: '최근 6개월 이내 발급된 건강진단서를 업로드해주세요',
  },
  {
    title: '가족관계증명서',
    description: '최근 3개월 이내 발급된 가족관계증명서를 업로드해주세요',
  },
]

function DocumentUpload() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-2">필수 서류 등록</h2>
      <p className="text-gray-600 mb-6">
        요양원 입소를 위해 아래 서류를 업로드해주세요
      </p>

      <div className="space-y-4">
        {documents.map((doc) => (
          <DocumentItem
            key={doc.title}
            title={doc.title}
            description={doc.description}
          />
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
          <span>💡</span>
          서류 업로드 안내
        </h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• 모든 서류는 이미지 파일(JPG, PNG)로 업로드해주세요</li>
          <li>• 파일 크기는 최대 5MB까지 가능합니다</li>
          <li>• 서류가 명확하게 보이도록 촬영해주세요</li>
          <li>• 업로드된 서류는 안전하게 보관됩니다</li>
        </ul>
      </div>
    </div>
  )
}

export default DocumentUpload
