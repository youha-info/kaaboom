import { Box, Container, Typography } from "@mui/material";
import HomeMainBanner, {
  HomeMainBannerItemProps,
  homeMainBannerContentsHeight,
} from "../../components/organisms/HomeMainBanner";
import { theme } from "../../themes/theme";
import { useEffect, useRef, useState } from "react";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import CelebItem, { CelebProps } from "../../components/molecules/CelebItem";
import ProjectItem, {
  ProjectProps,
} from "../../components/molecules/ProjectItem";
import IdeaItem, { IdeaProps } from "../../components/molecules/IdeaItem";

const testHomeMainBanner: HomeMainBannerItemProps[] = [
  {
    id: "1",
    thumbnail: "/temp/banner/home-main-1.jpeg",
    title: {
      ko: (
        <>
          당신이 도경수에게
          <br />
          원하는 콘텐츠는?
        </>
      ),
      en: <>What content do you want from Do Kyungsoo?</>,
    },
    description: {
      ko: (
        <>
          아이돌부터 영화배우까지,
          <br />
          완벽주의자 도경수의 다음 콘텐츠는?
        </>
      ),
      en: (
        <>
          From idol to movie star, what will be the next content for
          perfectionist Do Kyung-soo?
        </>
      ),
    },
  },
  {
    id: "1",
    thumbnail: "/temp/banner/home-main-1.jpeg",
    title: {
      ko: (
        <>
          당신이 도경수에게
          <br />
          원하는 콘텐츠는?
        </>
      ),
      en: <>What content do you want from Do Kyungsoo?</>,
    },
    description: {
      ko: (
        <>
          아이돌부터 영화배우까지,
          <br />
          완벽주의자 도경수의 다음 콘텐츠는?
        </>
      ),
      en: (
        <>
          From idol to movie star, what will be the next content for
          perfectionist Do Kyung-soo?
        </>
      ),
    },
  },
  {
    id: "1",
    thumbnail: "/temp/banner/home-main-1.jpeg",
    title: {
      ko: (
        <>
          당신이 도경수에게
          <br />
          원하는 콘텐츠는?
        </>
      ),
      en: <>What content do you want from Do Kyungsoo?</>,
    },
    description: {
      ko: (
        <>
          아이돌부터 영화배우까지,
          <br />
          완벽주의자 도경수의 다음 콘텐츠는?
        </>
      ),
      en: (
        <>
          From idol to movie star, what will be the next content for
          perfectionist Do Kyung-soo?
        </>
      ),
    },
  },
];

const testCategories = [
  {
    label: "K-pop",
    value: "kpop",
    icon: "stars",
  },
  {
    label: "actor",
    value: "kpop",
    icon: "stars",
  },
  {
    label: "K-pop",
    value: "kpop",
    icon: "stars",
  },
];

export const testCelebs: CelebProps[] = [
  {
    id: "1",
    name: { ko: "도경수", en: "D.O." },
    thumbnail: "/temp/celeb/1.webp",
  },
  {
    id: "2",
    name: { ko: "우지호", en: "ZICO" },
    thumbnail: "/temp/celeb/2.webp",
  },
  {
    id: "6",
    name: { ko: "욘니와 치애", en: "YONNI & CHIAE" },
    thumbnail: "/temp/celeb/6.webp",
  },
  {
    id: "7",
    name: { ko: "손흥민", en: "SON" },
    thumbnail: "/temp/celeb/7.webp",
  },
  {
    id: "8",
    name: { ko: "류승룡", en: "SEUNG RYONG RYU" },
    thumbnail: "/temp/celeb/8.webp",
  },
  {
    id: "3",
    name: { ko: "첸", en: "CHEN" },
    thumbnail: "/temp/celeb/3.webp",
  },
  {
    id: "4",
    name: { ko: "백현", en: "BAEKHYUN" },
    thumbnail: "/temp/celeb/4.webp",
  },
  {
    id: "5",
    name: { ko: "시우민", en: "XIUMIN" },
    thumbnail: "/temp/celeb/5.webp",
  },
];

