import usePageStore from "../store/useStore";

export default function Home() {
  const { currentPage } = usePageStore();
  return <>{currentPage}</>;
}
