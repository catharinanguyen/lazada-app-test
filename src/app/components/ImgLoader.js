
export default function GraphCMSImageLoader({ src }) {
  const relativeSrc = (src) => src.split("/").pop();

  return `https://lzd-img-global.slatic.net/g/p/${relativeSrc(src)}`;
}