export const testProjects: ProjectProps[] = [
  {
    id: "1",
    celeb: {
      id: "1",
    },
    thumbnail: "/temp/contents/1.png",
    title: {
      ko: "크리스마스 캐롤 앨범 제작 프로젝트",
      en: "Christmas Carol Album Project",
    },
    description: {
      ko: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
      en: "If you have nothing to do now I can offer you a little entertainment – a psychological game. Try it and I hope that you will like it.",
    },
    story: { ko: "", en: "" },
    likeCount: 2640,
    commentCount: 1077,
    viewCount: 18473,
    liked: true,
    dueDate: new Date("2023-12-01"),
    fan: {
      id: "1",
    },
  },
  {
    id: "2",
    celeb: {
      id: "1",
    },
    thumbnail: "/temp/contents/2.jpeg",
    title: {
      ko: "화보 메이킹필름 콘텐츠 프로젝트",
      en: "Pictorial making film content project",
    },
    description: {
      ko: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
      en: "If you have nothing to do now I can offer you a little entertainment – a psychological game. Try it and I hope that you will like it.",
    },
    story: { ko: "", en: "" },
    likeCount: 3822,
    commentCount: 934,
    viewCount: 18473,
    liked: false,
    dueDate: new Date("2023-12-01"),
    fan: {
      id: "2",
    },
  },
  {
    id: "3",
    celeb: {
      id: "1",
    },
    thumbnail: "/temp/contents/3.jpg",
    title: {
      ko: "더 문 촬영 및 제작후기 공유 프로젝트",
      en: "The Moon filming and production review sharing project",
    },
    description: {
      ko: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
      en: "If you have nothing to do now I can offer you a little entertainment – a psychological game. Try it and I hope that you will like it.",
    },
    story: { ko: "", en: "" },
    likeCount: 1216,
    commentCount: 680,
    viewCount: 18473,
    liked: false,
    dueDate: new Date("2023-12-01"),
    fan: {
      id: "3",
    },
  },
  {
    id: "4",
    celeb: {
      id: "1",
    },
    thumbnail: "",
    title: {
      ko: "경수오빠 저희를 위해서 솔로앨범 내주세요",
      en: "Kyungsoo oppa, please release an album for us",
    },
    description: {
      ko: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
      en: "If you have nothing to do now I can offer you a little entertainment – a psychological game. Try it and I hope that you will like it.",
    },
    story: { ko: "", en: "" },
    likeCount: 1580,
    commentCount: 412,
    viewCount: 18473,
    liked: false,
    dueDate: new Date("2023-12-01"),
    fan: {
      id: "4",
    },
  },
  {
    id: "5",
    celeb: {
      id: "1",
    },
    thumbnail: "",
    title: {
      ko: "경수오빠 저희를 위해서 솔로앨범 내주세요",
      en: "Kyungsoo oppa, please release an album for us",
    },
    description: {
      ko: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
      en: "If you have nothing to do now I can offer you a little entertainment – a psychological game. Try it and I hope that you will like it.",
    },
    story: { ko: "", en: "" },
    likeCount: 2108,
    commentCount: 477,
    viewCount: 18473,
    liked: false,
    dueDate: new Date("2023-12-01"),
    fan: {
      id: "1",
    },
  },
  {
    id: "6",
    celeb: {
      id: "1",
    },
    thumbnail: "",
    title: {
      ko: "경수오빠 저희를 위해서 솔로앨범 내주세요",
      en: "Kyungsoo oppa, please release an album for us",
    },
    description: {
      ko: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
      en: "If you have nothing to do now I can offer you a little entertainment – a psychological game. Try it and I hope that you will like it.",
    },
    story: { ko: "", en: "" },
    likeCount: 2143,
    commentCount: 358,
    viewCount: 18473,
    liked: false,
    dueDate: new Date("2023-12-01"),
    fan: {
      id: "2",
    },
  },
  {
    id: "7",
    celeb: {
      id: "1",
    },
    thumbnail: "",
    title: {
      ko: "경수오빠 저희를 위해서 솔로앨범 내주세요",
      en: "Kyungsoo oppa, please release an album for us",
    },
    description: {
      ko: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
      en: "If you have nothing to do now I can offer you a little entertainment – a psychological game. Try it and I hope that you will like it.",
    },
    story: { ko: "", en: "" },
    likeCount: 2912,
    commentCount: 364,
    viewCount: 18473,
    liked: false,
    dueDate: new Date("2023-12-01"),
    fan: {
      id: "3",
    },
  },
];

