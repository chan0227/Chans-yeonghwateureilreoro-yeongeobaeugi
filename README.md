# Chan's Movie Trailer - 영화 트레일러로 영어 공부하기

유튜브 영화 트레일러를 통해 영어를 학습할 수 있는 웹 애플리케이션입니다.

## 주요 기능

- **영화 트레일러 선택**: 인기 영화 트레일러를 선택하여 학습
- **실시간 자막 표시**: 영상 재생에 맞춰 자막이 자동으로 표시됩니다
- **구간 반복 기능**: 특정 구간을 설정하여 반복 재생할 수 있습니다
- **자막 목록**: 전체 자막을 한눈에 보고 원하는 부분으로 이동 가능
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 환경에서 사용 가능

## 기술 스택

- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **react-youtube** - YouTube 플레이어 통합
- **Lucide React** - 아이콘

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 배포

### Vercel (추천)

1. GitHub 리포지토리를 Vercel에 연결
2. 자동으로 빌드 및 배포됩니다
3. 또는 Vercel CLI 사용:

```bash
npm install -g vercel
vercel
```

### Netlify

1. GitHub 리포지토리를 Netlify에 연결
2. Build command: `npm run build`
3. Publish directory: `.next`

## 사용 방법

1. **트레일러 선택**: 메인 화면에서 학습하고 싶은 영화 트레일러를 선택합니다
2. **재생 및 학습**: 영상을 재생하면 자막이 실시간으로 표시됩니다
3. **구간 반복**:
   - "구간 반복 시작" 버튼 클릭 → 시작 지점 설정
   - "끝 지점 설정" 버튼 클릭 → 끝 지점 설정
   - 해당 구간이 자동으로 반복됩니다
4. **자막 클릭**: 자막 목록에서 원하는 자막을 클릭하면 해당 위치로 이동합니다

## 커스터마이징

### 새로운 트레일러 추가

`data/trailers.ts` 파일에 새로운 트레일러를 추가하세요:

```typescript
{
  id: 'unique-id',
  title: '영화 제목',
  videoId: 'YouTube_Video_ID',
  thumbnail: 'https://img.youtube.com/vi/YouTube_Video_ID/maxresdefault.jpg',
  description: '영화 설명',
  subtitles: [
    { start: 0, end: 3, text: "자막 텍스트" },
    // 더 많은 자막...
  ],
}
```

### 자막 추가 팁

- YouTube 영상의 자동 생성 자막을 참고하세요
- 각 자막의 시작(start)과 끝(end) 시간을 초 단위로 정확히 입력하세요
- 자연스러운 학습을 위해 문장 단위로 자막을 나누세요

## 라이선스

MIT

## 기여

이슈나 PR을 자유롭게 제출해주세요!
