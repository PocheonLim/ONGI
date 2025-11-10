export interface Facility {
  id: number
  name: string
  address: string
  category: '요양원' | '요양병원' | '방문요양'
  capacity: number
  monthlyPrice: number
  distance: string
  bgColor: string
}

export const facilities: Facility[] = [
  {
    id: 1,
    name: '서울 사랑 요양원',
    address: '서울시 강남구 테헤란로 123',
    category: '요양원',
    capacity: 50,
    monthlyPrice: 2900000,
    distance: '3km 이내',
    bgColor: 'bg-amber-100'
  },
  {
    id: 2,
    name: '행복한 요양병원',
    address: '서울시 서초구 반포대로 456',
    category: '요양병원',
    capacity: 100,
    monthlyPrice: 4900000,
    distance: '5km 이내',
    bgColor: 'bg-pink-50'
  },
  {
    id: 3,
    name: '우리 방문요양센터',
    address: '서울시 송파구 올림픽로 789',
    category: '방문요양',
    capacity: 30,
    monthlyPrice: 1900000,
    distance: '2km 이내',
    bgColor: 'bg-rose-100'
  },
  {
    id: 4,
    name: '평화 요양원',
    address: '서울시 강동구 천호대로 234',
    category: '요양원',
    capacity: 40,
    monthlyPrice: 2800000,
    distance: '4km 이내',
    bgColor: 'bg-stone-100'
  },
  {
    id: 5,
    name: '새봄 요양병원',
    address: '서울시 광진구 구의동 567',
    category: '요양병원',
    capacity: 80,
    monthlyPrice: 4500000,
    distance: '3km 이내',
    bgColor: 'bg-amber-50'
  },
  {
    id: 6,
    name: '온정 방문요양',
    address: '서울시 성동구 성수동 890',
    category: '방문요양',
    capacity: 25,
    monthlyPrice: 1800000,
    distance: '1km 이내',
    bgColor: 'bg-purple-50'
  },
  {
    id: 7,
    name: '실버타운 요양원',
    address: '서울시 노원구 상계동 345',
    category: '요양원',
    capacity: 60,
    monthlyPrice: 3200000,
    distance: '6km 이내',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 8,
    name: '희망 요양병원',
    address: '서울시 도봉구 쌍문동 678',
    category: '요양병원',
    capacity: 90,
    monthlyPrice: 4700000,
    distance: '5km 이내',
    bgColor: 'bg-orange-100'
  },
  {
    id: 9,
    name: '케어 방문요양센터',
    address: '서울시 강북구 미아동 901',
    category: '방문요양',
    capacity: 20,
    monthlyPrice: 1700000,
    distance: '2km 이내',
    bgColor: 'bg-purple-100'
  },
  {
    id: 10,
    name: '황금빛 요양원',
    address: '서울시 은평구 응암동 234',
    category: '요양원',
    capacity: 45,
    monthlyPrice: 2950000,
    distance: '4km 이내',
    bgColor: 'bg-amber-200'
  },
  {
    id: 11,
    name: '청담 요양병원',
    address: '서울시 강남구 청담동 567',
    category: '요양병원',
    capacity: 120,
    monthlyPrice: 5500000,
    distance: '7km 이내',
    bgColor: 'bg-lime-100'
  },
  {
    id: 12,
    name: '따뜻한 방문요양',
    address: '서울시 마포구 합정동 890',
    category: '방문요양',
    capacity: 28,
    monthlyPrice: 1850000,
    distance: '3km 이내',
    bgColor: 'bg-rose-50'
  },
  {
    id: 13,
    name: '효도 요양원',
    address: '서울시 용산구 이촌동 123',
    category: '요양원',
    capacity: 55,
    monthlyPrice: 3100000,
    distance: '4km 이내',
    bgColor: 'bg-yellow-50'
  },
  {
    id: 14,
    name: '햇살 요양병원',
    address: '서울시 영등포구 여의도동 456',
    category: '요양병원',
    capacity: 110,
    monthlyPrice: 4900000,
    distance: '6km 이내',
    bgColor: 'bg-sky-100'
  },
  {
    id: 15,
    name: '사랑채 방문요양',
    address: '서울시 관악구 봉천동 789',
    category: '방문요양',
    capacity: 22,
    monthlyPrice: 1750000,
    distance: '2km 이내',
    bgColor: 'bg-amber-50'
  },
  {
    id: 16,
    name: '구름 요양원',
    address: '서울시 동작구 상도동 234',
    category: '요양원',
    capacity: 48,
    monthlyPrice: 2900000,
    distance: '3km 이내',
    bgColor: 'bg-green-50'
  },
  {
    id: 17,
    name: '무지개 요양병원',
    address: '서울시 양천구 목동 567',
    category: '요양병원',
    capacity: 95,
    monthlyPrice: 4600000,
    distance: '5km 이내',
    bgColor: 'bg-stone-50'
  },
  {
    id: 18,
    name: '정성 방문요양센터',
    address: '서울시 구로구 구로동 890',
    category: '방문요양',
    capacity: 26,
    monthlyPrice: 1800000,
    distance: '3km 이내',
    bgColor: 'bg-amber-100'
  }
]