export const testIdeas: IdeaProps[] = [
  {
    id: "1",
    celeb: {
      id: "1",
    },
    thumbnail: "",
    title: {
      ko: "경수오빠 저희를 위해서 솔로앨범 내주세요",
      en: "Kyungsoo oppa, please release an album for us",
    },
    description: {
      ko: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
      en: "If you have nothing to do now I can offer you a little entertainment – a psychological game. Try it and I hope that you will like it.",
    },
    story: { ko: "", en: "" },
    likeCount: 291,
    commentCount: 36,
    viewCount: 1847,
    liked: true,
    writtenDate: new Date("2023-11-07"),
    fan: {
      id: "3",
    },
  },
  {
    id: "2",
    celeb: {
      id: "1",
    },
    thumbnail: "",
    title: {
      ko: "경수오빠 저희를 위해서 솔로앨범 내주세요",
      en: "Kyungsoo oppa, please release an album for us",
    },
    description: {
      ko: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
      en: "If you have nothing to do now I can offer you a little entertainment – a psychological game. Try it and I hope that you will like it.",
    },
    story: { ko: "", en: "" },
    likeCount: 291,
    commentCount: 36,
    viewCount: 1847,
    liked: true,
    writtenDate: new Date("2023-11-08"),
    fan: {
      id: "2",
    },
  },
  {
    id: "3",
    celeb: {
      id: "1",
    },
    thumbnail: "",
    title: {
      ko: "경수오빠 저희를 위해서 솔로앨범 내주세요",
      en: "Kyungsoo oppa, please release an album for us",
    },
    description: {
      ko: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
      en: "If you have nothing to do now I can offer you a little entertainment – a psychological game. Try it and I hope that you will like it.",
    },
    story: { ko: "", en: "" },
    likeCount: 291,
    commentCount: 36,
    viewCount: 1847,
    liked: true,
    writtenDate: new Date("2023-11-08"),
    fan: {
      id: "2",
    },
  },
  {
    id: "4",
    celeb: {
      id: "1",
    },
    thumbnail: "",
    title: {
      ko: "경수오빠 저희를 위해서 솔로앨범 내주세요",
      en: "Kyungsoo oppa, please release an album for us",
    },
    description: {
      ko: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
      en: "If you have nothing to do now I can offer you a little entertainment – a psychological game. Try it and I hope that you will like it.",
    },
    story: { ko: "", en: "" },
    likeCount: 291,
    commentCount: 36,
    viewCount: 1847,
    liked: true,
    writtenDate: new Date("2023-11-08"),
    fan: {
      id: "2",
    },
  },
];

export default function App() {
  const router = useRouter();
  const { en } = router.query;
  return (
    <>
      <Container>
        <HomeMainBanner data={testHomeMainBanner} />
        <Box
          sx={{
            position: "absolute",
            top: homeMainBannerContentsHeight,
            left: 0,
            right: 0,
            background:
              "linear-gradient(rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 1) 120px)",
            bottom: 0,
            zIndex: 98,
          }}
        />
        <Box
          sx={{
            position: "relative",
            height: "200vh",
            m: theme.spacing(0, -2),
            "@media(min-width: 600px)": {
              m: theme.spacing(0, -3),
            },
            zIndex: 99,
          }}
          className="HomeContents"
        >
          <ProjectSection />
          <IdeaSection />
          <CelebSection />
        </Box>
      </Container>
    </>
  );
}

function ProjectSection() {
  const router = useRouter();
  const { en } = router.query;
  const [swiper, setSwiper] = useState<SwiperCore>();
  const handleSlideChange = () => {};
  return (
    <Box
      sx={{
        p: theme.spacing(0, 2),
        "@media(min-width: 600px)": {
          p: theme.spacing(0, 3),
        },
      }}
    >
      <Box
        sx={{
          p: theme.spacing(8, 0, 0, 0),
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            lineHeight: "24px",
            fontWeight: "700",
          }}
        >
          {en === "true"
            ? "Currently preparing projects"
            : "지금 준비중인 프로젝트"}
        </Typography>
        <Box
          sx={{
            m: theme.spacing(2, -2, 0, -2),
            "@media(min-width: 600px)": {
              m: theme.spacing(2, -3, 0, -3),
            },
            "& .swiper": {
              p: theme.spacing(0, 2),
              "@media(min-width: 600px)": {
                p: theme.spacing(0, 3),
              },
            },
          }}
        >
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              120: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              240: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              360: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              720: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              840: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
              960: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
              1080: {
                slidesPerView: 5,
                spaceBetween: 12,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 12,
              },
            }}
            // breakpoints={{
            //   0: {
            //     slidesPerView: 1,
            //     spaceBetween: 8,
            //   },
            //   240: {
            //     slidesPerView: 1,
            //     spaceBetween: 8,
            //   },
            //   480: {
            //     slidesPerView: 1,
            //     spaceBetween: 8,
            //   },
            //   720: {
            //     slidesPerView: 2,
            //     spaceBetween: 12,
            //   },
            //   840: {
            //     slidesPerView: 3,
            //     spaceBetween: 12,
            //   },
            //   1200: {
            //     slidesPerView: 4,
            //     spaceBetween: 12,
            //   },
            // }}
          >
            {testProjects.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectItem item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}

