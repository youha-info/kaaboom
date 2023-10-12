import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { theme } from "../../themes/theme";
import { useRouter } from "next/router";

export default function Page({
  needId,
  aside,
  asideReverse,
  narrow,
  children,
}: {
  needId?: boolean;
  aside?: boolean;
  asideReverse?: boolean;
  narrow?: boolean;
  children?: React.ReactNode;
}) {
  const router = useRouter();
  const { id } = router.query;
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted &&
    (needId ? id !== "" && id !== undefined && id !== null : true) ? (
    <>
      <Box
        sx={
          narrow
            ? {
                width: `100%`,
                minWidth: "280px",
                maxWidth: `480px`,
                minHeight: "60vh",
                m: theme.spacing(0, "auto"),
                p: theme.spacing(0, 0, 12, 0),
              }
            : aside || asideReverse
            ? {
                display: "flex",
                width: `100%`,
                minWidth: "280px",
                maxWidth: `1280px`,
                m: theme.spacing(0, "auto"),
                minHeight: "100vh",
                flexDirection: asideReverse ? "column-reverse" : "column",
                "@media(min-width: 960px)": {
                  flexDirection: asideReverse ? "row-reverse" : "row",
                },
                "& > *:nth-of-type(1)": {
                  width: "100%",
                  "@media(min-width: 960px)": {
                    width: 420,
                    display: "block",
                    p: asideReverse
                      ? theme.spacing(0, 0, 12, 2)
                      : theme.spacing(0, 2, 12, 0),
                  },
                },
                "& > *:nth-of-type(2)": {
                  flex: 1,
                  p: theme.spacing(0, 0, 12, 0),
                  "@media(min-width: 960px)": {
                    width: `calc(100vw - 420px)`,
                    maxWidth: `calc(1280px - 420px)`,
                  },
                  width: "100%",
                },
              }
            : {
                width: `100%`,
                minWidth: "280px",
                maxWidth: `1280px`,
                m: theme.spacing(0, "auto"),
                minHeight: "60vh",
                p: theme.spacing(0, 0, 12, 0),
              }
        }
      >
        {children}
      </Box>
    </>
  ) : (
    <Box sx={{ minHeight: "100vh" }} />
  );
}