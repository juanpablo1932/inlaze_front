import { HOCProps } from "~/types/ContextTypes";
import OnBoarding from "../../templates/OnBoarding";
import Header from "../../organisms/Header";

export default function MainPage({ content }: HOCProps) {
  return (
    <>
      <OnBoarding
        header={<Header />}
        content={content}
        // footer={<BannerFooter />}
      />
    </>
  );
}