function IdeaSection() {
  const router = useRouter();
  const { en } = router.query;
  const [swiper, setSwiper] = useState<SwiperCore>();
  const handleSlideChange = () => {};
  return (
    <Box
      sx={{
        p: theme.spacing(0, 2),
        "@media(min-width: 600px)": {
          p: theme.spacing(0, 3),
        },
      }}
    >
      <Box
        sx={{
          p: theme.spacing(8, 0, 0, 0),
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            lineHeight: "24px",
            fontWeight: "700",
          }}
        >
          {en === "true" ? "Real-time popular ideas" : "실시간 인기 아이디어"}
        </Typography>
        <Box
          sx={{
            m: theme.spacing(2, -2, 0, -2),
            "@media(min-width: 600px)": {
              m: theme.spacing(2, -3, 0, -3),
            },
            "& .swiper": {
              p: theme.spacing(0, 2),
              "@media(min-width: 600px)": {
                p: theme.spacing(0, 3),
              },
            },
          }}
        >
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            // breakpoints={{
            //   0: {
            //     slidesPerView: 1,
            //     spaceBetween: 8,
            //   },
            //   240: {
            //     slidesPerView: 2,
            //     spaceBetween: 8,
            //   },
            //   480: {
            //     slidesPerView: 3,
            //     spaceBetween: 8,
            //   },
            //   720: {
            //     slidesPerView: 3,
            //     spaceBetween: 12,
            //   },
            //   840: {
            //     slidesPerView: 4,
            //     spaceBetween: 12,
            //   },
            //   1200: {
            //     slidesPerView: 5,
            //     spaceBetween: 12,
            //   },
            // }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              120: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              240: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              360: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              600: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              720: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              840: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              960: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              1080: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
            }}
          >
            {testIdeas.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <IdeaItem item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}

function CelebSection() {
  const router = useRouter();
  const { en } = router.query;
  const [swiper, setSwiper] = useState<SwiperCore>();
  const handleSlideChange = () => {};
  return (
    <Box
      sx={{
        p: theme.spacing(0, 2),
        "@media(min-width: 600px)": {
          p: theme.spacing(0, 3),
        },
      }}
    >
      <Box
        sx={{
          p: theme.spacing(8, 0, 0, 0),
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            lineHeight: "24px",
            fontWeight: "700",
          }}
        >
          {en === "true" ? "Currently hot celebs" : "최근 인기 셀럽"}
        </Typography>
        <Box
          sx={{
            m: theme.spacing(2, -2, 0, -2),
            "@media(min-width: 600px)": {
              m: theme.spacing(2, -3, 0, -3),
            },
            "& .swiper": {
              p: theme.spacing(0, 2),
              "@media(min-width: 600px)": {
                p: theme.spacing(0, 3),
              },
            },
            display: "none",
          }}
        >
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            // breakpoints={{
            //   0: {
            //     slidesPerView: 1,
            //     spaceBetween: 8,
            //   },
            //   240: {
            //     slidesPerView: 2,
            //     spaceBetween: 8,
            //   },
            //   480: {
            //     slidesPerView: 3,
            //     spaceBetween: 8,
            //   },
            //   720: {
            //     slidesPerView: 3,
            //     spaceBetween: 12,
            //   },
            //   840: {
            //     slidesPerView: 4,
            //     spaceBetween: 12,
            //   },
            //   1200: {
            //     slidesPerView: 5,
            //     spaceBetween: 12,
            //   },
            // }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              120: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              240: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              360: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              720: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
              840: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
              960: {
                slidesPerView: 5,
                spaceBetween: 12,
              },
              1080: {
                slidesPerView: 5,
                spaceBetween: 12,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 12,
              },
            }}
          >
            {testCelebs.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <CelebItem item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
        <Box
          sx={{
            m: theme.spacing(2, 0, 0, 0),
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridAutoRows: "1fr",
            gridTemplateRows: "auto",
            gridColumnGap: 8,
            gridRowGap: 16,
            "@media(min-width: 480px)": {
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
            },
            "@media(min-width: 600px)": {
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridColumnGap: 12,
              gridRowGap: 24,
            },
            "@media(min-width: 720px)": {
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            },
            "@media(min-width: 840px)": {
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            },
            "@media(min-width: 960px)": {
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
            },
            "@media(min-width: 1080px)": {
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
            },
            "@media(min-width: 1200px)": {
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            },
          }}
        >
          {testCelebs.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CelebItem item={item} />
              </SwiperSlide>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
