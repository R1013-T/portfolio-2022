import { useRouter } from "next/router";
import { useEffect } from "react";

const lp = () => {
  const router = useRouter()

  useEffect(() => {
    console.log(router.query.page)
  },[])

  return (
    <div>
      Enter
    </div>
  );
}

export default lp;