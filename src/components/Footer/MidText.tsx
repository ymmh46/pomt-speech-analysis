type midProps = {
  status: "pending" | "analyzing" | "paused" | "summary";
}

const MidText: React.FC<midProps> = ({ status }) => {

  function getInfo(status: "pending" | "analyzing" | "paused" | "summary") {
    if (status === "pending")
      return "Are You Ready?"
    if (status === "analyzing")
      return "Analyzing..."
    if (status === "paused")
      return "Paused"
    if (status === "summary")
      return "Your Summary"
  }

  return (
    <div className="font-mplus text-sm text-gray-500">{getInfo(status)}</div>
  )
}

export default MidText
