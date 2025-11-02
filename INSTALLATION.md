# Chan's Movie Trailer - 설치 및 실행 가이드

## 📥 GitHub에서 다운로드하는 방법

### 방법 1: ZIP 파일 다운로드 (추천)

1. **GitHub 리포지토리 접속**
   - 브라우저에서 https://github.com/chan0227/Chans-yeonghwateureilreoro-yeongeobaeugi 접속

2. **ZIP 파일 다운로드**
   - 초록색 `Code` 버튼 클릭
   - `Download ZIP` 선택
   - 파일이 다운로드됩니다 (파일명: `Chans-yeonghwateureilreoro-yeongeobaeugi-main.zip` 또는 브랜치명)

3. **압축 해제**
   - 다운로드한 ZIP 파일을 원하는 폴더에 압축 해제
   - 예: `C:\Projects\` (Windows) 또는 `~/Projects/` (Mac/Linux)

4. **터미널/명령 프롬프트 열기**
   - **Windows**: 폴더에서 `Shift + 우클릭` → "PowerShell 여기서 열기" 또는 "터미널 열기"
   - **Mac**: 폴더에서 우클릭 → "폴더에서 새로운 터미널 열기"
   - **또는** 터미널을 열고 `cd` 명령으로 이동:
     ```bash
     cd 경로/Chans-yeonghwateureilreoro-yeongeobaeugi-main
     ```

---

## 🚀 실행 방법

### 1단계: Node.js 설치 확인

```bash
node --version
npm --version
```

- Node.js가 설치되어 있지 않다면:
  - https://nodejs.org 방문
  - LTS 버전 다운로드 및 설치 (권장: v18 이상)

### 2단계: 의존성 설치

프로젝트 폴더에서 다음 명령 실행:

```bash
npm install
```

- 약 1-2분 소요
- `node_modules` 폴더가 생성됩니다

### 3단계: 개발 서버 실행

```bash
npm run dev
```

다음과 같은 메시지가 나타나면 성공:

```
  ▲ Next.js 14.2.33
  - Local:        http://localhost:3000

 ✓ Ready in 2-3s
```

### 4단계: 브라우저에서 확인

브라우저를 열고 다음 주소 중 하나로 접속:

- **http://localhost:3000**
- **http://127.0.0.1:3000**

---

## ⚠️ 문제 해결

### 포트 3000이 이미 사용 중인 경우

다른 포트로 실행:

```bash
npm run dev -- -p 3001
```

그리고 http://localhost:3001 로 접속

### "npm: command not found" 에러

- Node.js가 설치되지 않았거나 PATH에 추가되지 않음
- Node.js를 다시 설치하세요: https://nodejs.org

### 모듈 설치 실패

1. `node_modules` 폴더와 `package-lock.json` 삭제
2. 다시 설치:
   ```bash
   npm install
   ```

### Windows에서 실행 정책 오류

PowerShell을 **관리자 권한**으로 열고:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 🌐 프로덕션 빌드 및 배포

### 로컬에서 프로덕션 빌드 테스트

```bash
npm run build
npm start
```

### Vercel에 배포 (무료)

1. https://vercel.com 가입/로그인
2. `Import Project` 클릭
3. GitHub 리포지토리 연결
4. 자동으로 배포됩니다

또는 Vercel CLI 사용:

```bash
npm install -g vercel
vercel
```

---

## 📂 프로젝트 구조

```
Chans-yeonghwateureilreoro-yeongeobaeugi/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 글로벌 스타일
├── components/            # React 컴포넌트
│   ├── TrailerPlayer.tsx  # 비디오 플레이어
│   └── TrailerSelector.tsx # 트레일러 선택
├── data/
│   └── trailers.ts        # 트레일러 데이터
├── types/
│   └── index.ts           # TypeScript 타입
├── package.json           # 프로젝트 설정
└── README.md             # 프로젝트 문서
```

---

## 💡 사용 방법

1. **트레일러 선택**: 메인 화면에서 영화 선택
2. **영상 재생**: 자막이 자동으로 표시됩니다
3. **구간 반복**:
   - "구간 반복 시작" 버튼 클릭 → 시작 지점 설정
   - "끝 지점 설정" 버튼 클릭 → 끝 지점 설정
   - 자동으로 구간 반복 재생
4. **자막 클릭**: 자막 목록에서 원하는 부분 클릭하여 이동

---

## 🛑 서버 중지

터미널에서 `Ctrl + C` 키를 누르면 서버가 중지됩니다.

---

## 📞 문제가 있나요?

이슈를 등록해주세요: https://github.com/chan0227/Chans-yeonghwateureilreoro-yeongeobaeugi/issues

---

**Happy Learning! 🎬📚**
